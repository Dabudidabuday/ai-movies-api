import express from 'express';
import cors from 'cors';
import chatResponse from './mistral-ai.js';
import getImage from './google-images.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/message', async (req, res) => {
  const message = await chatResponse(req.body.message);

  const response = await JSON.parse(message);

  const movieTitles = await response.movies.map(({ title }) => title)

  const requestedImages = movieTitles.map((title) => getImage(title))

  const responses = await Promise.all(requestedImages);

  const images = await Promise.all(responses.map(response => response.json()))

  const mappedImages = images.map((data) => data.items[0].link);

  const moviesWithPosters = await response.movies.map((movie, index) => ({ poster: mappedImages[index], ...movie}))

  return res.send(moviesWithPosters)
})

app.get('/', (req, res) => {
  res.send('hello movies api')
})


app.listen(PORT, () => {
  console.log(`we are on ${PORT}`)
})
