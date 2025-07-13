document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navContainer = document.querySelector('.nav-container');
        
        mobileMenuBtn.addEventListener('click', function() {
            navContainer.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navContainer.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Mobile dropdown toggle
        document.querySelectorAll('.dropdown > a').forEach(dropdown => {
            dropdown.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    parent.classList.toggle('active');
                }
            });
        });
        
        // Close menu when clicking a link (mobile)
        document.querySelectorAll('.nav-links a:not(.dropdown > a)').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });

        function redirectToBooking() {
          window.location.href = "booking.html";
        }

        document.getElementById('btn-red').addEventListener('click', redirectToBooking);


// Form Submission
        const newsletterForm = document.getElementById('newsletterForm');
        const successMessage = document.getElementById('successMessage');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the data to your server
            // For demo purposes, we'll just show the success message
            newsletterForm.style.display = 'none';
            successMessage.style.display = 'block';
        });
        
        function resetForm() {
            newsletterForm.reset();
            newsletterForm.style.display = 'block';
            successMessage.style.display = 'none';
        }
       
      
  ///image sliders
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  const cards = document.querySelectorAll('.slides-card');
  const cardWidth = cards[0].offsetWidth + 20; // width + gap
  
  let currentPosition = 0;
  let maxPosition = -(cards.length * cardWidth - slider.offsetWidth);
  
  function updateSlider() {
    slides.style.transform = `translateX(${currentPosition}px)`;
  }
  
  // Auto-slide functionality
  setInterval(() => {
    currentPosition -= cardWidth;
    if (currentPosition < maxPosition) {
      currentPosition = 0;
    }
    updateSlider();
  }, 3000);
  
  // Touch/swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left
      currentPosition = Math.max(currentPosition - cardWidth, maxPosition);
      updateSlider();
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right
      currentPosition = Math.min(currentPosition + cardWidth, 0);
      updateSlider();
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button only on scroll (and mobile)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100 && window.innerWidth <= 768) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Scroll to top when clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500,
    once: true      
  });
});


