field = new Array();
field_next = new Array();
size_x = 11;
size_y = 11;
for(i=0;i < size_x + 1;i++)
{
  field[i] = new Array();
  field_next[i] = new Array();
  for(j=0;j < size_y + 1; j++)
  {
    field[i][j]= 0;
    field_next[i][j]= 0;
  }
}
clear_arr = field;

function life(){

  for(j=1;j < size_x;j++){

    for(i=1;i < size_y;i++){
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
      } else if (current == 1 && (count <= 1 || count > 3)) {
        field_next[i][j] = 0;
      } else {
        field_next[i][j] = 0;
      }
    }
  }
  tmp = field;
  field = field_next;
  field_next = tmp;
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
      x += 10 ;
    }
    y += 10 ;
  }
}

canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", setElement, false);

function setElement(event)
{
  var x = event.x;
  var y = event.y;

  var canvas = document.getElementById("canvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  i = Math.ceil(x / 10);
  j = Math.ceil(y / 10);
  field[i][j] = 1;
  draw();
}


