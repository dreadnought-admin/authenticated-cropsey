class SessionsController < ApplicationController

    # def create
    #     user = User.find_by(username: params[:username])

    #     if user && user.authenticate(session_params[:password])
    #         token = issue_token(user)
    #         render json: {user: UserSerializer.new(user), jwt: token}
    #     else 
    #         render json: {error: "Incorrect username or password"}
    #     end 
    # end 

    # def show
    #     if logged_in?
    #         render json: current_user
    #     else
    #         render json: {error: "User could not be found."}
    #     end 
    # end 


    # private

    # def session_params
    #     params.require(:session).permit(:username, :password)
    # end 

    skip_before_action :require_login, only: [:login, :auto_login]
  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
        payload = {user_id: user.id}
        token = encode_token(payload)
        render json: {user: user, jwt: token, success: "Welcome back, #{user.username}"}
    else
        render json: {failure: "Log in failed! Username or password invalid!"}
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: {errors: "No User Logged In"}
    end
  end

  def user_is_authed
    render json: {message: "You are authorized"}
  end
end
