Rails.application.routes.draw do
  resources :characters
  resources :monsters, only: [:index, :show, :destroy]
  resources :teams

  # post '/signup', to: 'users#create'
  # get '/me', to: 'users#show'
  # get '/users', to: 'users#index'
  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'

  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
