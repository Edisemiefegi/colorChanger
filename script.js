const box = document.getElementById('box')
const red = document.getElementById('red')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const violet = document.getElementById('violet')
const color = document.getElementById('.color')

const getBGColor = (selectedElement) => {
    return  window.getComputedStyle(selectedElement).backgroundColor;
} 

// console.log(colorchanger(yellow));
// red.addEventListener('click', () => {
//     box.style.backgroundColor = colorchanger(red)
// })

const colorChanger = (element, color) => {
    return element.addEventListener('click', ()=> {
        box.style.background = color;
    });
};
// console.log(red, getBGColor(red));

colorChanger(red, getBGColor(red));
colorChanger(blue, getBGColor(blue));
colorChanger(yellow, getBGColor(yellow));
colorChanger(orange, getBGColor(orange));
colorChanger(green, getBGColor(green));
colorChanger(violet, getBGColor(violet));
