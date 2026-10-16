module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  if (req.url === "/api/health") {
    return res.status(200).json({
      status: "online",
      message: "Thund3r Test is running"
    });
  }

  res.status(200).send(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Thund3r Test</title>
        <style>
          body {
            background: #101010;
            color: #ff4545;
            font: 20px Arial;
            text-align: center;
            padding: 80px 15px;
          }
          p { color: white; }
        </style>
      </head>
      <body>
        <h1>Thund3r Test</h1>
        <p>Website is online.</p>
        <p><a href="/api/health">Check server status</a></p>
      </body>
    </html>
  `);
};
