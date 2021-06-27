# tiot-tp2
TP Test Driven Development TDD
 
Preparacion del TP
 
Instalacion Node Js
Creacion del repositorio de trabajo
   gitinit lista
   cd lista
Configuracion del archivo .gitignore
   node_modules
   coverage
   .nyc_output
   .vscode
Creacion del proyecto npm
   npm init
Instalacion de los paquetes de pruebas
   npm install --save mocha chai nyc
Ajustes en el package.json
   "scripts": {
       "test": "mocha --reporter spec",
       "coverage": "nyc --reporter=html mocha"
   },
npm install chai-sorted
