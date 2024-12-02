import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js";


class ImageServices {
  constructor() {

  }

  async fetchImage() {
    const response = await api.get('api/images')
    const activeImage = new Image(response.data)
    AppState.images = activeImage
  }












}










export const imageServices = new ImageServices()