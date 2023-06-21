import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pluck, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(3000),
    map( ({ x, y }) => ({ x, y })),
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(document, 'keyup');

input$.pipe(
    pluck('target', 'value'),
    sampleTime(2000),
    distinctUntilChanged()
).subscribe(console.log);