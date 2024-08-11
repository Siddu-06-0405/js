// first

// importing module with legacyAssertion mode
const assert = require('node:assert');

console.log(assert.deepEqual([[[1,2,3],4,5]],[[[1,2,'3'],4,5]]))//undefined
// WARNING: This does not throw an AssertionError in legacy assertion mode!
assert.deepEqual(/a/gi, new Date());
// assert.equal(/a/gi, new Date());
// assert.strictEqual(/a/gi, new Date());
// assert.throws(() => {}); // throws a TypeError in strict mode, but not in legacy
// assert.notDeepEqual(/a/gi, new Date());
// assert.notEqual(/a/gi, new Date());