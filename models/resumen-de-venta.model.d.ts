import { Entity } from '@loopback/repository';
export declare class ResumenDeVenta extends Entity {
    id?: string;
    fecha?: string;
    total: number;
    productos: object[];
    constructor(data?: Partial<ResumenDeVenta>);
}
export interface ResumenDeVentaRelations {
}
export declare type ResumenDeVentaWithRelations = ResumenDeVenta & ResumenDeVentaRelations;
