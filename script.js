document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          const img = entry.target;
          img.src = img.dataset.src; 
          img.classList.remove("lazy"); 
          obs.unobserve(img);
        }, 200);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
});
