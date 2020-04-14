import { DefaultCrudRepository } from '@loopback/repository';
import { Categoria, CategoriaRelations } from '../models';
import { MongodbDataSource } from '../datasources';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.id, CategoriaRelations> {
    constructor(dataSource: MongodbDataSource);
}
