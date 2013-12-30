field = new Array();
field_next = new Array();
size_x = 102;
size_y = 102;
for(i=1;i < size_x;i++)
{
  field[i] = new Array();
  for(j=1;j < size_y; j++)
  {
    field[i][j]= 0;
  }
}
field_next = field;
clear_arr = field;

function life(){

  for(i=1;i < size_x;i++){

    for(j=1;j < size_y;j++){
      count = 0;
      if (field[i - 1][j - 1] == 1) count++;
      if (field[i - 1][j + 1] == 1) count++;
      if (field[i + 1][j - 1] == 1) count++;
      if (field[i + 1][j + 1] == 1) count++;
      if (field[i][j - 1] == 1) count++;
      if (field[i][j + 1] == 1) count++;
      if (field[i - 1][j] == 1) count++;
      if (field[i + 1][j] == 1) count++;

      current = field[i][j];
      if (current == 0 && count == 3 ) {
        field_next[i][j] = 1;
      } else if (current == 1 && (count == 2 || count == 3)){
        field_next[i][j] = 1;
      } else field_next[i][j] = 0;
    }
  }
  field = field_next;
  field_next = clear_arr;
}

function draw(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext('2d');
  x = 0;
  y = 0;
  for (var i = 1; i < size_x; i++) {
    x = 0;
    for (var j = 1; j < size_y; j++) {
      if (field[j][i] == 1) {
        ctx.fillStyle = "green"
      } else {
        ctx.fillStyle = "gray"
      }
      ctx.fillRect(x, y, 10, 10);
      x += 10 + 1;
    }
    y += 10 + 1;
  }
}

canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  var canvas = document.getElementById("canvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  alert("x:" + x + " y:" + y);
}
