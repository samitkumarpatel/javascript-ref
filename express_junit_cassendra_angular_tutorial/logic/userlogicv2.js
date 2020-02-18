module.exports = function userModule(option){
    option = option || {};
    var x = 'samit';

    if(!option.User){
       option.User = require('./user'); 
    }

    return {
        getName : function(name){
            if(!name){
               return x; 
            }else{
                return name;
            }
        },
        getUserList : function(callback){
            option.User.getAll(function(result){
                callback(result);
            });
        }
    };
};