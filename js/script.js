function slider() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 100,
        peek: { before: 150, after: 150 }
    }).mount()
};

document.addEventListener("DOMContentLoaded", () => {
    slider()
});