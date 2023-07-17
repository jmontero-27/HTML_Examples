function select(selector) {
    return document.querySelector(selector);
  }
  
  // Tu código restante que utiliza la función select...
  (function () {
      "use strict";
  
      const typed = select('.typed');
      if (typed) {
          let typed_strings = typed.getAttribute('data-typed-items');
          typed_strings = typed_strings.split(',');
          new Typed('.typed', {
              strings: typed_strings,
              loop: true,
              typeSpeed: 100,
              backSpeed: 50,
              backDelay: 2000
          });
      }
  
  })();
  