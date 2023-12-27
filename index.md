<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #1a1a1a; /* Dark background color */
      color: #fff; /* Text color */
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    p {
      font-size: 24px;
    }

    .button {
      display: inline-block;
      margin-right: 10px;
      padding: 10px 20px;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .button:hover {
      transform: scale(1.1);
    }

    .button-demo {
      background-color: #4CAF50;
    }

    .button-demo:hover {
      background-color: #2ecc71;
    }

    .button-slides {
      background-color: #3498db;
    }

    .button-slides:hover {
      background-color: #2980b9;
    }

  </style>
</head>

<body>
  <p>Pilihlah Demo atau Slide</p>

  <span>
    <a href="./Demo" class="button button-demo">Demo</a>
  </span>

  <span>
    <a href="./Slides" class="button button-slides">Slide</a>
  </span>
</body>

</html>
