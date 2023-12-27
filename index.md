<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
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
  <span>
    <a href="/Demo" class="button button-demo">Demo</a>
  </span>

  <span>
    <a href="/Slides" class="button button-slides">Slides</a>
  </span>
</body>
</html>
