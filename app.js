class cuadro{
    constructor(base){
    this.base=base;
    }
    areaC(){
        return this.base*this.base;
    }
}

class triangulo{
    constructor(base,altura){
    this.base=base;
    this.altura=altura;
    }
    areaT(){
        return this.base*this.altura/2;
    }
}

class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    areaR(){
        return this.base*this.altura;
    }
}

const btnRectangulo=document.getElementById("btnRectangulo");
btnRectangulo.addEventListener('click',()=>{
    let alturaR=parseInt(document.getElementById("altura").value);
    let baseR=parseInt(document.getElementById("base").value);
    let rect1=new Rectangulo (baseR,alturaR);
    let divResR=document.getElementById("resultados");
    divResR.innerHTML+="<p>area del rectangulo " + rect1.areaR() + "</p>";
});


const btnTriangulo=document.getElementById("btnTriangulo");
btnTriangulo.addEventListener('click',()=>{
    let alturaT=parseInt(document.getElementById("altura").value);
    let baseT=parseInt(document.getElementById("base").value);
    let tri1=new triangulo (baseT,alturaT);
    let divResT=document.getElementById("resultados");
    divResT.innerHTML+="<p>area del triangulo " + tri1.areaT() + "</p>";
});


const btnCuadrado=document.getElementById("btnCuadrado");
btnCuadrado.addEventListener('click',()=>{
    let baseC=parseInt(document.getElementById("base").value);
    let cua1=new cuadro (baseC);
    let divResC=document.getElementById("resultados");

    divResC.innerHTML+="<p>area del cuadrado " + cua1.areaC() + "</p>";
});

// alan manuel silva larios  xd



