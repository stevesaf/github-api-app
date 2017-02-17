var apiKey = require('./../.env').apiKey;
var reply = "";

function GitUser() {}

GitUser.prototype.displayUser = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    reply = response;
    var projectnumber = reply.length;
    for (var i = 0; i<projectnumber; i++) {
      displayFunction(reply[i].description, reply[i].name);
    }
  }).
  fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = GitUser;
