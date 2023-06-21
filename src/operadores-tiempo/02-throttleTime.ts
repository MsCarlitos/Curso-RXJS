import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(document, 'keyup');

input$.pipe(
    pluck('target', 'value'),
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    distinctUntilChanged()
).subscribe(console.log);