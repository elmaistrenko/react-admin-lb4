"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TestReferenceControllerController = class TestReferenceControllerController {
    constructor(testReferenceRepository) {
        this.testReferenceRepository = testReferenceRepository;
    }
    async create(testReference) {
        return await this.testReferenceRepository.create(testReference);
    }
    async count(where) {
        return await this.testReferenceRepository.count(where);
    }
    async find(filter) {
        return await this.testReferenceRepository.find(filter);
    }
    async updateAll(testReference, where) {
        return await this.testReferenceRepository.updateAll(testReference, where);
    }
    async findById(id) {
        return await this.testReferenceRepository.findById(id);
    }
    async updateById(id, testReference) {
        await this.testReferenceRepository.updateById(id, testReference);
    }
    async replaceById(id, testReference) {
        await this.testReferenceRepository.replaceById(id, testReference);
    }
    async deleteById(id) {
        await this.testReferenceRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/test-references', {
        responses: {
            '200': {
                description: 'TestReference model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.TestReference } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.TestReference]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "create", null);
__decorate([
    rest_1.get('/test-references/count', {
        responses: {
            '200': {
                description: 'TestReference model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.TestReference))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "count", null);
__decorate([
    rest_1.get('/test-references', {
        responses: {
            '200': {
                description: 'Array of TestReference model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.TestReference } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.TestReference))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "find", null);
__decorate([
    rest_1.patch('/test-references', {
        responses: {
            '200': {
                description: 'TestReference PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.TestReference))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.TestReference, Object]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/test-references/{id}', {
        responses: {
            '200': {
                description: 'TestReference model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.TestReference } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "findById", null);
__decorate([
    rest_1.patch('/test-references/{id}', {
        responses: {
            '204': {
                description: 'TestReference PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.TestReference]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "updateById", null);
__decorate([
    rest_1.put('/test-references/{id}', {
        responses: {
            '204': {
                description: 'TestReference PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.TestReference]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/test-references/{id}', {
        responses: {
            '204': {
                description: 'TestReference DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestReferenceControllerController.prototype, "deleteById", null);
TestReferenceControllerController = __decorate([
    __param(0, repository_1.repository(repositories_1.TestReferenceRepository)),
    __metadata("design:paramtypes", [repositories_1.TestReferenceRepository])
], TestReferenceControllerController);
exports.TestReferenceControllerController = TestReferenceControllerController;
//# sourceMappingURL=test-reference-controller.controller.js.map