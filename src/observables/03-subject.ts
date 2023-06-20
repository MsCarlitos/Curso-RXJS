import { Observer, Observable, Subject } from "rxjs";

const observer:Observer<any> = {
    next: value => console.log('next: ',value),
    error: error => console.warn('error: ',error),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>(subscriber => {

    const interval = setInterval( () => {
        subscriber.next( Math.random() );
    }, 1000);

    setTimeout( () => {
        subscriber.complete()
    },2500)
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})


/**
 * 1 - Casteo Multiple
 * 2 - Tambien es un observer
 * 3 - Next, Error, y complete
 */
const subject$ = new Subject<number>();

const subscription = intervalo$.subscribe( subject$ );
const subs1 = subject$.subscribe( rnd => console.log( 'subs1 '+ rnd ) );
const subs2 = subject$.subscribe( rnd => console.log( 'subs2 '+ rnd ) );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
