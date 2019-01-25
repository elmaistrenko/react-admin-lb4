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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Test = class Test extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Test.prototype, "_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Test.prototype, "stringProperty", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Test.prototype, "numberProperty", void 0);
__decorate([
    repository_1.property({
        type: 'boolean'
    }),
    __metadata("design:type", Boolean)
], Test.prototype, "booleanProperty", void 0);
__decorate([
    repository_1.property({
        type: 'object',
    }),
    __metadata("design:type", Object)
], Test.prototype, "objectProperty", void 0);
__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    __metadata("design:type", Array)
], Test.prototype, "arrayProperty", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", String)
], Test.prototype, "createdAt", void 0);
Test = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=test.model.js.map