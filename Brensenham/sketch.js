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
 
  AlgoritmoBresenham(0,0,windowWidth,windowHeight)
 AlgoritmoBresenham(mitadW,0,mitadW,windowHeight)
 AlgoritmoBresenham(0,mitadH,windowWidth,mitadH)


  AlgoritmoBresenham(windowWidth,0,0,windowHeight)








  

  




  noLoop()
  

  
}

function AlgoritmoBresenham(x1, y1, x2, y2) {

  //Variables para guardar los pasos en x/y
  let pY
  let pX
  

  // Variables para el Algoritmo Bresenham
	let x
	let y
	let p
	let incE
	let incNE

	let dx = x2- x1
	let dy = y2 - y1


  /* determinar que punto usar para empezar*/
	if(dy < 0) {
		dy = -dy
		pY = -1
	}else{
		pY = 1
	}

	if(dx < 0) {
		dx = -dx
		pX = -1
	}else{
		pX = 1
	}

	x = x1
	y = y1
	
	point(x,y)


	//Se dibujan los puntos de la linea
	if(dx > dy) {

		p = 2 * dy - dx
		incE = 2 * dy
		incNE = 2 * (dy - dx)

		while(x != x2) {
			x += pX

			if(p < 0) {
				p += incE
			}else {
				y += pY
				p += incNE
			}

			point(x,y)
		}
	
	}else{

		p = 2 * dx - dy
		incE = 2 * dx
		incNE = 2 * (dx - dy)

		while(y != y2) {
			y += pY

			if(p < 0) {
				p += incE
			}else {
				x += pX
				p += incNE
			}

			point(x,y)


    }
  }
}
