// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initializeScrollAnimations()
})

// Scroll Animations (up and down)
function initializeScrollAnimations() {
  const observerOptions = {
    rootMargin: "25px 25px 25px 25px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target
      if (entry.isIntersecting) {
        element.classList.add("visible")
        element.classList.remove("hidden-up")
      } else {
        element.classList.remove("visible")
        element.classList.add("hidden-up")
      }
    })
  }, observerOptions)

  const fadeElements = document.querySelectorAll(".fade-in")
  fadeElements.forEach((element) => {
    observer.observe(element)
  })
}