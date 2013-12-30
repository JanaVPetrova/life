$(document).ready(function() {

  var row = [];
  var world = [];

  var numLines = 10;
  var numColumns = 10;

  for (var i = 0; i < numColumns; i++) {
    world[i] = [];
    for (var j = 0; j < numLines; j++) {
      world[i][j] = getRandom(0, 1);
    }

  }

  $world = makeTableHTML(world);
  console.log($("body").append($world));

});


function makeTableHTML(myArray) {
  var result = "<table border = 1>";
    for(var i = 0; i < myArray.length; i++) {
        result += "<tr>";
        for(var j = 0; j < myArray[i].length; j++) {
            if (myArray[i][j] == 1) {
              result += "<td height=20px width=20px bgcolor='000000' id='"+ i + "_" + j + "''>" + myArray[i][j] + "</td>";
            } else {
              result += "<td height=20px width=20px id='"+ i + "_" + j + "''>" + myArray[i][j] + "</td>";
            }
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

