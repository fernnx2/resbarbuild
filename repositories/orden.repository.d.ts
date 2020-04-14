import { DefaultCrudRepository } from '@loopback/repository';
import { Orden, OrdenRelations } from '../models';
import { MongodbDataSource } from '../datasources';
export declare class OrdenRepository extends DefaultCrudRepository<Orden, typeof Orden.prototype.id, OrdenRelations> {
    constructor(dataSource: MongodbDataSource);
}
