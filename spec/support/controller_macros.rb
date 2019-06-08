module ControllerMacros
  def login(user)   # loginメソッドの定義
    @request.env["devise.mapping"] = Devise.mappings[:user]
    sign_in user
  end
end