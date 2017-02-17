var apiKey = require('./../.env').apiKey;
var GitUser = require('./../js/script.js').gitModule;
var username = "";
var displayRealName = function(description, name) {
  $('#output').append("<p>The description is: " + description + " and the name is " + name + "</p>");
// var displayDescription = function(username, description) {
//   $('#output2').text(description);
};


$(document).ready(function() {
  $('#git-user-id').click(function(event) {
    event.preventDefault();
  var currentUser = new GitUser();
  username = $('#userId').val();
  $('#userId').val("");

  currentUser.displayUser(username, displayRealName);
  });
});
  // $('#btn').click(function(event) {
  //   event.preventDefault();
  //   username = $('#email').val();

    //   var output = $('#email').val();
    //
    //   console.log(output);
    //   $('#output').text("");
    //   $('#output').text("my email is " + output);
    //   });
    // });
