Rails.application.routes.draw do
  # post "/signup", to: "users#create"
  # post "/login", to: "sessions#create"

  # get "/authorized", to: "sessions#show"
  # get "/dashboard", to: "users#show"

  
    resource :users, only: [:create]
    post "/login", to: "sessions#login"
    get "/auto_login", to: "sessions#auto_login"
    get "/user_is_authed", to: "sessions#user_is_authed"
  
  
end
