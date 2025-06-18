// Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
// Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            window.scrollY > 50 ? 
                navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
                navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        });

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 // Responsive breakpoints
 breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
 }

});

  const faders = document.querySelectorAll('.text-content');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else {
      entry.target.classList.remove('visible');
    }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(el => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible1');
    } else {
      entry.target.classList.remove('visible1');
    }
  });
}, {
  threshold: 0.1
});

const images = document.querySelectorAll('.about-image');
images.forEach(img => observer2.observe(img));