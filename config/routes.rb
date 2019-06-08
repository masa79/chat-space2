Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]   # indexアクション、editアクション、updateアクションが実行されるときのみuserコントローラーを動かす
  resources :groups, only: [:new, :create, :edit, :update] do   # newアクション、createアクション、editアクション、updateアクションが実行されるときのみgroupsコントローラーを動かす
    resources :messages, only: [:index, :create]   # groupsコントローラーの入れ子のmessagesコントローラーを置き、indexアクション、createアクションが実行されるときのみmessagesコントローラーを動かす
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end