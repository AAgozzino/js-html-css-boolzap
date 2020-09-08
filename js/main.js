$(document).ready(function(){
  $("#user-message").keyup(
    function(sendMessage){
      if (sendMessage.which == 13) {
        var textNewMessage = $("#user-message").val();
        console.log(textNewMessage);
        var newMessage = $(".template .chat-baloon").clone();
        $(".chat").append(newMessage);
        $(newMessage).children(".text-message").append(textNewMessage);
        console.log(newMessage);
        $("#user-message").val("");
      }
    }
  );

});
