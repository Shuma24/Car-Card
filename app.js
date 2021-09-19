const slides = document.querySelectorAll(".slide")

for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearAcvtiveClasses()
      
        slide.classList.add("active")
    })
}

function clearAcvtiveClasses() {
    slides.forEach((slide) => {
    slide.classList.remove("active")
    })
}