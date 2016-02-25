function triangletype(a,b,c) {
  if ((a === b) &&  (b === c) && (a === c)) {
    return "an equilateral";
  } else if ((a === b) && (b!=c)) {
    return "an isosceles";
  } else if ((b === c) && (c!=a)) {
    return "an isosceles";
  } else if ((a === c) && (b!=a)) {
    return "an isosceles";
  } else if (((a + b) <= c) || ((b + c) <= a) || ((a + c) <= b)) {
    return "not a triangle";
  } else {
    return "a scalene";
  }
};

$(document).ready(function(){
 $("#triangle form").submit(function(event) {
 var a = parseInt($("input#a").val());
 var b = parseInt($("input#b").val());
 var c = parseInt($("input#c").val());
 var answer = triangletype(a,b,c);

 $("#result").show();
 $(".answer").append(answer);


 event.preventDefault();

  });
});
