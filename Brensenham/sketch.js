var resultado;
var ax,ay;
var x,y;
var mitadW,mitadH
function setup() {
  createCanvas(windowWidth, windowHeight);
  mitadW=windowWidth/2
  mitadH=windowHeight/2
}

function draw() {
  algoritmoDDA(0,0,windowWidth,windowHeight)
  algoritmoDDA(mitadW,0,mitadW,windowHeight)
  algoritmoDDA(windowWidth,0,0,windowHeight)
  algoritmoDDA(0,mitadH,windowWidth,mitadH)
  noLoop()
  

  
}

function algoritmoDDA(x1, y1, x2, y2) {

  let dx=x2-x1
  let dy=y2-y1

  let limite
  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

  let xi=dx/limite
  let yi=dy/limite

  let x=x1
  let y= y1
  
  for(let i=0;i<limite;i++)
  {
    point(x, y)
    x+=xi
    y+=yi
  }




  


}

