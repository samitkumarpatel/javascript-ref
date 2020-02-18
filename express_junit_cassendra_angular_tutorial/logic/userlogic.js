
module.exports = function userlogicModule(option){
    option = option || {};
    
    if(!option.service){
        option.service = require('../service/userservice');
    }

    return {
        getUsers : function(callback) {
            option.service.getUsers(function(err,results){ 
                if(err){
                    throw err;
                }
                results[0].uid = results[0].uid+'samit@org';
                callback(err,results);
            });
        }

    };
};
