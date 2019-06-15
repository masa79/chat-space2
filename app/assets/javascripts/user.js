$(document).on('turbolinks:load', function() {

$(function() {

  var search_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div id='user-search-result'>${ msg }</div>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();
  
    $.ajax({
      type: 'GET',
      url: '/users/',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致する名前はありません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました')
    })
  });

  var add_name_list = $("#chat-group-user")

  function appendUserNameAdd(user_name, user_id) {
    var html = `<div class='chat-group-user clearfix' id='chat-group-user-space'>
                <input name='group[user_ids][]' type='hidden' value='${user_id}' class="chat-group-user__selected_user_id">
                <p class='chat-group-user__name'>${user_name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
    add_name_list.append(html);
  }

  $("#user-search-result").on("click", ".chat-group-user__btn--add", function() {
    var user_name = $(this).data("user-name");
    var user_id = $(this).data("user-id");
    $(this).parent().remove();
    appendUserNameAdd(user_name, user_id)
  });

  $('#chat-group-user').on("click",".chat-group-user__btn--remove", function() {
    $(this).parent().remove();
  })
});
});