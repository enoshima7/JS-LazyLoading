let options = {
    threshold: 1
}
const io = new IntersectionObserver((entries) => { 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src
            io.unobserve(entry.target)
        }
    });
}, options)

let imgs = document.querySelectorAll('[data-src]')
console.log(imgs);
imgs.forEach(img => {
    io.observe(img)
});