function updatePoint(pointIndex) {
  const circle = document.getElementById("circle");
  const slider = document.getElementById(`slider${pointIndex}`);
  const point = document.getElementById(`point${pointIndex}`);

  const angle = parseFloat(slider.value) % 360;
  const offset = (pointIndex - 1) * 120; // Adjusted offset

  const x = Math.cos(((angle + offset) * Math.PI) / 180) * 90 + 100;
  const y = Math.sin(((angle + offset) * Math.PI) / 180) * 90 + 100;

  point.style.left = `${x}px`;
  point.style.top = `${y}px`;

  // Update line for point 1
  if (pointIndex === 1 || pointIndex === 2) {
    const line = document.getElementById(`line${pointIndex}`);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
  }

  if (pointIndex === 1) {
    const line = document.getElementById("line3");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
  }

  if (pointIndex === 2) {
    const line = document.getElementById("line4");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
  }

  if (pointIndex === 3) {
    const line3 = document.getElementById("line3");
    line3.setAttribute("x2", x);
    line3.setAttribute("y2", y);

    const line4 = document.getElementById("line4");
    line4.setAttribute("x2", x);
    line4.setAttribute("y2", y);
  }

  // Calculate the angle between line1 and line2
  if (pointIndex === 1 || pointIndex === 2) {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    calculateAngle(line1, line2, "result1");
  }

  // Calculate the angle between line3 and line4
  if (pointIndex === 3) {
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("line4");
    calculateAngle(line3, line4, "result2");
  }
}

// Initial update for all points
for (let i = 1; i <= 3; i++) {
  updatePoint(i);
}

function calculateAngle(line1, line2, resultId) {
  // Get the coordinates of the lines
  const x1 =
    parseFloat(line1.getAttribute("x2")) - parseFloat(line1.getAttribute("x1"));
  const y1 =
    parseFloat(line1.getAttribute("y2")) - parseFloat(line1.getAttribute("y1"));
  const x2 =
    parseFloat(line2.getAttribute("x2")) - parseFloat(line2.getAttribute("x1"));
  const y2 =
    parseFloat(line2.getAttribute("y2")) - parseFloat(line2.getAttribute("y1"));

  // Calculate the dot product
  const dotProduct = x1 * x2 + y1 * y2;

  // Calculate the magnitudes of the lines
  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);

  // Calculate the angle in radians
  const angleInRadians = Math.acos(dotProduct / (magnitude1 * magnitude2));

  // Convert the angle to degrees
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  // Get the result element
  const resultElement = document.getElementById(resultId);

  // Update the result element with the calculated angle
  resultElement.textContent = `Sudut garis terang: ${Math.round(
    angleInDegrees
  )} derajat.`;
}
