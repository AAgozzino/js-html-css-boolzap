$(document).ready(function(){
  // Send message pushing enter
  $("#user-message").keyup(
    function(){
      if (event.which == 13) {
        sendMessage();
      }
    }
  );

  // Send message by click icon
  $("#send-message").click(
    function(){
      sendMessage();
    }
  )
});

$("#search-connection").keyup(
  function () {
    var toSearch = $("#search-connection").val();
    console.log(toSearch);
    $(".profile-info .profile-name").each(function(){
      var match = $(this).text().toLowerCase();
      console.log($(this));
      console.log(match);
      if (match.indexOf(toSearch) != -1) {
        $(this).parents(".connections-list-item").show();
        console.log(match.indexOf(toSearch) != -1);
      }
      else {
        $(this).parents("connections-list-item").hide();
      }
    })
  }
);
// FUNCTION - Message Sent + Auto answer
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
