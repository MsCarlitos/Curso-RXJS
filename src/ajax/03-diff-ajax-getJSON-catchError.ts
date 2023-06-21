import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delay/1';

const manejaError = ( err: AjaxError ) => {
    console.warn('Error: ', err.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON( url ).pipe(
//     catchError( manejaError)
// );

// const obs2$ = ajax( url ).pipe(
//     catchError( manejaError)
// );

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

obs$.pipe(
    catchError( manejaError )
).subscribe({
    next: val => console.log('Next: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.log('Complete')
});
// obs2$.subscribe( data => console.log('Ajax: ', data));