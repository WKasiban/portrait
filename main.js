const animate = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("The element is intersecting");
            entry.target.style.animation = entry.target.dataset.animate
        } else {
            entry.target.style.animation = 'none';
        }
    })
}

let observer = new IntersectionObserver(animate);

const animateItems = document.querySelectorAll('.animate')

animateItems.forEach(item => {
    observer.observe(item)
})