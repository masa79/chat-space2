json.user_id    @message.user.id
json.content    @message.content
json.image      @message.image.url
json.user_name  @message.user.name
json.time       @message.created_at.to_s