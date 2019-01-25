const lb4Provider = require('../babel').default;
const fetch = require('node-fetch');
const _ = require('lodash');
const assert = require('chai').assert;
const { spawn } = require('child_process');

const lb4 = spawn('node', ['test/lb4']);

const provider = lb4Provider('http://localhost:3000', '_id', 'id', fetch);

describe('react-admin-lb4', () => {
    let resolve;
    const allP = new Promise(r => resolve = r);
    describe('#CREATE', () => {
        it ('creates tests', async () => {
            await new Promise(r => setTimeout(r, 2000));
            const r = [];
            for (let i = 0; i < 25; i++) {
                const date = new Date();
                const data = {
                    numberProperty: i,
                    stringProperty: 'str' + 10 * i,
                    objectProperty: {
                        foo: 'bar' + i,
                        bar: 'foo' + i
                    },
                    arrayProperty: ['barArr' + i, 'fooArr' + i],
                    booleanProperty: !!(i % 2),
                    createdAt: date
                };
                data.createdAt = date.toISOString();
                const obj = await provider('CREATE', 'tests', { data });
                r.push(obj.data);
                assert(_.isEqual(_.omit(obj.data, ['id']), data), `item #${i} created`);

            }
            resolve(r);
        });
        it('creates test references', async () => {
            const all = await allP;
            for (const item of all) {
                const id = item.id;
                for (let i = 0; i < 3; i++) {
                    const data = {
                        test_id: id
                    };
                    const obj = await provider('CREATE', 'test-references', { data });
                    assert(_.isEqual(_.omit(obj.data, ['id']), data), `reference #${id}-${i} created`);
                }
            }
        });

    });
    describe ('#GET_ONE', () => {
        it ('gets item', async () => {
            const all = await allP;
            const i = 3;
            const data = all[i];
            const obj = await provider('GET_ONE', 'tests', {
                id: data.id
            });
            assert(_.isEqual(data, obj.data), 'response is correct');
        });
    });
    describe ('#GET_LIST', () => {
        it ('gets some page', async () => {
            const response = await provider('GET_LIST', 'tests', {
                pagination: {
                    page: 2,
                    perPage: 5
                },
                sort: {
                    field: 'id',
                    order: 'ASC'
                }
            });
            assert(response.total === 25, 'res contains total field');
            assert(response.data.length === 5, '5 items per page');
            ['6', '7', '8', '9', '10'].forEach(id => {
                assert(response.data.find(el => el.id === id), 'right items');
            });
        });
    });
    describe ('#UPDATE', () => {
        it ('updates an item', async () => {
            const all = await allP;
            const item = all[8];
            item.numberProperty = 999;
            item.stringProperty = 'foobarbaz';
            const response = await provider('UPDATE', 'tests', {
                id: item.id,
                data: {
                    numberProperty: item.numberProperty,
                    stringProperty: item.stringProperty
                }
            });
            assert(_.isEqual(response.data, item), 'correctly updates');
        });
    });

    describe ('#UPDATE_MANY', () => {
        it ('updates items', async () => {
            const all = await allP;
            const items = [all[10], all[11], all[12]];
            for (const item of items) {
                item.numberProperty = 9991;
                item.stringProperty = 'foobarbaz1';
            }
            const ids = items.map(item => item.id);
            const response = await provider('UPDATE_MANY', 'tests', {
                ids,
                data: {
                    numberProperty: 9991,
                    stringProperty: 'foobarbaz1'
                }
            });

            const updated = await provider('GET_LIST', 'tests', {
                filter: {
                    _id: {
                        inq: ids
                    }
                }
            });
            assert(_.isEqual(updated.data, items), 'correctly updates');
            assert(_.isEqual(response.data, ids), 'returns correct result');
        });
    });

    describe ('#DELETE', () => {
        it ('deletes an item', async () => {
            const all = await allP;
            const item = all[23];

            const response = await provider('DELETE', 'tests', {
                id: item.id
            });
            assert(_.isEqual(response.data, item), 'returns correct result');
            let error = false;
            try {
                await provider('GET_ONE', 'tests', {
                    id: item.id
                });
            } catch (e) {
                error = true;
            }
            assert(error, 'throws error')
        });
    });

    describe ('#GET_MANY', () => {
        it ('gets items by ids', async () => {
            const all = await allP;
            const items = [all[10], all[11], all[12]];
            const ids = items.map(i => i.id);
            const response = await provider('GET_MANY', 'tests', {
                ids
            });
            assert(_.isEqual(response.data, items), 'returns correct result');
        });
    });

    describe ('#DELETE_MANY', () => {
        it ('deletes items', async () => {
            const all = await allP;
            const items = [all[13], all[14], all[15]];
            const ids = items.map(i => i.id);
            const response = await provider('DELETE_MANY', 'tests', {
                ids
            });
            assert(_.isEqual(response.data, ids), 'returns correct result');
            const deleted = await provider('GET_MANY', 'tests', {
                ids
            });
            assert(deleted.data.length === 0, 'items not found');
        });
    });

    describe ('#GET_MANY_REFERENCES', () => {
        it ('gets references', async () => {
            const all = await allP;
            const item = all[5];
            const response = await provider('GET_MANY_REFERENCES', 'test-references', {
                target: 'test_id',
                id: item.id
            });
            assert(_.isEqual(response.data.map(i => i.test_id), [item.id, item.id, item.id]), 'returns correct result');
        });
    });

    after(() => {
        lb4.kill();
    });
});

/*(async () => {
    for (let i = 0; i < 10; i++) {
        const date = new Date();
        const data = {
            numberProperty: i,
            stringProperty: 'str' + 10 * i,
            objectProperty: {
                foo: 'bar' + i,
                bar: 'foo' + i
            },
            arrayProperty: ['barArr' + i, 'fooArr' + i],
            booleanProperty: !!(i % 2),
            createdAt: date
        };
        const obj = await provider('CREATE', 'tests', { data });
        //data.createdAt = date.toISOString();
        //_.isEqual(response, data);
        for (let i = 0; i < 10; i++) {
            const data = {
                test_id: obj.data.id
            };
            await provider('CREATE', 'test-references', { data })
        }
    }

    await provider('GET_ONE', 'tests', {
        id: '1'
    })

    await provider('GET_LIST', 'tests', {
        pagination: {
            page: 2,
            perPage: 10
        },
        filter: {
            numberProperty: 5
        }
    })

    await provider('UPDATE', 'tests', {
        id: '1',
        data: {
            numberProperty: 99996
        }
    })
    await provider('UPDATE_MANY', 'tests', {
        ids: [ '2', '3' ],
        data: {
            numberProperty: 99997
        }
    })

    await provider('DELETE', 'tests', {
        id: '3'
    })

    await provider('DELETE_MANY', 'tests', {
        ids: ['4', '5', '6', '7']
    })

    await provider('GET_MANY', 'tests', {
        ids: ['8', '9', '10']
    })

    console.log(await provider('GET_MANY_REFERENCE', 'test-references', {
        target: 'test_id',
        id: '262'
    }))
})();*/
