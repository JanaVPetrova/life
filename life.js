$(document).ready(function() {
  var numLines = 20;
  var numColumns = 20;

  var world = init(numLines, numColumns);
  var newWorld = world;

  $world = makeTableHTML(world);
  $("body").append($world);

  window.setTimeout(function() {
    for (var i = 1; i < numColumns - 1; i++) {
      for (var j = 1; j < numLines - 1; j++) {
        aliveCount = neighborCount(i, j, world);

        if ((aliveCount == 2) || (aliveCount == 3)) {
          newWorld[i][j] = 1;
        }
        if ((world[i][j] == 1) && ((aliveCount <= 1) || (aliveCount > 3))) {
          newWorld[i][j] = 0;
        }
      }
    }
    $newWorld = makeTableHTML(newWorld);
    $("table").remove();
    $("body").append(makeTableHTML(newWorld));
    world = newWorld;
  }, 1000);
});


function makeTableHTML(myArray) {
  var result = "<table border = 1>";
    for(var i = 0; i < myArray.length; i++) {
        result += "<tr>";
        for(var j = 0; j < myArray[i].length; j++) {
            if (myArray[i][j] == 1) {
              result += "<td height=20px width=20px bgcolor='000000'>" + myArray[i][j] + "</td>";
            } else {
              result += "<td height=20px width=20px>" + myArray[i][j] + "</td>";
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

function init(numLines, numColumns) {
  var world = [];

  for (var i = 0; i < numColumns; i++) {
    world[i] = [];
    for (var j = 0; j < numLines; j++) {
      world[i][j] = getRandom(0, 1);
    }
  }
  return world;
}

function neighborCount(i, j, world) {
  var count = 0;

  if (world[i - 1][j - 1] == 1) { count++; }
  if (world[i][j - 1] == 1) { count++; }
  if (world[i + 1][j - 1] == 1) { count++; }

  if (world[i - 1][j] == 1) { count++; }
  if (world[i + 1][j] == 1) { count++; }

  if (world[i - 1][j + 1] == 1) { count++; }
  if (world[i][j + 1] == 1) { count++; }
  if (world[i + 1][j + 1] == 1) { count++; }

  return count;
}
