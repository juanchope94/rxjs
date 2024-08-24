# Reto RxJs

```
Antes de empezar ejecutar
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.
```
Una vez instalado los modulos ejecutar npm start el cual levantara nuestro proyecto en el puerto 8084
```


Utilizando unicamente observables y sus operadores, realizar lo siguiente:

* De la caja de texto proporcionada una vez pasen 5 segundos de haberse dejado de escribir capturar el valor
* Realizar una peticionn ajax a la API the Rick and Morty reemplazando  nombre del personaje por el valor de la caja de texto https://rickandmortyapi.com/api/character/?name={nombreDelPersonaje}
* Del resultado de la peticion obtener unicamente el primer registro de la lista y construir el siguiente objeto
```json
{
  "name": .....,
  "image": .....,
  "gender": ....,
  "species":....
}
```
* Si la url de la api por algun motivo no fuera la correcta y fallara la peticion , manejar el error y retornar el siguiente objeto
```json
{
  "name": "Alien Googah",
  "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  "gender": "unknown",
  "species": "Alien"
}
```
* Imprimir por consola unicamente el objeto construido




**Plus: construir una card y renderizar la data de la respuesta junto con la imagen del personaje**


