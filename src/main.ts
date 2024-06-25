/**imports  */
import './style.css' // ! The imported styles.css  required for css to work

/** DOM elements */
const container = document.getElementById('container') as HTMLDivElement
const text = document.getElementById('text') as HTMLParagraphElement

/** Timer variables: to change the time, it must be changed in the JS and CSS for example 7500 milliseconds in the javascript is 7s in the css file*/
const totalTIme = 8500
const holdTime = totalTIme / 5
const breatheTime = holdTime * 2

/** Animate the breath animation  */
function breathAnimation() {
  text.innerText = 'Breath In!'
  container.className = 'container grow' // ! change the class name to grow

  setTimeout(() => {
    text.innerText = 'Hold'
    setTimeout(() => {
      text.innerText = 'Breath Out'
      container.className = 'container shrink' // ! change the class name to shrink
    }, holdTime)
  }, breatheTime)
}
breathAnimation()

/**Set an interval for the animation to repeat every 7.5 seconds    */
setInterval(breathAnimation, totalTIme)
