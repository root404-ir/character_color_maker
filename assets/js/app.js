const $ = document

//select element
const face_btn = $.querySelector('#face-btn')
const color_btn = $.querySelector('#color-btn')
const horns_btn = $.querySelector('#horns-btn')
const tail_btn = $.querySelector('#tail-btn')
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

let [faceCounter, colorCounter, hotnsCounter, tailCounter] = Array(4).fill(0)

const setCounter = (counter, length) => {
    return counter < length - 1 ? counter + 1 : 0
}
face_btn.addEventListener('click', () => {
    faceCounter = setCounter(faceCounter, 6)
    console.log(faceCounter);

    $.getElementById('face').setAttribute('src', `./assets/images/face-${faceCounter}.png`)
})
color_btn.addEventListener('click', () => {
    console.log('color')

})
horns_btn.addEventListener('click', () => {
    console.log('horns')

})
tail_btn.addEventListener('click', () => {
    console.log('tail')
})