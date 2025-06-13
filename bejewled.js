function learnMore() {
    window.location.href = "#about";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
});
<script>
  let slideIndex = 0;
  const slides = document.querySelectorAll('.hero-slide');

  function showSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  // Initial slide
  slides[slideIndex].classList.add('active');

  // Start slideshow
  setInterval(showSlides, 5000); // 5 seconds
</script>
