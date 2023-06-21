import { fromEvent, interval } from 'rxjs';
import { map, sample, sampleTime } from 'rxjs/operators';

const interval$ = interval(5000);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);