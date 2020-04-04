var p1A,p2A,p1B,p2B,p3A,p3B,p4A,p4B

function setup() {
	createCanvas(windowWidth, windowHeight);
	p1A= {x: 0, y : 0}
	p1B = {x: windowWidth, y : windowHeight}

	p2A={x: floor(windowWidth/2), y: 0}
	p2B={x:floor(windowWidth/2), y : windowHeight}

	p3A = { x:0,y:windowHeight }
	p3B = { x:windowWidth , y:0 }

	p4A = {x:0, y: floor(windowHeight/2)}
	p4B = {x:windowWidth, y: floor(windowHeight/2)}



	
}

function draw() {
	ecuacionPuntoPendiente(p1A,p1B)
	ecuacionPuntoPendiente(p2A,p2B)

	ecuacionPuntoPendiente(p3A,p3B)

	ecuacionPuntoPendiente(p4A,p4B)

}

function ecuacionPuntoPendiente(p1,p2){

	const dx = p2.x - p1.x
	const dy = p2.y - p1.y

	const m = dy / dx
	const b = p1.y - m * p1.x

	point( p1.x , p1.y )

	if(p1.x===p2.x){
		let y = p1.y + 1
		while(y!=p2.y)
		{
			point(p1.x,y)
			y++
		}

	}
	else{
		let x = p1.x + 1
		let y
		while(x != p2.x){
			y = m * x + b
			point(x, y)
			x++
		}
	}

	
	

}


