const input = document.getElementById("nombre");
const mombre = input.value;

const input_salario = document.getElementById("salario");
const salario = parseInt(input_salario.value);

const dias_trabajados = 350;

const cesantias = (salario * dias_trabajados)/360
const intereses_cesantias = (cesantias * dias_trabajados * 0.12)/360


function calcular(){
    const input = document.getElementById("nombre");
    const nombre = input.value;
    console.log(nombre)
    const input_salario = document.getElementById("salario");
    const salario = parseInt(input_salario.value);

    const date = document.getElementById("dateInput");
    console.log(date)





    const cesantias = Math.round((salario * dias_trabajados)/360);
    const intereses_cesantias = Math.round((cesantias * dias_trabajados * 0.12)/360);

    Cesantias_resultado = "las cesantias son: " + cesantias  
    document.getElementById('resultado').innerHTML = Cesantias_resultado;
    Intereses_Cesantias_resultado = "los intereses son: " + intereses_cesantias
    document.getElementById('resultado2').innerHTML = Intereses_Cesantias_resultado;


}

