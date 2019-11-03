const sinon = require('sinon');
let myFunction = require('../file1');
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


});