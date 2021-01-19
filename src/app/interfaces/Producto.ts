export interface Producto{
    _id:string;
    name:string;
    description:string;
    sku:string;
    price:number;
    image_path?:string;
    category?:{
        name:string;
    }
}
export interface ProductosPaginator{
    docs:Producto[];
    /*docs:[
        {[k:string]:string|number}
    ]*///Estructura generica, cada json tiene una propiedad string con valor string. N propiedades de este tipo.
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter?: number;//?->opcional
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
}

{
    pepe:"pepe"
}