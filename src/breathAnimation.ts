const text = document.getElementById('text') as HTMLParagraphElement
const container = document.getElementById('container') as HTMLDivElement

/** Animate the breath animation
 * @param {number} totalTIme - The total time for the animation to run
 * @returns {void}
 */
export function breathAnimation(totalTIme: number): void {
  const holdTime = totalTIme / 5
  const breatheTime = holdTime * 2

  text.innerText = 'Breath In!'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold It In'
    setTimeout(() => {
      text.innerText = 'Breath Out'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}
