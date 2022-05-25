
/* Se escucha el evento submit y se ejecuta el event */
const form = document.getElementById('form')    
form.addEventListener('submit',submit_event)

/* SE CREA LA VARIABLE DATA CON EL EVENTO SUBMIT Y SE CREA UN OBJETO QUE CONTIENE TODO */
function serialize_form(form) {
    /* Retorna los valores del form en un objeto */
  
    var data = new FormData(form);
    let results = {};
    for (const [name, value] of data) {
      results[name] = value;
    }
    return results;
  } 

/* Cuando hay un evento submit la funcion ejecuta todos los siguientes parametros  */
function submit_event (e) {
    e.preventDefault()
    const data = serialize_form(this);
    const resultados = calcular2(data.salario_base, data.dias_laborados)  
    pintar(resultados,data)

}

/* Se hacen todos los calculos de la liquidacion */
function calcular2 (salario,dias_laborados) {

    
    salario = parseInt(salario);
    dias_laborados = parseInt(dias_laborados);
    //
    const cesantias = Math.round((salario * dias_laborados)/360);
    const intereses_cesantias = Math.round((cesantias * dias_laborados * 0.12)/360);
    const prima_de_servicios = Math.round((salario * dias_laborados)/360);
    const vacaciones = Math.round((salario * dias_laborados)/720);
    const total_liquidacion = cesantias + intereses_cesantias + prima_de_servicios ;

    /* Se crea un objeto con los resultado de los calculos */
    return {
        cesantias: cesantias,
        intereses_cesantias: intereses_cesantias,
        prima_de_servicios: prima_de_servicios,
        vacaciones: vacaciones,
        total_liquidacion: total_liquidacion,
    }


}

function pintar(resultados, data){
    Cesantias_resultado = "Cesantias: " + resultados.cesantias;
    Intereses_Cesantias_resultado = "Intereses cesantias: " + resultados.intereses_cesantias;
    prima_de_servicios_resultados = "Prima de servicio: " + resultados.prima_de_servicios;
    vacaciones_resultados = "Vacaciones: " + resultados.vacaciones;
    total_liquidacion_resultado = "El total de la liquidación del trabajador " + data.nombre + " es igual a: " + resultados.total_liquidacion;

    pintar_cesantias =  document.getElementById('resultado').innerHTML = Cesantias_resultado;
    pintar_intereses_cesantias = document.getElementById('resultado2').innerHTML = Intereses_Cesantias_resultado;
    pintar_prima_de_servicios = document.getElementById('resultado3').innerHTML = prima_de_servicios_resultados;
/*     pintar_vacaciones = document.getElementById('resultado4').innerHTML = vacaciones_resultados;
 */    pintar_total_liquidacion = document.getElementById('resultado5').innerHTML = total_liquidacion_resultado;

    return {
        pintar_cesantias: pintar_cesantias,
        pintar_intereses_cesantias: pintar_intereses_cesantias,
        pintar_prima_de_servicios: pintar_prima_de_servicios,
        /* pintar_vacaciones: pintar_vacaciones, */
        pintar_total_liquidacion: pintar_total_liquidacion,
    }
   
}

