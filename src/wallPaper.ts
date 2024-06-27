import { createClient, Photo, PhotosWithTotalResults } from 'pexels'

/** Create a pexels Client */
const pexels = createClient(`${import.meta.env.PEXELS_API_KEY}`)

/**Select dom elements */
const body = document.querySelector('body') as HTMLElement
const photoLink = document.getElementById('photoLink') as HTMLElement
const photoBy = document.getElementById('photoBy') as HTMLElement

// This should be dynamic
const query = 'Afternoon'
const photoResults = await pexels.photos.search({ query, per_page: 1 })
const searchedPhoto = photoResults as PhotosWithTotalResults

export function handelWallPaper() {
  return searchedPhoto.photos.map(
    ({ src, photographer, photographer_url, url }: Photo) => {
      // Dynamic background image
      body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src.portrait}) no-repeat center/cover`

      // Dynamic content for the footer
      photoBy.innerText = ` ${photographer}`
      photoBy.setAttribute('href', photographer_url)
      photoLink.setAttribute('href', url)
    }
  )
}
