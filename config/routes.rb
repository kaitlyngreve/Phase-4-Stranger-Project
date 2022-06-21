Rails.application.routes.draw do
  resources :characters, only: [:index, :show, :update]
  resources :monsters, only: [:index, :show, :destroy]
  resources :teams, only: [:index, :show, :create, :destroy]
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
