let temperaturaCelsius=prompt("Ingrese la temperatura en grados celsius: ")
while (isNaN(temperaturaCelsius)){
    alert("Debes ingresar un numero.")
    temperaturaCelsius=prompt("Ingresa la temperatura en grados celsius: ")
}
temperaturaFahrenheit=((temperaturaCelsius*(9/5))+32)
temperaturaKelvin=parseFloat(temperaturaCelsius)+273.15
console.log("La temperatura en Fahrenheit es: "+temperaturaFahrenheit)
console.log("La temperatura en Kelvin es: "+temperaturaKelvin)
alert("Active las herramientas de desarrollador y vaya a la consola, para ver al resultado.")

