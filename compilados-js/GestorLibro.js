"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLibro = void 0;
class GestorLibro {
    constructor() {
        this.libros = [];
    }
    getLibros() {
        return this.libros;
    }
    insertar(libro) {
        if (libro != null) {
            this.libros.push(libro);
            return true;
        }
        return false;
    }
    eliminar(codigo) {
        if ((this.libros != null) || (codigo > 0)) {
            for (let i = 0; i < this.libros.length; i++) {
                if (this.libros[i].getCodigo() == codigo) {
                    this.libros.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
    consultar(codigo) {
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].getCodigo() == codigo) {
                return this.libros[i];
            }
        }
        return null;
    }
    actualizar(libro) {
        for (let i = 0; i < this.libros.length; i++) {
            // console.log(this.libros[i].getCodigo() + " == " +  libro.getCodigo());
            if (this.libros[i].getCodigo() == libro.getCodigo()) {
                // console.log("entro al if de actualizar");
                // console.log(this.libros[i].getCodigo() + " == " +  libro.getCodigo());
                this.libros[i] = libro;
                return true;
            }
        }
        return false;
    }
}
exports.GestorLibro = GestorLibro;
