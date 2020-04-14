"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ResumenDeVenta = class ResumenDeVenta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], ResumenDeVenta.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        jsonSchema: {
            format: 'date',
        },
    }),
    tslib_1.__metadata("design:type", String)
], ResumenDeVenta.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ResumenDeVenta.prototype, "total", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], ResumenDeVenta.prototype, "productos", void 0);
ResumenDeVenta = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ResumenDeVenta);
exports.ResumenDeVenta = ResumenDeVenta;
//# sourceMappingURL=resumen-de-venta.model.js.map