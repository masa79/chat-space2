class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]

  def index
  end

  def new
    @group = Group.new   # Groupモデルの新しいインスタンス
    @group.users << current_user   # ログイン中のユーザーを新規作成したグループに追加する記述
  end

  def create
    @group = Group.new(group_params)   # group_paramsを引数としたGroupクラスのインスタンス変数を@groupに代入
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new   # renderを使用することでHTTPリクエストを送らず該当のビューのみを表示させる
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private   # これ以降に記載しているメソッドはクラスの外部から呼び出せなくなる
  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
