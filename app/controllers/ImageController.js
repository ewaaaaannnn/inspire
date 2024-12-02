import { AppState } from "../AppState.js";
import { imageServices } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ImageController {
  constructor() {
    this.fetchImage()
    AppState.on('images', this.drawActiveImage)
    AppState.on('account', this.drawActiveImage)

  }



  async fetchImage() {
    try {
      await imageServices.fetchImage();
      console.log('Fetched images:', AppState.images);
      /* this.getRandomImage();
      this.drawActiveImage(); */
    } catch (error) {
      console.error(error);
      Pop.toast("Could not retrieve Picture of the Day", 'error');
    }
  }




  drawActiveImage() {
    console.log('✏️🌌');
    document.body.style.backgroundImage = `url(${AppState.images.imgUrl})`;
  }



}