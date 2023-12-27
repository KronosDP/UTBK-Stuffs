<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #1a1a1a;
      color: #fff;
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    p {
      font-size: 24px;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }

    .button {
      margin-top: 10px;
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
      background-color: #2ecc71;
    }

    .button-demo:hover {
      background-color: #27ae60;
    }

    .button-slides {
      background-color: #2980b9;
    }

    .button-slides:hover {
      background-color: #2575a9;
    }

    .logo-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    .logo {
      width: 50px;
      height: auto;
      cursor: pointer;
      transition: transform 0.3s ease;
      margin: 10px;
    }

    .logo:hover {
      transform: scale(1.2);
    }

    @media (max-width: 600px) {
      body {
        padding: 20px;
      }

      .button-container {
        flex-direction: column;
      }

      .logo {
        width: 30px;
      }
    }

  </style>
</head>

<body>
  <p>Pilihlah Demo atau Slide</p>

  <div class="button-container">
    <a href="./Demo" class="button button-demo">Demo</a>
    <a href="./Slides" class="button button-slides">Slide</a>
    <a href="https://kronosdp.github.io/" target="_blank" class="button">Personal Blog</a>
  </div>

  <div class="logo-container">
    <a href="https://github.com/KronosDP" target="_blank">
      <img src="https://github.com/favicon.ico" alt="GitHub" class="logo">
    </a>

    <a href="https://www.instagram.com/kronos_darrel/" target="_blank">
      <img src="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico" alt="Instagram" class="logo">
    </a>

    <a href="https://www.linkedin.com/in/darrel-danadyaksa-poli/" target="_blank">
      <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" class="logo">
    </a>

  </div>
</body>

</html>
