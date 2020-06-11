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
  const romanList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    LC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX:9,
    V: 5,
    IV: 4,
    I: 1,
  };
  
  let roman = "";
  for (var key in romanList) {
    while (number >= romanList[key]) {
      roman += key;
      number -= romanList[key];
    }
  }
  return result = roman
}

  //   if (number === 1) {
//     return romanList[0];
//   }
//   else if (number === 5) {
//     return romanList[1];
//   }
//   else if (number === 10) {
//     return romanList[2];
//   }
//   else if (number === 50) {
//     return romanList[3];
//   } 
//   else if (number === 100) {
//     return romanList[4];
//   }
//   else if (number === 500) {
//     return romanList[5];
//   }
//   else if (number === 1000)
//     return romanList[6]; 
