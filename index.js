import express from "express";

const port = 8000;
const app = express();

// 'hel?lo' means the route 'hello' or 'helo'
// 'hel+lo' means the route 'hello' or any count of the "l", for example "hellllllllllo"
// 'hel*lo' (* any symbol) means the route 'hello' or any other symbol, for example "helasdfsadflo"
// 'he(la)?lo' means the route 'helo' or 'helalo'
// /.*c$/ any string and with any length which ends on 'c', for example 'ttdtdtsc'
app.get("/hello", (req, res) => {
  // set Header
  res.set("Content-Type", "text/plain");
  // add Header
  res.append("Warning", "code");
  // set page type
  res.type("application/json");
  res.send("Hi There!");
  // header locstion
  res.location("http://example.com");
  // include links to header
  res.links({
    next: "http://api.example.com/users?page=2",
    last: "http://api.example.com/users?page=5",
  });
  // set cookie
  res.cookie("cookieName", "mySecretValue", {
    domain: "",
    path: "/hello",
    secure: true,
    expires: 50000000,
  });
  // clear cookie
  res.clearCookie("cookieName");
  //res.json({ success: true });
  //res.download("/test.pdf", "custom file name");
  //res.redirect(301, "https://redirect.com");

  // finish response
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running at http//:localhost:${port}`);
});
