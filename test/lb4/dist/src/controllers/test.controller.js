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
let TestController = class TestController {
    constructor(testRepository) {
        this.testRepository = testRepository;
    }
    async create(test) {
        return await this.testRepository.create(test);
    }
    async count(where) {
        return await this.testRepository.count(where);
    }
    async find(filter) {
        return await this.testRepository.find(filter);
    }
    async updateAll(test, where) {
        return await this.testRepository.updateAll(test, where);
    }
    async findById(id) {
        return await this.testRepository.findById(id);
    }
    async updateById(id, test) {
        await this.testRepository.updateById(id, test);
    }
    async deleteById(id) {
        await this.testRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/tests', {
        responses: {
            '200': {
                description: 'Test model instance',
                content: { 'application/json': { 'x-ts-type': models_1.Test } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Test]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "create", null);
__decorate([
    rest_1.get('/tests/count', {
        responses: {
            '200': {
                description: 'Test model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Test))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "count", null);
__decorate([
    rest_1.get('/tests', {
        responses: {
            '200': {
                description: 'Array of Test model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Test } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Test))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "find", null);
__decorate([
    rest_1.patch('/tests', {
        responses: {
            '200': {
                description: 'Test PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Test))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Test, Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/tests/{id}', {
        responses: {
            '200': {
                description: 'Test model instance',
                content: { 'application/json': { 'x-ts-type': models_1.Test } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "findById", null);
__decorate([
    rest_1.patch('/tests/{id}', {
        responses: {
            '204': {
                description: 'Test PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Test]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "updateById", null);
__decorate([
    rest_1.del('/tests/{id}', {
        responses: {
            '204': {
                description: 'Test DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "deleteById", null);
TestController = __decorate([
    __param(0, repository_1.repository(repositories_1.TestRepository)),
    __metadata("design:paramtypes", [repositories_1.TestRepository])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map