function $id(id) {return document.getElementById(id);}
function $class(classname) {return document.getElementsByClassName(classname);}

function toggleSlider(){
    const slider = $id("slider");
    slider.classList.toggle("-translate-x-[250px]");
}

const imgDrinks = [...$class("coffee"), [
    "./assets/latte_caramel.JPG",
    "./assets/latte_coffee.JPG",
    "./assets/matcha_latte.JPG",
]];

const imgCookies = [...$class("cookies"), [
    "./assets/cookie_biscof.JPG",
    "./assets/cookie_biscof.JPG",
    "./assets/cookie_redvelvet.JPG",
    "./assets/cookie_strawberry_cheese.JPG",
    "./assets/cookie_matcha_cheese.JPG",
]];
const imgCake = [...$class("cake"), [
    "./assets/cromboloni.JPG",
    "./assets/cinnamon_roll.JPG",
    "./assets/cream_puff.JPG",
]];

const imgPasta = [...$class("pasta"), [
    "./assets/spageti_aglio_olio.JPG",
    "./assets/spageti_bolognese.JPG",
    "./assets/mac_and_cheese.JPG",
    "./assets/creamy_garlic_penne.JPG",
    "./assets/mac_and_cheese.JPG",
]];

let imgIndex = [0, 0];
let switcher = 1;
setInterval(() => {
    switcher = +!switcher;
    imgDrinks[1].classList.toggle("opacity-0");
    imgCookies[1].classList.toggle("opacity-0");
    imgCake[1].classList.toggle("opacity-0");
    imgPasta[1].classList.toggle("opacity-0");
    setTimeout(() => {
        imgIndex[0] = imgIndex[0] == imgDrinks[2].length-1 ? 0 : imgIndex[0]+1;
        imgIndex[1] = imgIndex[1] == imgPasta[2].length-1 ? 0 : imgIndex[1]+1;

        imgDrinks[switcher].src = imgDrinks[2][imgIndex[0]];
        imgCookies[switcher].src = imgCookies[2][imgIndex[1]];
        imgCake[switcher].src = imgCake[2][imgIndex[0]];
        imgPasta[switcher].src = imgPasta[2][imgIndex[1]];
    }, 2000);
}, 4000);