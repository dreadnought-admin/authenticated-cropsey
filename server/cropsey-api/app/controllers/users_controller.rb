# class UsersController < ApplicationController
    
#     def create
#         user = User.new(user_params)

#         if user.save 
#             token = issue_token(user)
#             render json: {user: UserSerializer.new(user), jwt: token}
#         else 
#             if user.errors.messages
#                 render json: {error: user.errors.messages}
#             else 
#                 render json: {error: "User could not be created. Try again."}
#             end 
#         end 
#     end 

#     private

#     def user_params
#         params.require(:user).permit(:username, :password, :age)
#     end 

# end

class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create]
    def create
      user = User.create(user_params) 
      if user.valid?
          payload = {user_id: user.id}
          token = encode_token(payload)
          puts token
          render json: {user: user, jwt: token}
      else
          render json: {errors: user.errors.full_messages}, status: :not_acceptable
      end
    end
  
    private 
  
    def user_params
      params.permit(:username, :password)
    end
  end
  
