import { from, fromEvent, range } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$.pipe(
    tap( x => console.log('antes', x) ),
    map( val => val *10 ),
    tap({
        next: val => console.log('Despues', val),
        complete: () => console.log('complete')
    })
).subscribe(val => console.log('subs', val));

