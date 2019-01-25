import { Entity } from '@loopback/repository';
export declare class Test extends Entity {
    _id?: string;
    stringProperty?: string;
    numberProperty?: number;
    booleanProperty?: boolean;
    objectProperty?: object;
    arrayProperty?: string[];
    createdAt?: string;
    constructor(data?: Partial<Test>);
}
