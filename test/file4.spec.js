const g = require('../file4');
var sandbox = require('sinon').createSandbox();
const assert = require('chai').assert;

describe('myfunction', function(){

    this.afterEach(()=>{
        sandbox.restore();
    });
    
    it("should call add", function(){
        sandbox.stub(g, "add").returns(10);
        const a = g.add(3, 2);
        assert.equal(a, 10)
    });

});