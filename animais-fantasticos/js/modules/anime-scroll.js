export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length) {
    const windowHalfSize = window.innerHeight * 0.55;

    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalfSize) < 0;
        if(isSectionVisible) 
          section.classList.add('ativo');
        else if(section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    };

    animeScroll();

    window.addEventListener('scroll', animeScroll);
  };

};
