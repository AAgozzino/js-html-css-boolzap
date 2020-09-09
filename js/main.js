$(document).ready(function(){
  $("#user-message").keyup(
    function(event){
      if (event.which == 13) {
        sendMessage();
      }
    }
  );

  $("#send-message").click(
    function(){
      sendMessage();
    }
  )
});

// FUNCTION - Message Sent


function sendMessage() {
  var textNewMessage = $("#user-message").val();

  if (textNewMessage.length > 0) {
    var newMessage = $(".template .chat-baloon").clone();
    newMessage.children(".text-message").append(textNewMessage);
    newMessage.children(".message-time").append(time());
    newMessage.addClass("sent");
    $(".chat").append(newMessage);
    $("#user-message").val("");
  }

  setTimeout(function(reply){
    var replyText = "Ok";
    var replyMessage = $(".template .chat-baloon").clone();
    replyMessage.children(".text-message").append(replyText);
    replyMessage.addClass("recieved");
    replyMessage.children(".message-time").append(time());
    $(".chat").append(replyMessage);
  }, 1000);
};

function time(){
  var date = new Date();
  var hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes
};
