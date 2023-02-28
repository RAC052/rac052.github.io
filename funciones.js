// =====================================================================================
// CURSO FRONT ACADEMY - 2022 (ARGENTINA PROGRAMA 4.0) - PROYECTO FINAL
// Funciones en JavaScript
// Alumno: Raul Antonio CABIDO
// =====================================================================================


// LECTURA Y ACTUALIZACION DE DATOS PARA EL CV (API: https://randomuser.me/ )

url_1 = 'https://randomuser.me/API';

async function read_Personas(url){
      const response = await fetch(url);
      const resultados = await response.json();
      const persona = resultados.results[0];
 
     //   Pruebas de Acceso al Objeto
      console.log(persona.name.first)

    
    // Fotografia
    document.getElementById("imagen").src = persona.picture.large;
    
    // Nombre y Apellido
    document.getElementById("nombre").innerHTML =  persona.name.first+" "+persona.name.last;

    // Email
    document.getElementById("email").innerHTML = persona.email;

    // Cel
    document.getElementById("celular").innerHTML = persona.cell;

    // Telefono
    document.getElementById("telefono").innerHTML = persona.phone;

    // Direccion: Calle Num (CP), Pais
    document.getElementById("adress").innerHTML = persona.location.street.name + " " + persona.location.street.number + " (" +
    +persona.location.postcode+"), "+ persona.location.country;;
    
}

read_Personas(url_1);

