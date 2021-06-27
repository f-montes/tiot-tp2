module.exports = class Lista { 

    constructor() {
        this.elementos = [];
    }

    count() {
        return this.elementos.length;
    }

    find() {
        if (this.elementos.length == 1) {
            return this.elementos[0].valor;
        }   
        return NaN;
    }

    add(clave, valor) {
        this.elementos.push({clave, valor});
    }

    SortedArray(){
        return this.elementos.reduce((r,{clave})=>r.concat(clave),[]).sort((a,b)=>a.localeCompare(b));
    }

    del(clave) {
        for (var i=0; i<this.elementos.length;i++) {
            if (this.elementos[i].clave == clave) {
                this.elementos.splice(i,1);
                return;
            }
        }
    }
};