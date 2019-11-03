const sinon = require('sinon');
let myFunction = require('../file1');
let dim = require('../file2');
const assert = require('chai').assert;

describe('myfunction', function(){

    this.afterEach(()=>{
        sinon.restore();
    });
    
    it("should call the callback function", function(){
        let callback = sinon.spy();
        myFunction(true, callback);
        assert(callback.calledOnce);
        sinon.assert.calledOnce(callback);
    });

    it('should return 12 from function', function(){
        let spies = sinon.spy(dim, 'myFunction2');

        dim.myFunction2();
        console.log(spies.callCount);
        console.log(spies.returnValues[0]);

        assert.equal(spies.returnValues[0], 12);
    });


});