import { Libro } from "./Libro";

export class GestorLibro {
    private libros:Libro[];

    public constructor () {
        this.libros = [];
    }

    public getLibros():Libro[] {
        return this.libros;
    }

    public insertar(libro:Libro):boolean{
        if(libro != null) {
            this.libros.push(libro);
            return true;
        }
        return false;
    }

    public eliminar(codigo:number):boolean {
        if((this.libros != null) || (codigo > 0)) {
            for(let i:number = 0; i < this.libros.length; i++) {
                if (this.libros[i].getCodigo() == codigo) {
                    this.libros.splice(i,1);
                    return true;
                }
            }
        }

        return false;
    }

    
    public consultar(codigo:number):Libro|null {
        for(let i:number = 0; i < this.libros.length; i++) {
            if (this.libros[i].getCodigo() == codigo) {
                return this.libros[i];
            }
        }
        return null;
    }


    public actualizar(libro:Libro):boolean {
        for(let i:number = 0; i < this.libros.length; i++) {
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

