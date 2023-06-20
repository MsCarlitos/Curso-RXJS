import { Observer, Observable } from "rxjs";

// const obs$ = Observable.create();

const observer:Observer<any> = {
    next: value => console.log('next: ',value),
    error: error => console.error('error: ',error),
    complete: () => console.info('complete')
};

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    // forzar un error
    let a = undefined;

    a.nombre = 'Carlos';

    subs.complete();
    subs.next('Mundo'); // NUNCA SE EJECURARA SI ESTA DESPUES DEL COMPLETE
});

obs$.subscribe(observer);

obs$.subscribe()

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('complete')
// );

