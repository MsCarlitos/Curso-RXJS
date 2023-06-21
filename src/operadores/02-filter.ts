import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10).pipe(
//     filter( val => val % 1 === 1 )
// ).subscribe(console.log);

range(1, 10).pipe(
    filter( (val, i) => {
        return val % 2 === 1;
    })
).subscribe(console.log);

interface Personaje {
    tipo:string;
    nombre:string;
}

const personaje:Personaje[] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    }
];

from(personaje).pipe(
    filter(p => p.tipo === 'Heroe')
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code),
    filter( key => key ==='Enter' )
);

keyup$.subscribe(console.log);