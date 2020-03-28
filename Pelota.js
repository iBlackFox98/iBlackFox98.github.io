class Pelota{
    
    constructor(x,y,d,c){
        this.x=x
        this.y=y
        this.d=d
        this.c=c
        this.speed=5
        this.dirX=this.direccion();
        this.dirY=this.direccion();
        this.arreglo;
        this.indice;
        
    }

    draw(){
        //Pintar Pelota
        push()
        strokeWeight(3)
        fill(this.c)
        ellipseMode(CENTER)
        ellipse(this.x, this.y, this.d, this.d)
        pop()
        this.mover()
      
    }



    mover(){

        //Se sale del ancho ya sea izquierdo o derecho?
        
        if(this.x+floor(this.d/2)+this.dirX+this.speed>=width || 
            this.x-floor(this.d/2)+this.dirX-this.speed<=0)
        
            this.dirX=-this.dirX;


    
        //Se sale del alto ya sea arriba o abajo?  

        if(this.y+floor(this.d/2)+this.dirY+this.speed>=height ||
            this.y-floor(this.d/2)+this.dirY-this.speed<=0)

            this.dirY=-this.dirY



        
        // La en direccionX es Negativa?
        
        if(this.dirX===-1 )
        {
            //Mover Izquierda
            this.x+=this.dirX-this.speed
        }
        else{
            //Mover Derecha
            this.x+= this.speed +this.dirX
        }

        
        // La en direccionY es negativa
        if(this.dirY===-1)
        {
            //Mover Arriba
            this.y+=this.dirY-this.speed
        }
        else       
            //Mover Abajo
            this.y+=this.speed+this.dirY

            
    
    }

    direccion(){
        //Genera un -1 o 1 para la direccion en X y Y
        return floor(random(2)) * 2 - 1
    }


    comprobarColision(){

        for(let i=0;i<this.arreglo.length;i++)
        {
            //No es la misma pelota que la seleccionada?
            if(i!=this.indice)
            {

                /*Metodo de la pagina de Mozzilla para comprobar la colision 
                    cambiando circle1 por este objeto
                    y circle 2 por la pelota del arreglo
                */

                var dx = this.x - this.arreglo[i].x;
                var dy = this.y - this.arreglo[i].y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < floor(this.d/2) + floor(this.d/2)) {
                    
                    this.arreglo[i].dirX=-this.arreglo[i].dirX
                    this.arreglo[i].dirY=-this.arreglo[i].dirY

                    this.dirX=-this.dirX
                    this.dirY=-this.dirY

                }


            }
        }

    }

}