<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
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
      justify-content: space-between;
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

    .button-personal-blog{
      background-color: #89CFF0
    }

    .button-personal-blog:hover {
      background-color: #77C3EC;
    }

    .logo-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    .icon {
      width: 50px;
      height: auto;
      cursor: pointer;
      transition: transform 0.3s ease;
      margin: 10px;
    }

    .icon:hover {
      transform: scale(1.2);
    }

    .icon-fill {
      fill: #0F0F0F; /* Default fill color */
    }

    @media (max-width: 600px) {
      body {
        padding: 20px;
      }

      .button-container {
        flex-direction: column;
      }

      .icon {
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
    <a href="https://kronosdp.github.io/" target="_blank" class="button button-personal-blog">Personal Blog</a>
  </div>

  <div class="logo-container">
    <a href="https://github.com/KronosDP" target="_blank">
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#github-icon"/>
      </svg>
    </a>

    <a href="https://www.instagram.com/kronos_darrel/" target="_blank">
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#instagram-icon"/>
      </svg>
    </a>

    <a href="https://www.linkedin.com/in/darrel-danadyaksa-poli/" target="_blank">
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#linkedin-icon"/>
      </svg>
    </a>

  </div>
</body>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="github-icon" viewBox="0 0 24 24" fill="#CCCCCC">
      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
      <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"></path>
      <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"></path>
    </symbol>
 <symbol id="instagram-icon" viewBox="0 0 24 24" fill="#CCCCCC">
      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM19 19H5V7H19V19Z"></path>
      <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"></path>
    </symbol>
  <symbol id="linkedin-icon" viewBox="0 0 24 24" fill="#CCCCCC">
      <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"></path>
      <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"></path>
      <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"></path>
    </symbol>
  </svg>

</html>
