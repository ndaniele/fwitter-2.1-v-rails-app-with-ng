Rails.application.routes.draw do
  devise_for :users

  resources :users, only: [:show, :edit]

  resources :tweets, only: [:create, :destroy, :update, :index, :show]
  post 'tweets/:id/re_tweet', to: 'tweets#re_tweet'
  post 'tweets/:id/love_tweet', to: 'tweets#love_tweet'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
