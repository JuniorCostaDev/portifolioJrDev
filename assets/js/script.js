function initMenuMobile() {

  const btnMobile = document.getElementById('btn-mobile');
  const itemList = document.querySelectorAll('.nav__item a');

  if (itemList.length) {
    function toggleMenu() {
      const nav = document.querySelector('.nav');
      nav.classList.toggle('menu-ativo');
    }

    itemList.forEach((index) => {
      index.addEventListener('click', toggleMenu);
    });

    btnMobile.addEventListener('click', toggleMenu);
  }
}
initMenuMobile();

function initScrollSuave() {

  const linkInterno = document.querySelectorAll('.nav__list a[href^="#"]');

  if (linkInterno.length) {
    
    function scrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linkInterno.forEach((link) => {
      link.addEventListener('click', scrollSuave);
    });
    }
}
initScrollSuave();

function initAnimaScroll() {
  
  const sections = document.querySelectorAll('.js-animacao-scroll');

  if (sections.length) {
    
    const telaMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const secaoVisivel = (sectionTop - telaMetade) < 0;
          if (secaoVisivel) {
            section.classList.add('ativo');
      
          }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimaScroll();


