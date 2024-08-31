import { Observable, Observer, Subject, observable, of, interval, fromEvent } from 'rxjs';
import { map, debounceTime, catchError, switchMap } from  'rxjs/operators';
import { ajax } from 'rxjs/ajax'

const observer : Observer<any> = {
    next : value => console.log("Next", value),
    error: error => console.log("Error", error),
    complete: () => console.log("Complete")
}


// const url= 'https://api.github.com/users?per_page=';


// const input = document.createElement('input');
// document.querySelector('body').append(input);



// const click$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
//     switchMap( (texto) => ajax.getJSON(url + texto).pipe(
//         catchError(err => of([1,2,3,'a']))
//         ))
//  ).subscribe(observer)




// const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
//     catchError(err => of([1,2,3,'a']))
// )


// obs$.subscribe(observer)









// const input = document.createElement('input');
// document.querySelector('body').append(input);

// const click$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
//     debounceTime(1000)
// )



// click$.subscribe(value => console.log(value.key))









// const obs$ = interval(500).pipe(
//     map(value => {
//         return {
//             numeroMultiplicado : value * 10
//         }
//     })
//     );

// obs$.subscribe(observer)








// const obs$= of<any>(1,2,{a:1, b:2},4,5,6,7,true,9,10)

// obs$.subscribe(value => console.log("subs1", value))
// obs$.subscribe(value => console.log("subs2", value))
// obs$.subscribe(value => console.log("subs3", value))








// const obs$ = new Observable<number> ( subscriber =>{
//     // subscriber.next(1);
//     // subscriber.next(2);
//     // subscriber.next(3);


//     // subscriber.complete();
//     // subscriber.next(4);
//     // subscriber.next(5);

//     const interval = setInterval( () => {
//         const random= Math.random();
//         subscriber.next(random);
//         console.log("Intervalo", random)

//     }, 1000);

//     // setTimeout(() => {
//     //     subscriber.complete();
//     // }, 2500);
    
//     return () => {
//         clearInterval(interval);
//         console.log("Intervalo destruido")
//     }

// })

// const subject$ = new Subject();

// const subscription = obs$.subscribe(subject$)

// const subs1 = subject$.subscribe(value => console.log("Subs1", value));
// const subs2 = subject$.subscribe(value => console.log("Subs2", value));
// const subs3 = subject$.subscribe(value => console.log("Subs3", value));

// setTimeout(() => {

//     subject$.next(10000)
//     subject$.complete();
//     subscription.unsubscribe();
// }, 2500);
