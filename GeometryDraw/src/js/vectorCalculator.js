function vectorsuma(){
    
    let ax = document.getElementById("puntoAX").value;
    let ay = document.getElementById("puntoAY").value;
    let az = document.getElementById("puntoAZ").value;

    let bx= document.getElementById("puntoBX").value;
    let by= document.getElementById("puntoBY").value;
    let bz = document.getElementById("puntoBZ").value;
    //alert("("+ ax+ ","+ ay+","+az+")"); 
    //alert("("+ bx+ ","+ by+","+bz+")"); 

    let vx = bx-ax;
        vy= by-ay;
        vz= bz-az;

    let vectorFinal = `(${vx},${vy},${vz})`;
        
    //alert("("+ vx+ ","+ vy+","+vz+")"); 

    document.getElementById("resultado").innerHTML= vectorFinal;

    alert(vectorFinal);

}


function vectormultiplicacion(){
    let ax = document.getElementById("puntoAX").value;
    let ay = document.getElementById("puntoAY").value;
    let az = document.getElementById("puntoAZ").value;

    let bx= document.getElementById("puntoBX").value;
    let by= document.getElementById("puntoBY").value;
    let bz = document.getElementById("puntoBZ").value;
    
}