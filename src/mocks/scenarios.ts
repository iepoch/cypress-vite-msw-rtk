import {HttpResponse, http } from 'msw'
const CAT_API_KEY = ''

const data = fetch('https://api.thecatapi.com/v1/breeds?limit=90',{headers:{
    'x-api-key': CAT_API_KEY,
}}).then(resp => resp.json()).then( (cats) => {
   return cats
})

export const scenarios = {
    success: [
      http.all('https://api.thedogapi.com/v1/breeds?limit=90', async () => {
        return HttpResponse.json( await data);
      })
    ]
  }
  