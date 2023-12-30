var elt = document.getElementById("calculator");
var calculator = Desmos.GraphingCalculator(elt);

// Define 3 points
calculator.setExpression({ id: "A", latex: "(A_x, A_y)" });
calculator.setExpression({ id: "B", latex: "(B_x, B_y)" });
calculator.setExpression({ id: "C", latex: "(C_x, C_y)" });

// 6 sliders
calculator.setExpression({ id: "A_x", latex: "A_x=0.5" });
calculator.setExpression({ id: "A_y", latex: "A_y=0" });
calculator.setExpression({ id: "B_x", latex: "B_x=1" });
calculator.setExpression({ id: "B_y", latex: "B_y=1" });
calculator.setExpression({ id: "C_x", latex: "C_x=0" });
calculator.setExpression({ id: "C_y", latex: "C_y=1" });

// 3 lines
calculator.setExpression({
  id: "AB",
  latex: "y=\\frac{B_y-A_y}{B_x-A_x}(x-A_x)+A_y",
});
calculator.setExpression({
  id: "BC",
  latex: "y=\\frac{C_y-B_y}{C_x-B_x}(x-B_x)+B_y",
});
calculator.setExpression({
  id: "CA",
  latex: "y=\\frac{A_y-C_y}{A_x-C_x}(x-C_x)+C_y",
});
