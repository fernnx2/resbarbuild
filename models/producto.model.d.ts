import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: string;
    nombre: string;
    precio: number;
    categoria: object;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
