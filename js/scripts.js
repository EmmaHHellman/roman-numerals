// UI Logic
$(document).ready(function() {
  $("#roman-num").submit(function(event) {
    const number = parseInt($("input#number").val());
    const result = romanNumerals(number);
    $("#result").text(result);
event.preventDefault();
  });
});

// Business Logic

function romanNumerals(number) {
  const romanList = ["I", "V", "X", "L", "C", "D", "M"];
  const numbers = [1, 5, 10, 50, 100, 500, 1000]
  for (var i = 0; i<numbers.length; i++) {
    
  }
  if (number === 1) {
    return romanList[0];
  }
  else if (number === 5) {
    return romanList[1];
  }
  else if (number === 10) {
    return romanList[2];
  }
  else if (number === 50) {
    return romanList[3];
  } 
  else if (number === 100) {
    return romanList[4];
  }
  else if (number === 500) {
    return romanList[5];
  }
  else if (number === 1000)
    return romanList[6];
}