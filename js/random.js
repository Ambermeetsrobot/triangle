var equilateral = function(sides) {
  if (side1 === side2 === side3) {
    return true;
  }
}
else {
    return false;
  }
}

var isosceles = function(sides) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
  }
}

  else {
    return false;
  }
}

var scalene = function(sides) {
  if (side1 != side2 && side1 != side3 && side2 != side3) {
    return true;
  }
}

  else {
    return false;
  }
}

var nottriangle = function(sides) {
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    return true;
  }
}

  else {
    return false;
  }
}
//
//   $(document).ready(function() {
//     $("#triangle form").submit(function() {
//       var sides = ["side1", "side2", "side3"];
//
//       sides.forEach(function(side) {
//         var userInput = $("input#" + side).val();
//         $("." + side).text(userInput).val();
//
//       });
//     });
//
// // $(document).ready(function(){
// //  $("#triangle form").submit(function(event) {
// //  var side = parseInt($si)
// //  var side1 = parseInt($("input#side1").val());
// //  var side2 = parseInt($("input#side2").val());
// //  var side3 = parseInt($("input#side3").val());
//
//
//     // $("#equilateral").show();
// //
