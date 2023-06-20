import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre:string) => console.log(`Hola ${ nombre }`);

// asyncScheduler.schedule(saludar, 1000);
// asyncScheduler.schedule(saludar2, 1000, 'Carlos');

const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state+1, 1000);
}, 500, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 5000);

asyncScheduler.schedule(() => subs.unsubscribe(), 5000, );