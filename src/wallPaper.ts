import { createClient, Photo, PhotosWithTotalResults } from 'pexels'

/** Create a pexels Client */
const pexels = createClient(`${import.meta.env.VITE_PEXELS_API_KEY}`)

export async function getSearchedWallpaper(query = 'Morning') {
  const photoResults = await pexels.photos.search({ query, per_page: 1 })
  const searchedPhoto = photoResults as PhotosWithTotalResults

  searchedPhoto.photos.map(
    ({ src, photographer, photographer_url, url }: Photo) => {
      displayWallPaper(src, photographer, photographer_url, url)
    }
  )
}

export async function getRandomWallpaper() {
  const { src, photographer, photographer_url, url } =
    (await pexels.photos.random()) as Photo
  displayWallPaper(src, photographer, photographer_url, url)
}

function displayWallPaper(
  src: { portrait: string },
  photographer: string,
  photographer_url: string,
  url: string
): void {
  /**Select dom elements */
  const body = document.querySelector('body') as HTMLElement
  const photoLink = document.getElementById('photoLink') as HTMLElement
  const photoBy = document.getElementById('photoBy') as HTMLElement

  // Dynamic background image
  body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src.portrait}) no-repeat center/cover`
  // Dynamic content for the footer
  photoBy.innerText = ` ${photographer}`
  photoBy.setAttribute('href', photographer_url)
  photoLink.setAttribute('href', url)
}
