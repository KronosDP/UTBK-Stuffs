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
      padding: 20px; /* Added padding for better spacing */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    p {
      font-size: 24px;
      margin-bottom: 20px; /* Added margin for better spacing */
    }

    .button-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around; /* Adjusted to space-around for closer horizontal spacing */
      margin-top: 20px;
    }


    .button-center {
      margin-top: 20px; /* Adjusted margin for better spacing */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button {
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

    .button-personal-blog {
      background-color: #89CFF0;
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
        padding: 10px; /* Adjusted padding for better spacing on small screens */
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
  </div>

  <div class="button-center">
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
  <symbol id="github-icon" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </symbol>

  <symbol id="instagram-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#CCCCCC"></path>
  </symbol>

  <symbol id="linkedin-icon" viewBox="0 0 24 24">
    <path fill="#CCCCCC" d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"></path>
    <path fill="#CCCCCC" d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"></path>
    <path fill="#CCCCCC" d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"></path>
    <path fill="#CCCCCC" fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"></path>
  </symbol>
</svg>

</html>
