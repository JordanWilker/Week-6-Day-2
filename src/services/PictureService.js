import { AppState } from '../AppState'
import { picApi } from './AxiosService'

class PictureService {
  async searchPics (query) {
    const solNumber = Math.ceil(Math.random() * 1000)
    // console.log(solNumber)
    const pageNumber = Math.ceil(Math.random() * 2)
    const res = await picApi.get(query + '&page=' + pageNumber + '&sol=' + solNumber)
    const pic = Math.floor(Math.random() * res.data.photos.length)
    // console.log(pic)
    AppState.pictures = res.data.photos[pic]
    console.log(res.data.photos)
  }

  setActive (picture) {
    AppState.activePicture = picture
  }
}

export const pictureService = new PictureService()
