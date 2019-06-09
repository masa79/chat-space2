$(function(){

  function buildHTML(message){

    var image = ""
    message.image ? image = `<img src="${message.image}">` : image = ""

    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.user_name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.time }
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
      $('.form__message').val('')
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    });
  });
});