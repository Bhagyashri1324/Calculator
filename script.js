function calculateAddition() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const output = document.getElementById("output");
  
    if (num1 === "" || num2 === "") {
      output.innerHTML = "<span class='error'>Please enter both numbers!</span>";
      return;
    }
  
    const sum = parseFloat(num1) + parseFloat(num2);
    output.innerHTML = `Result: <strong>${sum}</strong>`;
  }
  