"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(codigo, titulo, autor, categoria, editorial, fecha_publicacion) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.editorial = editorial;
        this.fechaPublicacion = fecha_publicacion;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    getEditorial() {
        return this.editorial;
    }
    setEditorial(editorial) {
        this.editorial = editorial;
    }
    getFechaPublicacion() {
        return this.fechaPublicacion;
    }
    setFechaPublicacion(fecha_publicacion) {
        this.fechaPublicacion = fecha_publicacion;
    }
}
exports.Libro = Libro;
