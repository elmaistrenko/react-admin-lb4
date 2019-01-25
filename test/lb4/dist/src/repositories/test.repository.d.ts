import { DefaultCrudRepository } from '@loopback/repository';
import { Test } from '../models';
import { TestDataSource } from '../datasources';
export declare class TestRepository extends DefaultCrudRepository<Test, typeof Test.prototype._id> {
    constructor(dataSource: TestDataSource);
}
