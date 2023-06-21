import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id posuere nisl. Fusce et mauris nunc. Duis nisi velit, lacinia quis risus quis, laoreet blandit ante. Phasellus quis nisl fermentum, sollicitudin nunc eu, ultrices turpis. Curabitur turpis diam, laoreet sit amet erat eget, viverra feugiat sem. Pellentesque luctus pulvinar felis, sit amet congue lacus aliquam vel. Donec sit amet tristique dui, id hendrerit magna.
<br /> <br />
Proin scelerisque, magna non elementum imperdiet, risus tortor porttitor nisi, quis pellentesque massa massa vel mauris. Aliquam interdum massa ut convallis mattis. Etiam mollis tincidunt enim cursus tristique. Cras et cursus libero, et facilisis leo. Proin elit ipsum, dictum id laoreet non, ullamcorper vitae lorem. Nam fringilla sem vel tincidunt feugiat. Vestibulum bibendum elit ut sem posuere, egestas semper justo bibendum. Quisque nec mi ipsum. Duis nec ligula eget nulla pulvinar consectetur at nec risus. Nulla rutrum dictum erat bibendum cursus. Nulla condimentum eu massa vitae mollis.
<br /> <br />
In dictum arcu ut mi gravida, non bibendum massa finibus. Integer semper dictum mauris, id placerat elit mattis nec. Maecenas elit tortor, molestie a pulvinar cursus, lacinia at diam. Aliquam in auctor dolor, pretium vestibulum nulla. Etiam vulputate feugiat ante quis sodales. Mauris vitae velit quam. Vivamus eu ante erat. Vivamus eget tincidunt nisl, vel consequat quam. Donec id enim dapibus, blandit massa non, tempus libero. Vestibulum eu elit sit amet arcu efficitur auctor blandit non sem. Quisque nunc justo, molestie vitae orci vel, placerat interdum neque. Fusce tempor nulla arcu, et lobortis nisl condimentum non. Sed sed venenatis velit, a euismod augue. Duis et justo quis massa gravida malesuada ac ut eros. Aenean tincidunt ex justo.
<br /> <br />
Aenean turpis nunc, feugiat sit amet dolor in, vehicula rutrum turpis. Vivamus ac tempor nunc. Mauris tempus eu est nec condimentum. Sed at efficitur massa, quis porta arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae metus porttitor, venenatis turpis quis, imperdiet nunc. Duis quis euismod dui. Cras dui erat, egestas quis diam a, cursus tempus neque. Nam pharetra risus ligula, vel semper eros laoreet id. Donec a metus vehicula, maximus libero quis, mattis lorem. Nunc nec augue vulputate, rhoncus est efficitur, egestas mi. Curabitur urna nisi, maximus et accumsan quis, eleifend sit amet ante. Nullam fermentum tincidunt libero vitae varius. Donec pellentesque tellus ac porttitor placerat.
<br /> <br />
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse aliquam lectus diam, sagittis sodales ligula commodo in. Donec mauris enim, malesuada vel elementum ut, rhoncus quis lacus. Etiam vel massa in mi rutrum sagittis. Praesent et erat in nunc semper placerat. In pulvinar lorem lectus, ac placerat leo facilisis vel. Phasellus vestibulum tellus turpis, sed fermentum dolor sollicitudin blandit.
<br /> <br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id posuere nisl. Fusce et mauris nunc. Duis nisi velit, lacinia quis risus quis, laoreet blandit ante. Phasellus quis nisl fermentum, sollicitudin nunc eu, ultrices turpis. Curabitur turpis diam, laoreet sit amet erat eget, viverra feugiat sem. Pellentesque luctus pulvinar felis, sit amet congue lacus aliquam vel. Donec sit amet tristique dui, id hendrerit magna.
<br /> <br />
Proin scelerisque, magna non elementum imperdiet, risus tortor porttitor nisi, quis pellentesque massa massa vel mauris. Aliquam interdum massa ut convallis mattis. Etiam mollis tincidunt enim cursus tristique. Cras et cursus libero, et facilisis leo. Proin elit ipsum, dictum id laoreet non, ullamcorper vitae lorem. Nam fringilla sem vel tincidunt feugiat. Vestibulum bibendum elit ut sem posuere, egestas semper justo bibendum. Quisque nec mi ipsum. Duis nec ligula eget nulla pulvinar consectetur at nec risus. Nulla rutrum dictum erat bibendum cursus. Nulla condimentum eu massa vitae mollis.
<br /> <br />
In dictum arcu ut mi gravida, non bibendum massa finibus. Integer semper dictum mauris, id placerat elit mattis nec. Maecenas elit tortor, molestie a pulvinar cursus, lacinia at diam. Aliquam in auctor dolor, pretium vestibulum nulla. Etiam vulputate feugiat ante quis sodales. Mauris vitae velit quam. Vivamus eu ante erat. Vivamus eget tincidunt nisl, vel consequat quam. Donec id enim dapibus, blandit massa non, tempus libero. Vestibulum eu elit sit amet arcu efficitur auctor blandit non sem. Quisque nunc justo, molestie vitae orci vel, placerat interdum neque. Fusce tempor nulla arcu, et lobortis nisl condimentum non. Sed sed venenatis velit, a euismod augue. Duis et justo quis massa gravida malesuada ac ut eros. Aenean tincidunt ex justo.
<br /> <br />
Aenean turpis nunc, feugiat sit amet dolor in, vehicula rutrum turpis. Vivamus ac tempor nunc. Mauris tempus eu est nec condimentum. Sed at efficitur massa, quis porta arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae metus porttitor, venenatis turpis quis, imperdiet nunc. Duis quis euismod dui. Cras dui erat, egestas quis diam a, cursus tempus neque. Nam pharetra risus ligula, vel semper eros laoreet id. Donec a metus vehicula, maximus libero quis, mattis lorem. Nunc nec augue vulputate, rhoncus est efficitur, egestas mi. Curabitur urna nisi, maximus et accumsan quis, eleifend sit amet ante. Nullam fermentum tincidunt libero vitae varius. Donec pellentesque tellus ac porttitor placerat.
<br /> <br />
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse aliquam lectus diam, sagittis sodales ligula commodo in. Donec mauris enim, malesuada vel elementum ut, rhoncus quis lacus. Etiam vel massa in mi rutrum sagittis. Praesent et erat in nunc semper placerat. In pulvinar lorem lectus, ac placerat leo facilisis vel. Phasellus vestibulum tellus turpis, sed fermentum dolor sollicitudin blandit.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// Funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    // console.log(event)
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}
// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});