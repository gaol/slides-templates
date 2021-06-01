vertx.createHttpServer()
  .requestHandler(function (req) {
    req.response()
      .putHeader("content-type", "text/plain")
      .end("Hello from Vert.x JS!");
  }).listen(8080);
  
