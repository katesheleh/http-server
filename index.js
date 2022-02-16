import express from "express";

const port = 8000;
const app = express()

app.get('/hello', (request, response) => {
    response.send(`Hi there!`)
  })

app.listen(port, () => {
    console.log(`Server is running at http//:localhost:${port}`);
  });

