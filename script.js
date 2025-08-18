// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initializeScrollAnimations()
  initializeSmoothScroll()
})

// Scroll Animations (up and down)
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px 50px 0px",
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

// Smooth Scroll
function initializeSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}