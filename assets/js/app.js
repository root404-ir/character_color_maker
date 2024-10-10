const $ = document

//select element
const face_btn = $.querySelector('#face-btn')
const color_btn = $.querySelector('#color-btn')
const horns_btn = $.querySelector('#horns-btn')
const tail_btn = $.querySelector('#tail-btn')

const cssRoot = $.querySelector(':root')

let bodyColors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711",
];
let colors = [...bodyColors, 'transparent']
console.log(colors);

let [faceCounter, colorCounter, hornsCounter, tailCounter] = Array(4).fill(0)

const setCounter = (counter, length) => {
    return counter < length - 1 ? counter + 1 : 0
}
face_btn.addEventListener('click', () => {
    faceCounter = setCounter(faceCounter, 6)
    $.getElementById('face').setAttribute('src', `./assets/images/face-${faceCounter}.png`)
})
color_btn.addEventListener('click', () => {
    colorCounter = setCounter(colorCounter, bodyColors.length)
    console.log(colorCounter)
    cssRoot.style.setProperty('--color-character', bodyColors[colorCounter])
})
horns_btn.addEventListener('click', () => {
    hornsCounter = setCounter(hornsCounter, bodyColors.length)
    cssRoot.style.setProperty('--color-horns', bodyColors[hornsCounter])
})
tail_btn.addEventListener('click', () => {
    tailCounter = setCounter(tailCounter, bodyColors.length)
    cssRoot.style.setProperty('--color-tail', bodyColors[tailCounter])
})