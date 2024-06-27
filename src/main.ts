import './style.css'

import { breathAnimation } from './breathAnimation'
import { handelWallPaper } from './wallPaper'

/** Note to change the time, it must be changed in the JS and CSS for example 7500 milliseconds in the javascript is 7s in the css file*/
const totalTIme = 8500

/** Call the animation effect based on the time*/
breathAnimation(totalTIme)

/**Set an interval for the animation to repeat every x seconds    */
setInterval(() => breathAnimation(totalTIme), totalTIme)

/** Changes the wall paper of the app dynamically */
handelWallPaper()
