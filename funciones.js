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

// Links de los perfiles en Redes Sociales, los urls se deben cambiar por la direccion del usuario del CV
url_face = "https://facebook.com/";
url_insta = "https://www.instagram.com/";
url_twitter = "https://twitter.com/";
url_link = "https://www.linkedin.com/";

document.getElementById("facebook").addEventListener('click',function(){
  console.log("clic en facebook")
  window.open(url_face)
});
document.getElementById("instagram").addEventListener('click',function(){
    console.log("clic en instagram")
    window.open(url_insta)
});

document.getElementById("twitter").addEventListener('click',function(){
  console.log("clic en twitter")
  window.open(url_twitter)
});

document.getElementById("linkedin").addEventListener('click',function(){
  console.log("clic en linkedin")
  window.open(url_link)
});

