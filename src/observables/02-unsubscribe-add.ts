import { Observer, Observable } from "rxjs";

const observer:Observer<any> = {
    next: value => console.log('next: ',value),
    error: error => console.warn('error: ',error),
    complete: () => console.info('complete')
};

const intervalo$ = new Observable<number>(subscriber => {
    // crear un contador
    let count: number = 0;
    const interval = setInterval( () => {
        // subscriber.next(count++);
    }, 1000);

    setTimeout( () => {
        subscriber.complete()
    },2500)
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})

const subs = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer);

subs.add(subs2);

setTimeout( () => {
    subs.unsubscribe()
    subs2.unsubscribe()
}, 3000)