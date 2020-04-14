import { DefaultCrudRepository } from '@loopback/repository';
import { ResumenDeVenta, ResumenDeVentaRelations } from '../models';
import { MongodbDataSource } from '../datasources';
export declare class ResumenDeVentaRepository extends DefaultCrudRepository<ResumenDeVenta, typeof ResumenDeVenta.prototype.id, ResumenDeVentaRelations> {
    constructor(dataSource: MongodbDataSource);
}
