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
  if (number === 1) {
    return romanList[0];
  }
  else if (number === 5) {
    return romanList[1];
  }
  else if (number === 10) {
    return romanLitst[2];
  }
  else if (number === 50) {
    
  }
}