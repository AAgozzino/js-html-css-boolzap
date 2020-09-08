$(document).ready(function(){
  $("#user-message").keyup(
    function(sendMessage){
      if (sendMessage.which == 13) {
        var textNewMessage = $("#user-message").val();

        if (textNewMessage.length > 0) {
          var newMessage = $(".template-sent .chat-baloon").clone();
          $(".chat").append(newMessage);
          $(newMessage).children(".text-message").append(textNewMessage);
          $("#user-message").val("");
        }
      }
    }
  );

});
