Rails.application.routes.draw do
  root 'root#index'
  namespace :api do
    get '/random-greeting', to: 'greetings#random_greeting'
  end
end