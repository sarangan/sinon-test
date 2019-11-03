const sinon = require('sinon');
const assert = require('chai').assert;
let saveUser = require('../file3');
const request = require('request');

describe('saveuser', function(){

    it('should call callback after saving', function(){

        let sinon_post = sinon.stub(request, 'post');

        sinon_post.yields();

        let callback = sinon.spy();

        saveUser({
            firstname: "sara",
            lastname: "k"
        }, callback);

        sinon_post.restore();

        sinon.assert.calledOnce(callback);
        
    });
});