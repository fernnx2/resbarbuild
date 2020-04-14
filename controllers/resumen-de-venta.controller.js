"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ResumenDeVentaController = class ResumenDeVentaController {
    constructor(resumenDeVentaRepository) {
        this.resumenDeVentaRepository = resumenDeVentaRepository;
    }
    async create(resumenDeVenta) {
        return this.resumenDeVentaRepository.create(resumenDeVenta);
    }
    async count(where) {
        return this.resumenDeVentaRepository.count(where);
    }
    async find(filter) {
        return this.resumenDeVentaRepository.find(filter);
    }
    //consumiendo un aggregate para resumir por productos
    async ResumendeVentaProductos(fecha1, fecha2) {
        const orderCollection = this.resumenDeVentaRepository.dataSource
            .connector.collection('ResumenDeVenta');
        return orderCollection
            .aggregate([
            {
                $match: {
                    fecha: {
                        $gte: fecha1,
                        $lte: fecha2,
                    },
                },
            },
            {
                $unwind: {
                    path: '$productos',
                },
            },
            {
                $group: {
                    _id: '$productos.nombre',
                    Total: {
                        $sum: '$productos.cantidad',
                    },
                },
            },
        ])
            .get();
    }
    //fin del aggregate
    async updateAll(resumenDeVenta, where) {
        return this.resumenDeVentaRepository.updateAll(resumenDeVenta, where);
    }
    async findById(id, filter) {
        return this.resumenDeVentaRepository.findById(id, filter);
    }
    async updateById(id, resumenDeVenta) {
        await this.resumenDeVentaRepository.updateById(id, resumenDeVenta);
    }
    async replaceById(id, resumenDeVenta) {
        await this.resumenDeVentaRepository.replaceById(id, resumenDeVenta);
    }
    async deleteById(id) {
        await this.resumenDeVentaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/resumenDeVentas', {
        responses: {
            '200': {
                description: 'ResumenDeVenta model instance',
                content: {
                    'application/json': { schema: rest_1.getModelSchemaRef(models_1.ResumenDeVenta) },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ResumenDeVenta, {
                    title: 'NewResumenDeVenta',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/resumenDeVentas/count', {
        responses: {
            '200': {
                description: 'ResumenDeVenta model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ResumenDeVenta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/resumenDeVentas', {
        responses: {
            '200': {
                description: 'Array of ResumenDeVenta model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ResumenDeVenta, {
                                includeRelations: true,
                            }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ResumenDeVenta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/ResumendeVentaProductos/{fecha1}/{fecha2}', {
        responses: {
            '200': {
                description: 'Resumen de venta Aggregate',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.ResumenDeVenta } },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.date('fecha1')),
    tslib_1.__param(1, rest_1.param.path.date('fecha2')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Date,
        Date]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "ResumendeVentaProductos", null);
tslib_1.__decorate([
    rest_1.patch('/resumenDeVentas', {
        responses: {
            '200': {
                description: 'ResumenDeVenta PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ResumenDeVenta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ResumenDeVenta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ResumenDeVenta, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/resumenDeVentas/{id}', {
        responses: {
            '200': {
                description: 'ResumenDeVenta model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ResumenDeVenta, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ResumenDeVenta, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/resumenDeVentas/{id}', {
        responses: {
            '204': {
                description: 'ResumenDeVenta PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ResumenDeVenta, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ResumenDeVenta]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/resumenDeVentas/{id}', {
        responses: {
            '204': {
                description: 'ResumenDeVenta PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ResumenDeVenta]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/resumenDeVentas/{id}', {
        responses: {
            '204': {
                description: 'ResumenDeVenta DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ResumenDeVentaController.prototype, "deleteById", null);
ResumenDeVentaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ResumenDeVentaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ResumenDeVentaRepository])
], ResumenDeVentaController);
exports.ResumenDeVentaController = ResumenDeVentaController;
//# sourceMappingURL=resumen-de-venta.controller.js.map