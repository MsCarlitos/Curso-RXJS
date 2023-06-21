import {  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.post( url, {
    id:1,
    nombre:'Carlos'
    }, {
        'mi-token':'ABC123'
    } );

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token':'ABC123'
    },
    body: {
        id:1,
        nombre:'Carlos'
    },
}).subscribe( console.log );


obs$.pipe().subscribe({
    next: val => console.log('Next: ', val),
    error: err => console.warn('Error: ', err),
    complete: () => console.log('Complete')
});

