// ************************************fish**********************************
document.addEventListener('DOMContentLoaded', function () {
    let options = {
        threshold: 0.1
    };
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    let targets = document.querySelectorAll('.fish-img');
    targets.forEach(target => {
        observer.observe(target);
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const revealElements = document.querySelectorAll('.reveal');

  function reveal() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      } else {
        revealElements[i].classList.remove('active');
      }
    }
  }

  window.addEventListener("scroll", reveal);

  reveal();
});