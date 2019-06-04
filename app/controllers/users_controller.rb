class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to :root_path          # もし保存できた場合rootにリダイレクト
    else
      render :edit   #もし保存できなかった場合はeditビューを再度描画する
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
