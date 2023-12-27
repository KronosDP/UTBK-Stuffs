<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #333; /* Dark background color */
      color: #fff; /* Light text color */
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
      margin-bottom: 20px;
    }

    .button-container {
      margin-bottom: 10px; /* Adjust as needed */
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

    .button-pk {
      background-color: #4CAF50;
    }

    .button-pk:hover {
      background-color: #2ecc71;
    }

    .button-back {
      background-color: #3498db;
    }

    .button-back:hover {
      background-color: #2980b9;
    }
  </style>
</head>

<body>
  <p>Pelajaran apa nich?</p>

  <span class="button-container">
    <a href="./PK/" class="button button-pk">Penalaran Kuantitatif</a>
  </span>

  <span class="button-container">
    <a href="../" class="button button-back">Kembali</a>
  </span>
</body>

</html>
