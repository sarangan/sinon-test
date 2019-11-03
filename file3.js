const request = require('request');

function saveuser(user, callback){
    request.post('/users', {
        fistname: user.firstname,
        lastname: user.lastname
    }, function(error, response, body){
        if(error){
            throw Error("i dont know!!!");
        }

        // return body;
        callback(body);

    });
}

module.exports = saveuser;