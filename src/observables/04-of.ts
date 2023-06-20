import { of } from 'rxjs';

// const obs$ = of([1,2],{a:1, b:2}, function(){}, true, Promise.resolve(true));
const obs$ = of<number[]>(...[1,2,3,4,5,6],7,8);

console.log('inicio del Obs$');
obs$.subscribe(
    next => console.log('Next',next),
    null,
    () => console.log('Terminamos la secuencia')
);

console.log('Fin del Obs$');