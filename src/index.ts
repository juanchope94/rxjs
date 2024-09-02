import { fromEvent, Observer, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, debounceTime, map, switchMap } from "rxjs/operators";

const inputQuery = document.getElementById('character-name');

const inputEvent$ = fromEvent<KeyboardEvent>(inputQuery, 'keyup').pipe(
    debounceTime(5000),
    map((event) =>{
      const input = event.target as HTMLInputElement;
      return input.value;
    }),
    switchMap((character)=>{
      return ajax.getJSON(`https://rickandmortyapi.com/api/character/?name=${character}`).pipe(
        map((response:any) => {
          const firstCharacter = response?.results[0];
          return {
            name: firstCharacter.name,
            image: firstCharacter.image,
            gender: firstCharacter.gender,
            species: firstCharacter.species,
          };
        }),
        catchError((err:any) => {
          console.error(err);
          return of({
            name: "Alien Googah",
            image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            gender: "unknown",
            species: "Alien"
          });
        })
      );
    })
);

inputEvent$.subscribe((chareacterFound) => {
  console.log(chareacterFound);
  const nameCharacterDiv = document.getElementById('name-character');
  nameCharacterDiv.innerText = `Name: ${chareacterFound.name}`;
  const genderCharacterDiv = document.getElementById('gender-character');
  genderCharacterDiv.innerText = `Gender: ${chareacterFound.gender}`;
  const speciesCharacterDiv = document.getElementById('species-character');
  speciesCharacterDiv.innerText = `Specie: ${chareacterFound.species}`;
  const imageCharacterDiv = document.getElementById('image-character') as HTMLImageElement;
  imageCharacterDiv.src = chareacterFound.image;
});
