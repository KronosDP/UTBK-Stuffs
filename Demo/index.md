<style>
  .button {
    padding: 20px 40px; /* Increased padding */
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Added transition for box-shadow */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Added box-shadow for depth */
  }

  .button:hover {
    transform: scale(1.05); /* Reduced scale for a more subtle hover effect */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25); /* Increased box-shadow on hover for a "lifted" effect */
  }

  .button-pk {
    background-color: #3498db;
  }

  .button-pk:hover {
    background-color: #2980b9;
  }

  .button-back {
    background-color: #e74c3c;
  }

  .button-back:hover {
    background-color: #c0392b;
  }

  .button-container {
    display: inline-block;
    margin-right: 20px; /* Increased margin for more space between buttons */
  }
</style>

<span class="button-container">
  <a href="./PK/" class="button button-pk">PK</a>
</span>

<span class="button-container">
  <a href="../" class="button button-back">Back</a>
</span>