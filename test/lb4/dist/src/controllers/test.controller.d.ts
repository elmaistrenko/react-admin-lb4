import { Count, Filter, Where } from '@loopback/repository';
import { Test } from '../models';
import { TestRepository } from '../repositories';
export declare class TestController {
    testRepository: TestRepository;
    constructor(testRepository: TestRepository);
    create(test: Test): Promise<Test>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Test[]>;
    updateAll(test: Test, where?: Where): Promise<Count>;
    findById(id: string): Promise<Test>;
    updateById(id: string, test: Test): Promise<void>;
    deleteById(id: string): Promise<void>;
}
