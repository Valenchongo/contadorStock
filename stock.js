contenedor = document.querySelector(".productos");
botonañadir = document.querySelector(".añadir");
contadorproductos = 0;
click = false;
var r = 1

function añadir (n,p){
    console.log(r)
    if (r == 1){
        for( i = n ; i < p ; i++ ){
            HTMLcode =`
             
            <div class="productos${ i} productos"> 
            <div class="nombre${ i} nombre"><input class="inputnombre${ i} inputnombre" type="text" placeholder="nombre del producto"> </div>
            <div class="cantidad${ i} cantidad"> <input class="inputcantidad${ i} inputcantidad" type="number" placeholder="Stock"> </div>
            <div class="sumayresta${ i} sumayresta"> <button class="sumar${ i} sumar">+</button>
                <button class="restar${ i} restar">-</button>
            </div>
        </div>`
        
        contenedor.innerHTML += HTMLcode;

} 

suma0 = document.querySelector(".sumar0")
suma1 = document.querySelector(".sumar1")
suma2 = document.querySelector(".sumar2")
suma3 = document.querySelector(".sumar3")
suma4 = document.querySelector(".sumar4")
inputcantidad0 = document.querySelector(".inputcantidad0")
inputcantidad1 = document.querySelector(".inputcantidad1")
inputcantidad2 = document.querySelector(".inputcantidad2")
inputcantidad3 = document.querySelector(".inputcantidad3")
inputcantidad4 = document.querySelector(".inputcantidad4")
resta0 = document.querySelector(".restar0")    
resta1 = document.querySelector(".restar1")  
resta2 = document.querySelector(".restar2")  
resta3 = document.querySelector(".restar3")  
resta4 = document.querySelector(".restar4")  
suma5 = document.querySelector(".sumar5")
suma6 = document.querySelector(".sumar6")
suma7 = document.querySelector(".sumar7")
suma8 = document.querySelector(".sumar8")
suma9 = document.querySelector(".sumar9")
inputcantidad5 = document.querySelector(".inputcantidad5")
inputcantidad6 = document.querySelector(".inputcantidad6")
inputcantidad7 = document.querySelector(".inputcantidad7")
inputcantidad8 = document.querySelector(".inputcantidad8")
inputcantidad9 = document.querySelector(".inputcantidad9")
resta5 = document.querySelector(".restar5")    
resta6 = document.querySelector(".restar6")  
resta7 = document.querySelector(".restar7")  
resta8 = document.querySelector(".restar8")  
resta9 = document.querySelector(".restar9") 
suma10 = document.querySelector(".sumar10")
suma11= document.querySelector(".sumar11")
suma12 = document.querySelector(".sumar12")
suma13 = document.querySelector(".sumar13")
suma14 = document.querySelector(".sumar14")
inputcantidad10 = document.querySelector(".inputcantidad10")
inputcantidad11 = document.querySelector(".inputcantidad11")
inputcantidad12 = document.querySelector(".inputcantidad12")
inputcantidad13 = document.querySelector(".inputcantidad13")
inputcantidad14 = document.querySelector(".inputcantidad14")
resta10 = document.querySelector(".restar10")    
resta11 = document.querySelector(".restar11")  
resta12 = document.querySelector(".restar12")  
resta13 = document.querySelector(".restar13")  
resta14 = document.querySelector(".restar14")



suma0.addEventListener("click",()=>{
    cantidadtotal = inputcantidad0.value++ ;
inputcantidad0.innerHTML = cantidadtotal;
})
suma1.addEventListener("click",()=>{
    cantidadtotal = inputcantidad1.value++;
inputcantidad1.innerHTML = cantidadtotal;
})
suma2.addEventListener("click",()=>{
    cantidadtotal = inputcantidad2.value++;
inputcantidad2.innerHTML = cantidadtotal;
})
suma3.addEventListener("click",()=>{
    cantidadtotal = inputcantidad3.value++;
inputcantidad3.innerHTML = cantidadtotal;
})
suma4.addEventListener("click",()=>{
    cantidadtotal = inputcantidad4.value++;
inputcantidad4.innerHTML = cantidadtotal;
})
suma5.addEventListener("click",()=>{
    cantidadtotal = inputcantidad5.value++;
inputcantidad5.innerHTML = cantidadtotal;
})
suma6.addEventListener("click",()=>{
    cantidadtotal = inputcantidad6.value++;
inputcantidad6.innerHTML = cantidadtotal;
})
suma7.addEventListener("click",()=>{
    cantidadtotal = inputcantidad7.value++;
inputcantidad7.innerHTML = cantidadtotal;
})
suma8.addEventListener("click",()=>{
    cantidadtotal = inputcantidad8.value++;
inputcantidad8.innerHTML = cantidadtotal;
})
suma9.addEventListener("click",()=>{
    cantidadtotal = inputcantidad9.value++;
inputcantidad9.innerHTML = cantidadtotal;
})
suma10.addEventListener("click",()=>{
    cantidadtotal = inputcantidad10.value++;
inputcantidad10.innerHTML = cantidadtotal;
})
suma11.addEventListener("click",()=>{
    cantidadtotal = inputcantidad11.value++;
inputcantidad11.innerHTML = cantidadtotal;
})
suma12.addEventListener("click",()=>{
    cantidadtotal = inputcantidad12.value++;
inputcantidad12.innerHTML = cantidadtotal;
})
suma13.addEventListener("click",()=>{
    cantidadtotal = inputcantidad13.value++;
inputcantidad13.innerHTML = cantidadtotal;
})
suma14.addEventListener("click",()=>{
    cantidadtotal = inputcantidad14.value++;
inputcantidad14.innerHTML = cantidadtotal;
})
resta0.addEventListener("click",()=>{
    cantidadtotal = inputcantidad0.value-- ;
inputcantidad0.innerHTML = cantidadtotal;
})
resta1.addEventListener("click",()=>{
    cantidadtotal = inputcantidad1.value--;
inputcantidad1.innerHTML = cantidadtotal;
})
resta2.addEventListener("click",()=>{
    cantidadtotal = inputcantidad2.value--;
inputcantidad2.innerHTML = cantidadtotal;
})
resta3.addEventListener("click",()=>{
    cantidadtotal = inputcantidad3.value--;
inputcantidad3.innerHTML = cantidadtotal;
})
resta4.addEventListener("click",()=>{
    cantidadtotal = inputcantidad4.value--;
inputcantidad4.innerHTML = cantidadtotal;
})
resta5.addEventListener("click",()=>{
    cantidadtotal = inputcantidad5.value--;
inputcantidad5.innerHTML = cantidadtotal;
})
resta6.addEventListener("click",()=>{
    cantidadtotal = inputcantidad6.value--;
inputcantidad6.innerHTML = cantidadtotal;
})
resta7.addEventListener("click",()=>{
    cantidadtotal = inputcantidad7.value--;
inputcantidad7.innerHTML = cantidadtotal;
})
resta8.addEventListener("click",()=>{
    cantidadtotal = inputcantidad8.value--;
inputcantidad8.innerHTML = cantidadtotal;
})
resta9.addEventListener("click",()=>{
    cantidadtotal = inputcantidad9.value--;
inputcantidad9.innerHTML = cantidadtotal;
})
resta10.addEventListener("click",()=>{
    cantidadtotal = inputcantidad10.value--;
inputcantidad10.innerHTML = cantidadtotal;
})
resta11.addEventListener("click",()=>{
    cantidadtotal = inputcantidad11.value--;
inputcantidad11.innerHTML = cantidadtotal;
})
resta12.addEventListener("click",()=>{
    cantidadtotal = inputcantidad12.value--;
inputcantidad12.innerHTML = cantidadtotal;
})
resta13.addEventListener("click",()=>{
    cantidadtotal = inputcantidad13.value--;
inputcantidad13.innerHTML = cantidadtotal;
})
resta14.addEventListener("click",()=>{
    cantidadtotal = inputcantidad14.value--;
inputcantidad14.innerHTML = cantidadtotal;
})
r++
    }
if(r>1){
botonañadir.innerHTML = `maximo alcanzado`  
botonañadir.classList.replace("añadir","noañadir") 
botonañadir.addEventListener("click",()=>{
    alert("ya alcanzo la cantidad maxima de productos")   
})
}  
}

añadir1= ()=>{
   
    añadir(0,15);
    console.log(r)
}

botonañadir.addEventListener("click",añadir1)



    
    
