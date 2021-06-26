module.exports = class Lista { 

    constructor() {
        this.elementos = [];
    }

    count() {
        return this.elementos.length;
    }

    find() {
        return NaN;
    }

    add(clave, valor) {
        this.elementos.push({clave, valor});
    }
};