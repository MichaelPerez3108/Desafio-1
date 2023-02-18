'use strict';
const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click", function(){
    const precio = 400000;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const contenido = document.getElementById('contenido');
    const pCantidad = document.getElementById('Cantidad');
    const total = document.getElementById('Total');

    total.innerHTML =`Total: $ ${precio*cantidad}`;
    pCantidad.innerHTML=`Cantidad :${cantidad} Unidades`;

   

    const opColor = document.getElementById('opcion').value;
    const color = document.getElementById('selecColor');
    const pColor = document.getElementById('Color');
    if(opColor === "verde"){
        color.setAttribute("class","green");
        contenido.appendChild(total);
        contenido.appendChild(pCantidad);
        contenido.appendChild(pColor);
        pColor.appendChild(color);
    }else if(opColor === "rojo"){
        color.setAttribute("class","red");
        contenido.appendChild(total);
        contenido.appendChild(pCantidad);
        contenido.appendChild(pColor);
        pColor.appendChild(color);
    }else if (opColor === "azul"){
        color.setAttribute("class","blue");
        contenido.appendChild(total);
        contenido.appendChild(pCantidad);
        contenido.appendChild(pColor);
        pColor.appendChild(color);
    }else if(opColor === "amarillo"){
        color.setAttribute("class","yellow");
        contenido.appendChild(total);
        contenido.appendChild(pCantidad);
        contenido.appendChild(pColor);
        pColor.appendChild(color);
    }else if(opColor === "negro"){
        color.setAttribute("class","black");
        contenido.appendChild(total);
        contenido.appendChild(pCantidad);
        contenido.appendChild(pColor);
        pColor.appendChild(color);
    }else{
        contenido.innerHTML = `Color:No selecciono Color<span id="selecColor"></span>`
    }
});
