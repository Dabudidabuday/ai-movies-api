import fetch from 'node-fetch';


const API_KEY = 'AIzaSyAksBNyqCtkZaSefp2pZ10jhDQw6chPMKU';
const CX_ID = '83884d2e3726649dd'

const getImage = async (title) => {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAksBNyqCtkZaSefp2pZ10jhDQw6chPMKU&cx=83884d2e3726649dd&count=1&searchType=image&q=${title} movie poster`, {
    method: 'GET',
  });

  return response;
}

export default getImage;
