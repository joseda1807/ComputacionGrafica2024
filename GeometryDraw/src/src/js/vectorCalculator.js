function vector(){
    
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


function vectorsuma(){

    let axsuma = parseFloat(document.getElementById("puntoAXsuma").value);
    let aysuma = parseFloat(document.getElementById("puntoAYsuma").value);
    let azsuma = parseFloat(document.getElementById("puntoAZsuma").value);

    let bxsuma = parseFloat(document.getElementById("puntoBXsuma").value);
    let bysuma = parseFloat(document.getElementById("puntoBYsuma").value);
    let bzsuma = parseFloat(document.getElementById("puntoBZsuma").value);

    let vxsuma = bxsuma+axsuma;
        vysuma= bysuma+aysuma;
        vzsuma= bzsuma+azsuma;
   
    let vectorFinalsuma = `(${vxsuma},${vysuma},${vzsuma})`;

    document.getElementById("resultadosuma").innerHTML= vectorFinalsuma;
    alert(vectorFinalsuma);

}

function vectorproducto(){

    let axproducto = parseFloat(document.getElementById("puntoAXproducto").value);
    let ayproducto= parseFloat(document.getElementById("puntoAYproducto").value);
    let azproducto= parseFloat(document.getElementById("puntoAZproducto").value);

    let bxproducto= parseFloat(document.getElementById("puntoBXproducto").value);
    let byproducto = parseFloat(document.getElementById("puntoBYproducto").value);
    let bzproducto= parseFloat(document.getElementById("puntoBZproducto").value);
    
    let vxproducto = bxproducto*axproducto;
        vyproducto= byproducto*ayproducto;
        vzproducto= bzproducto*azproducto;
   
    let vectorFinalproducto = `(${vxproducto},${vyproducto},${vzproducto})`;
    let vectorresultadofinal= vxproducto+vyproducto+vzproducto;

    document.getElementById("resultadoproducto").innerHTML= vectorFinalproducto;
    document.getElementById("resultadofinalproducto").innerHTML= vectorresultadofinal;
    alert(vectorFinalproducto);
    alert(vectorresultadofinal);
}
function vectormagnitud(){
    let axmagnitud = parseFloat(document.getElementById("puntoAXmagnitud").value);
    let aymagnitud= parseFloat(document.getElementById("puntoAYmagnitud").value);
    let azmagnitud= parseFloat(document.getElementById("puntoAZmagnitud").value);

    let bxmagnitud= parseFloat(document.getElementById("puntoBXmagnitud").value);
    let bymagnitud = parseFloat(document.getElementById("puntoBYmagnitud").value);
    let bzmagnitud= parseFloat(document.getElementById("puntoBZmagnitud").value);
    
    let magnitudoperacion=0;
    let magnitudfinal=0;
    let magnitudx=(axmagnitud-bxmagnitud)**2;
        magnitudy=(bymagnitud-aymagnitud)**2
        magnitudz=(bzmagnitud-azmagnitud)**2
        magnitudoperacion= magnitudx+magnitudy+magnitudz
        magnitudfinal=Math.sqrt(magnitudoperacion);

    document.getElementById("resultadomagnitud").innerHTML= magnitudfinal;
    alert(magnitudfinal);
 
}