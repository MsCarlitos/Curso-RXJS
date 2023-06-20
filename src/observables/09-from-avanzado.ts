import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = crea un observable en base a un array, objeto, promise, iterable, observable, etc
*/

const observer = {
    next: val => console.log(val),
    complete: () => console.log('complete')
}

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (let id = 0; id < miGenerador.length; id++) {
//     const element = miGenerador[id];
//     console.log(element);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Carlos');

const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async (resp) => {
//     console.log( resp );
//     const dataResp = await resp.json()
//     console.log( dataResp );
// })



source$.subscribe( observer );