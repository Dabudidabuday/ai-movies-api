import fetch from 'node-fetch';

const API_KEY = 'BSAbTMylwSFiLH1kz9JIGaosV7s05Gg';

const getImage = async (image) => {
  const response = await fetch(`https://api.search.brave.com/res/v1/images/search?q=${image}_movie&safesearch=strict&count=1&search_lang=en&country=us&spellcheck=1`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
          'X-Subscription-Token': API_KEY,
      }
    }
  )

  const data = await response.json();

  console.log('data.results[0]', data);

  return data.results[0].thumbnail;
}


export default getImage;

