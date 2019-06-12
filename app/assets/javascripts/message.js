$(function(){

  function buildHTML(message){

    var image = (message.image) ? `<img src="${message.image}">` : "";

    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.user_name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${ message.content }
                    </p>
                    ${image}
                  </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    $('.form__submit').removeAttr('data-disable-with');
    var formData = new FormData(this);
    var href = window.location.href

    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    });
  });

  $(function(){
  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("id");

    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {
        id: last_message_id
      }
    })

    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
      })
      $('.form__message').val();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error');
    })
  };
  };
  setInterval(reloadMessages, 5000);
 });
});