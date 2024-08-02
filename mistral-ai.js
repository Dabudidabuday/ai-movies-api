import MistralClient from "@mistralai/mistralai";

const apiKey = 'cMhcfrEGXzGOTuChCX3MuOuj3FZMm0vF';

const client = new MistralClient(apiKey);

const chatResponse = async (requestedFilms) => {
  const response = await client.chat({
    model: 'mistral-tiny',
    messages: [
      { role: 'system', content: 'You are the best movie specialist. When asked about films, suggest 3 movies with specific details in film plot. Reply with JSON, which contains fields: title, director, year, plot, genre .'},
      { role: 'user', content: requestedFilms},
    ],
    responseFormat: {
      type: 'json_object'
    },
    temperature: 0.5,
  })

  return response.choices[0].message.content;
}



// for await ( const chunk of chatResponse) {
//   console.log(chunk.choices?.[0]?.delta.content)
// }

// console.log('Chat: ', chatResponse.choices[0].message.content);


export default chatResponse;
