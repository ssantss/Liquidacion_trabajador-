/* const input = document.getElementById("nombre");
const mombre = input.value; */

/* const input_salario = document.getElementById("salario");
const salario = parseInt(input_salario.value); */
function serialize_form(form) {
    /* Retorna los valores del form en un objeto */
  
    var data = new FormData(form);
    let results = {};
    for (const [name, value] of data) {
      results[name] = value;
    }
    return results;
  }
  


function submit_event (e) {
    e.preventDefault()
    console.log(e)
    const data = serialize_form(this);
    console.log(data)
    const resultados = calcular2(data.salario_base, data.dias_laborados)  
    console.log(resultados)
}




const form = document.getElementById('form')    
form.addEventListener('submit',submit_event)

function calcular2 (salario,dias_laborados) {

    
    salario = parseInt(salario);
    dias_laborados = parseInt(dias_laborados);
    //
    const cesantias = Math.round((salario * dias_laborados)/360);
    const intereses_cesantias = Math.round((cesantias * dias_laborados * 0.12)/360);
    const prima_de_servicios = Math.round((salario * dias_laborados)/360);
    const vacaciones = Math.round((salario * dias_laborados)/720);
    const total_liquidacion = cesantias + intereses_cesantias + prima_de_servicios + vacaciones;

    return {
        cesantias: cesantias,
        intereses_cesantias: intereses_cesantias,
        prima_de_servicios: prima_de_servicios,
        vacaciones: vacaciones,
        total_liquidacion: total_liquidacion,
    }


}




function calcular(){
    const input = document.getElementById("nombre");
    const nombre = input.value;
    
    const input_salario = document.getElementById("salario");
    const salario = parseInt(input_salario.value);
    const input_dias_laborados = document.getElementById("dias_laborados");
    const dias_laborados = parseInt(input_dias_laborados.value);






    const cesantias = Math.round((salario * dias_laborados)/360);
    const intereses_cesantias = Math.round((cesantias * dias_laborados * 0.12)/360);
    const prima_de_servicios = Math.round((salario * dias_laborados)/360);
    const vacaciones = Math.round((salario * dias_laborados)/720);
    const total_liquidacion = cesantias + intereses_cesantias + prima_de_servicios + vacaciones;

    Cesantias_resultado = "Cesantias: " + cesantias  
    document.getElementById('resultado').innerHTML = Cesantias_resultado;

    Intereses_Cesantias_resultado = "Intereses cesantias: " + intereses_cesantias
    document.getElementById('resultado2').innerHTML = Intereses_Cesantias_resultado;

    prima_de_servicios_resultados = "Prima de servicio: " + prima_de_servicios;
    document.getElementById('resultado3').innerHTML = prima_de_servicios_resultados;

    vacaciones_resultados = "Vacaciones: " + vacaciones;
    document.getElementById('resultado4').innerHTML = vacaciones_resultados;

    total_liquidacion_resultado = "El total de la liquidación del trabajador " + nombre + " es igual a: " + total_liquidacion;
    document.getElementById('resultado5').innerHTML = total_liquidacion_resultado;

}

