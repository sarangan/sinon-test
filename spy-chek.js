let sinon = require('sinon');

let spy = sinon.spy();

spy('Hello', "World");

console.log(spy.firstCall.args);
console.log(spy.callCount);

let user = {
    setName: function(name){
        this.name = name;
    }
};

let setNameSpy = sinon.spy(user, 'setName');

user.setName('sara');

console.log(setNameSpy.callCount);
console.log(setNameSpy.firstCall.args);

setNameSpy.restore();