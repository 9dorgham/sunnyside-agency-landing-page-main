// Selectors
let hello = Array.from("We are creatives");
let h1 = document.querySelector('h1');
let nav = document.querySelector('.nav');
let burger = document.querySelector('.burger');
let arrow = document.querySelector('.arrow');
let trans = document.querySelector('.trans');
let standout = document.querySelector('.standout');
let testi = document.querySelector('.testi');
let testiBoxes = testi.querySelectorAll('.box > div');
let gallary = document.querySelector('.gallary');
let elements = [trans, standout, testi, ...testiBoxes];
let duration = 1.5;


// h1 animation
window.onload = () => {
  hello.forEach(chr => {
    h1.textContent += chr;
  })
  gsap.fromTo(h1, {y: "-100%", opacity: 0}, {y: 0, opacity: 1, duration: 1});
}
// Done


// slide & Burger
let q = window.matchMedia('(max-width: 850px)');
q.addEventListener('change', make);
let c = true;

function make(a) {
  if (a.matches) {
    nav.classList.add('slide');
    nav.style.opacity= '0';
    burger.classList.add('show');

    burger.addEventListener('click', () => {
      if (c) {
        nav.style.opacity= '1';
        c = false;
      }else {
        nav.style.opacity= '0';
        c = true;
      }
    })

  }else {
    burger.classList.remove('show');
    nav.classList.remove('slide');
    nav.style.opacity= '1';
  }
}
// Done


// scroll To down
arrow.addEventListener('click', () => {
  window.scrollTo({
    top: trans.offsetTop,
    behavior: "smooth",
  });
});
// Done



// Observer API
let observer = new IntersectionObserver(move);
elements.forEach(ele => observer.observe(ele));

// Observer callback
function move(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.classList.contains('trans')) {
      gsap.fromTo('.trans', {x: "-100%"}, {x: 0, duration});
    }


    if (entry.isIntersecting && entry.target.classList.contains('standout')) {
      gsap.fromTo('.standout', {x: "100%"}, {x: 0, duration});
    }
    
    if (entry.isIntersecting && entry.target === testi) {
      testimonials(testiBoxes);
    }
  })
}

// Testi animation
function testimonials(arr) {
  let x = 0.4;

  for (let i of arr) {
    gsap.fromTo(i, {scale: 0}, {scale: 1, duration: x});  
    x *= 2;
  }
}
// Done


// ^-^ It is better to use Observer API ^-^
window.onscroll = function () {
  if (this.scrollY >= gallary.offsetTop - 500) {

    for (let i of gallary.children) {
      i.style.clipPath= 'inset(0%)';
    }
  }else {
    for (let i of gallary.children) {
      i.style.clipPath= 'inset(50%)';
    }
  }
}
// Done