import axios from 'axios'
// baseURL: 'https://api.nasa.gov/planetary/apod?api_key=hmuRUF1ikrZmscAgPknqtsIqb5jlrew6cGGP1ZR8',

export const picApi = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=17&api_key=hmuRUF1ikrZmscAgPknqtsIqb5jlrew6cGGP1ZR8&',
  timeout: 10000
})
