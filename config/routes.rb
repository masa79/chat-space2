Rails.application.routes.draw do
  devise_for :users
  get 'messages' => 'messages#index'
  resources :users, only: [:edit, :update]   # editアクション、updateアクションが実行されるときのみuserコントローラーを動かす
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
