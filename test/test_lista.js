/**
 *--En una lista vacia hay cero elementos.
 *--En una lista vacia no se encuentra ninguna clave
 *--Cuando se agrega un elemento a una lista vacia hay un elemento.
 *--Cuando se agrega un elementos a una lista vacia se puede recuperar el valor a partir de la clave.
 *-Cuando se agrega una clave que ya esta en la lista se actualiza el valor correspondiente.
 *Cuando se agrega un elelmento a una lista vacia la lista de claves esta ordenada.
 *Cuadoo se agrega un elemento al principio la lista de claves esta ordenada.
 *Cuando se agrega un elemento al final la lista de claves esta ordenada.
 */

 const assert = require("chai").assert;
 const Lista = require("../src/lista.js")

describe("en una lista vacia" , function() {
    var lista = new Lista();

    it("hay cero elementos", function() {
         assert.equal(lista.count(),0);
    })

    it("no se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"),0);
    })
})

describe("cuando se agrega un elemento a una lista vacía" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");

    it("hay un elemento", function() {
        assert.equal(lista.count(), 1);
    })  

    it("se puede recuperar el valor a partir de la clave", function() {
        assert.equal(lista.find("clave"), "valor");
    })
})

describe("Cuando se agrega una clave que ya esta en la lista" , function() {
    var lista = new Lista();
    lista.add("clave", "valor2");
    
    it("se actualiza el valor correspondiente", function() {
        assert.equal(lista.find("clave"), "valor2");
    })  
})