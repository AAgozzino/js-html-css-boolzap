$(document).ready(function(){
  // Send message by pushing enter
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
  );

  // Active chat connection
  $(".connections-list-item").click(
    function(){
      $(".connections-list-item").removeClass("active");
      $(this).addClass("active");

      // Switch connection name chat active
      var connectionName = $(this).find(".profile-name").text();
      // console.log(connectionName);
      $(".box-right .header .profile-name").text(connectionName);

      // Switch img profile chat active
      var imgChatActive = $(".box-right .header img");
      var connectionImg = $(this).find("img").clone();
      imgChatActive.replaceWith(connectionImg);
      // console.log(imgChatActive);
      // console.log(connectionImg);

      // Switch chat active
      var connectionIndex = $(this).attr("data-connection");
      // console.log(connectionIndex);
      $(".chat").each(
        function(){
          var chatIndex = $(this).attr("data-chat");
          // console.log(chatIndex.conversazione);
          // console.log(connectionIndex);
          if (chatIndex == connectionIndex) {
            $(".chat").removeClass("active");
            $(this).addClass("active");
          }
        }
      );

      // Switch time last access

      var lastAccessActive = $(this).find("connection-last-time");
      // console.log(lastAccessActive);
      var conncectionLastAccess = $(".chat.active .chat-baloon:last-child .message-time").text();
      // console.log(conncectionLastAccess);
      lastAccessActive.text(conncectionLastAccess);
      $(".box-right .header .last-time").text(lastAccessActive);
      // changeAccessTime();
    }

  );

  // Connection profile time last access

  // Search connection
  $("#search-connection").keyup(
    function () {
      var toSearch = $("#search-connection").val().toLowerCase();
      $(".profile-info .profile-name").each(
        function(){
          var match = $(this).text().toLowerCase();
          if (match.indexOf(toSearch) != -1) {
            $(this).parents(".connections-list-item").show();
          }
          else {
            $(this).parents(".connections-list-item").hide();
          }
        }
      )
    }
  );

  // Open dropdown-menu
  $(document).on("click", ".baloon-text i",
    function() {
      $(this).parent().siblings(".baloon-dropdownmenu").toggle();
    }
  );

  // Delete message
  $(document).on("click", ".baloon-dropdownmenu .delete",
    function() {
      $(this).parents(".chat-baloon").remove();
    }
  );

});

// FUNCTION - Message Sent + Auto answer
function sendMessage() {
  var textNewMessage = $("#user-message").val();

  if (textNewMessage.length > 0) {
    var newMessage = $(".template .chat-baloon").clone();
    newMessage.find(".text-message").append(textNewMessage);
    newMessage.find(".message-time").append(time());
    newMessage.addClass("sent");
    $(".chat.active").append(newMessage);
    $("#user-message").val("");
  }

  $(".profile-last-access").hide();
  $(".is-writing").show();
  setTimeout(function(reply){
    var replyText = "Ok";
    var replyMessage = $(".template .chat-baloon").clone();
    replyMessage.find(".text-message").append(replyText);
    replyMessage.addClass("recieved");
    replyMessage.find(".message-time").append(time());
    $(".chat.active").append(replyMessage);
    // changeAccessTime();
    $(".profile-last-access").show();
    $(".is-writing").hide();
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
