import express from "express";

const port = 8000;
const app = express();

app.all("/hello", (req, res, next) => {
  console.log(`All`);
  next();
});

const callback = (req, res, next) => {
  console.log("callback");
  next();
};

// 'hel?lo' means the route 'hello' or 'helo'
// 'hel+lo' means the route 'hello' or any count of the "l", for example "hellllllllllo"
// 'hel*lo' (* any symbol) means the route 'hello' or any other symbol, for example "helasdfsadflo"
// 'he(la)?lo' means the route 'helo' or 'helalo'
// /.*c$/ any string and with any length which ends on 'c', for example 'ttdtdtsc'
app.get("/hel?lo", callback, (req, res) => {
  res.send(`Hi there!`);
});

app
  .route("/user")
  .get("/test", callback, (req, res) => {
    res.send(`/user/test GET Hi there!`);
  })
  .post("/test", callback, (req, res) => {
    res.send(`/user/test POST Hi there!`);
  });

app.listen(port, () => {
  console.log(`Server is running at http//:localhost:${port}`);
});
