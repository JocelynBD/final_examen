// Obtener referencias a los elementos HTML
let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");

// Función para realizar la solicitud a la API
const solicitudAPI = async () => {
 try {
  // Obtener la respuesta de la API
  const response = await axios.get("https://api.ipgeolocation.io/v1/?apiKey=YOUR_API_KEY&ip=YOUR_IP_ADDRESS");
   
  // Actualizar los elementos HTML con la información obtenida
  ip.innerHTML = response.data.ip;
  pais.innerHTML = response.data.country_name;
  continente.innerHTML = response.data.continent_name;
  zona_horaria.innerHTML = response.data.time_zone.current_time;

  // Verificar el país detectado después de recibir la respuesta de la API
  verificarPais(response.data.country_name);
 } catch (error) {
  // Manejar el error
  console.error(error);
 }
};

// Llamar a la función de solicitudAPI cuando se carga la página
window.addEventListener('load', solicitudAPI);

// Nueva función para verificar el país y realizar la redirección
const verificarPais = (pais_detectado) => {
 if (pais_detectado === "Sudamerica") {
  // Redirigir a la API de Sudamérica
  window.location.href = "https://itp-scr-examen-1.000webhostapp.com/php-geoip-api/index.php";
 } else if (pais_detectado === "Africa") {
  // Redirigir a la API de África
  window.location.href = "https://itp-examen.000webhostapp.com/php-geoip-api/index.php";
 } else {
  // Redirigir a la API de Europa
  window.location.href = "https://itp-europa.000webhostapp.com/php-geoip-api/index.php";
 }
};