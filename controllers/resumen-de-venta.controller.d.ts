import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ResumenDeVenta } from '../models';
import { ResumenDeVentaRepository } from '../repositories';
export declare class ResumenDeVentaController {
    resumenDeVentaRepository: ResumenDeVentaRepository;
    constructor(resumenDeVentaRepository: ResumenDeVentaRepository);
    create(resumenDeVenta: Omit<ResumenDeVenta, 'id'>): Promise<ResumenDeVenta>;
    count(where?: Where<ResumenDeVenta>): Promise<Count>;
    find(filter?: Filter<ResumenDeVenta>): Promise<ResumenDeVenta[]>;
    ResumendeVentaProductos(fecha1: Date, fecha2: Date): Promise<ResumenDeVenta[]>;
    updateAll(resumenDeVenta: ResumenDeVenta, where?: Where<ResumenDeVenta>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ResumenDeVenta>): Promise<ResumenDeVenta>;
    updateById(id: string, resumenDeVenta: ResumenDeVenta): Promise<void>;
    replaceById(id: string, resumenDeVenta: ResumenDeVenta): Promise<void>;
    deleteById(id: string): Promise<void>;
}
