//Hecho Por Kerem Jimenez Carmona

//Variables Auxiliares
let arregloPelotas=new Array()
let pelota

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	
}

function draw() {
	background("white")
	if(arregloPelotas!=null)
	{
		for(let i=0;i<arregloPelotas.length;i++)
		{
			//Pintar y Comprobar Pelotas
			arregloPelotas[i].draw();
			arregloPelotas[i].comprobarColision()

		
		}
	}

}


function mouseClicked()
{
	//Crea Color y Pelota
	let colores =color(random(0, 255),random(0, 255),random(0, 255))
	pelota=new Pelota(mouseX,mouseY,50,colores);
	arregloPelotas.push(pelota);

	//Actualiza la variables del arreglo e indice de la pelota para la colision
	for(let i=0;i<arregloPelotas.length;i++)
	{
		arregloPelotas[i].indice=i;
		arregloPelotas[i].arreglo=arregloPelotas;
		
	}
}



