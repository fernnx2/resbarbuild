import { Entity } from '@loopback/repository';
export declare class Orden extends Entity {
    id?: string;
    fecha?: string;
    mesero: string;
    mesa: string;
    cliente: string;
    estado: string;
    total: number;
    observacion: string;
    detalleOrden: object[];
    constructor(data?: Partial<Orden>);
}
export interface OrdenRelations {
}
export declare type OrdenWithRelations = Orden & OrdenRelations;
