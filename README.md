#Hook useEffect

## Repaso
Para crear una aplicacion de React con la herramiente Vite necesitamos ejecutar el siguiente comando: 

```bash
npm create vite@latest
```

Tenemos que responder a un formulario para seleccionar el nombre del proyecto, el nombre del paqute, el framework o biblioteca a utilizar, la sintaxis a utilizar. 

Nota: Recordar que en el git bash no se puede interactuar con las opciones de la creacion de la aplicacion. 

Seleccionar en el framework: React 
Lenguaje o sintaxis seleccionamos: Javascript

Despues de crear la aplicacion, debemos instalar las dependencias con el siguiente comando:

```bash
npm install
```

Importante: Asegurarnos que en nuestra terminal estamos en la carpeta donde tenemos el package.json

Una vez instaladas las dependecias, ejecuitamos el proyecto:

```bash
npm run dev
```
El comando --host se puede agregar en el package json en la seccion de scripara que nos de la IP para poder acceder a la aplicacion 


##Hooks
Los hooks son funciones especiales para acceder a ciertas funciones de los componentes de react. Tienen las siguientes caraacteristicas: 
    -Todos empiezan con la palabra use (useState, useEffect, useRef, useContext, useCallback ...)
    -Todos se deben importar. 

    React cuenta con hooks predfefinidos, sin embargo, nosotros podemos crear nuestros propios hooks a partir de hooks predefinidos. 

    ### useEffect
Este hook nos permite sincronizar (o actualizar) un componente con un sistema externo. 

Un sistema externo es cualquier elemento de software que nuestra aplicacion no controla, por ejemplo: 
- El sistema operativo. 
- Un contador creado con setTimeout() (es una funcion que nos permite crear un temporizador).
- Una petición a un servidor externo ( o un API). 

Este Hook se va a ejecutar por primera vez cuando cargamos el componente, ademas se va a ejecutar antes de renderizar contenidos en pantalla del componente. 

SPA : Single Page Application. la idea es que no se tenga que cargar varias paginas para cambiar entre pantallas. Solamente se envia un JSON para cambiar la pagina. 