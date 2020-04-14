"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrdenController = class OrdenController {
    constructor(ordenRepository) {
        this.ordenRepository = ordenRepository;
    }
    async create(orden) {
        return this.ordenRepository.create(orden);
    }
    async count(where) {
        return this.ordenRepository.count(where);
    }
    async find(filter) {
        return this.ordenRepository.find(filter);
    }
    async updateAll(orden, where) {
        return this.ordenRepository.updateAll(orden, where);
    }
    async findById(id, filter) {
        return this.ordenRepository.findById(id, filter);
    }
    async updateById(id, orden) {
        await this.ordenRepository.updateById(id, orden);
    }
    async replaceById(id, orden) {
        await this.ordenRepository.replaceById(id, orden);
    }
    async deleteById(id) {
        await this.ordenRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/ordenes', {
        responses: {
            '200': {
                description: 'Orden model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Orden) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orden, {
                    title: 'NewOrden',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/ordenes/count', {
        responses: {
            '200': {
                description: 'Orden model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Orden)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/ordenes', {
        responses: {
            '200': {
                description: 'Array of Orden model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Orden, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Orden)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/ordenes', {
        responses: {
            '200': {
                description: 'Orden PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orden, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Orden)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Orden, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/ordenes/{id}', {
        responses: {
            '200': {
                description: 'Orden model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Orden, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Orden, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/ordenes/{id}', {
        responses: {
            '204': {
                description: 'Orden PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Orden, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Orden]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/ordenes/{id}', {
        responses: {
            '204': {
                description: 'Orden PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Orden]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/ordenes/{id}', {
        responses: {
            '204': {
                description: 'Orden DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenController.prototype, "deleteById", null);
OrdenController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrdenRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrdenRepository])
], OrdenController);
exports.OrdenController = OrdenController;
//# sourceMappingURL=orden.controller.js.map