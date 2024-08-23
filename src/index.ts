import { Observable, Observer, interval, Subject } from 'rxjs';

const observer : Observer<any> = {
    next : value => console.log("Next", value),
    error: error => console.log("Error", error),
    complete: () => console.log("Complete")
}

const obs$ = new Observable<number> ( subscriber =>{
    // subscriber.next(1);
    // subscriber.next(2);
    // subscriber.next(3);


    // subscriber.complete();
    // subscriber.next(4);
    // subscriber.next(5);

    const interval = setInterval( () => {
        const random= Math.random();
        subscriber.next(random);
        console.log("Interval", random)
    }, 1000);

    // setTimeout(() => {
    //     subscriber.complete();
    // }, 2500);
    
    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido")
    }

})

const subject$ = new Subject();

const subjectSubscribe = obs$.subscribe(subject$)

const subs1 = subject$.subscribe(value => console.log("Subs1", value));
const subs2 = subject$.subscribe(value => console.log("Subs2", value));
const subs3 = subject$.subscribe(value => console.log("Subs3", value));
subs1.add(subs2).add(subs3)

setTimeout(() => {
    subjectSubscribe.unsubscribe()
}, 2500);