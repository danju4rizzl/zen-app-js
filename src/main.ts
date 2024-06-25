/**imports  */
import './style.css' // ! this import is required for css file to work

/** DOM elements */
const container = document.getElementById('container') as HTMLDivElement
const text = document.getElementById('text') as HTMLParagraphElement

/** Timer variables: to chenage the time, it must be changed in the JS and CSS for example 7500 milliseconds in the javascript is 7s in the css file*/
const totalTIme = 7500
const breatheTime = (totalTIme / 5) * 2
const holdTime = totalTIme / 5

/** Animate the breath animation  */
function breathAnimation() {
  text.innerText = 'Breathe In!'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold'

    setTimeout(() => {
      text.innerText = 'Breathe Out!'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

/** Call the breath animation function every 7.5 seconds */
setInterval(breathAnimation, totalTIme)
