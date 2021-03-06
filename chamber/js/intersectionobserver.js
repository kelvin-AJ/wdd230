const allimages = document.querySelectorAll("source[srcset]");
const numberselement = document.querySelectorAll(".numbers span");

const loadImage = image => {
    image.parentNode.classList.add("view");
    image.onload = () => {
        image.parentNode.classList.remove("noview");
    }
};
prefernces = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
}

const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
        if(item.isIntersecting) {
            loadImage(item.target);
            observer.unobserve(item.target);
        }
    })
}, prefernces);

if("IntersectionObserver" in window) {
    allimages.forEach(img => {
        observer.observe(img);
        });
}else {
    allimages.forEach(img => {loadImage(img)});
}

// NUMBERS OBSERVATION
const countUp = node => {
    const value = Number(node.textContent);
    let num = 0;
    setInterval(() => {
        if(num < value)
        num = num + 5;
        node.textContent = num;
    }, 0.5);
};
textprefernces = {
    threshold: 1,
    rootMargin: "0px 0px 20px 0px"
}

const textObserver = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
        if(item.isIntersecting) {
            countUp(item.target);
            observer.unobserve(item.target);
        }
    })
}, textprefernces);

if("IntersectionObserver" in window) {
    numberselement.forEach(element => {
        textObserver.observe(element);
        });
}