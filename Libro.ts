export class Libro {
    private codigo: number;
    private titulo: string;
    private autor: string;
    private categoria: string;
    private editorial: string;
    private fechaPublicacion: Date;

    
    public constructor (codigo: number, titulo: string, autor: string, categoria: string, editorial: string, fecha_publicacion: Date) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.editorial = editorial;
        this.fechaPublicacion = fecha_publicacion
    }
    public getCodigo(): number {
        return this.codigo;
    }
    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
 

    public getAutor(): string {
        return this.autor;
    }
    public setAutor(autor: string): void {
        this.autor = autor;
    }


    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }


    public getEditorial(): string {
        return this.editorial;
    }
    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }



    public getFechaPublicacion(): Date {
        return this.fechaPublicacion;
    }

    public setFechaPublicacion(fecha_publicacion: Date): void {
        this.fechaPublicacion = fecha_publicacion;
    }
}

