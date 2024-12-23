import * as bootstrap from 'bootstrap'
import Lenis from 'lenis'

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  //  console.log(e);
});