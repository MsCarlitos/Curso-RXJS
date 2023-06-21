import { of } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';

// const url = 'http://api.github.com/users?per_page=5';

// const manejaErrores = ( resp: Response ) => {
//     if( !resp.ok ) {
//         throw new Error( resp.statusText )
//     }
//     return resp
// }

// const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( resp => resp.json())
//     .then( data => console.log('data: ', data))
//     .catch( err => console.log( err ))

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json())
//     .then( data => console.log('data: ', data))
//     .catch( err => console.warn( 'Error en usuarios ',err ))

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = ( err: AjaxError ) => {
    console.warn('Error en: ', err.message);
    return of([]);
}

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
).subscribe(users => console.log('Usuarios: ', users))