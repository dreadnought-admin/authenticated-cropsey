
# class ApplicationController < ActionController::API

#     def jwt_key
#         Rails.application.credentials.jwt_key
#     end

#     def issue_token(user)
#         JWT.encode({user_id: user.id}, jwt_key, "HS256")
#     end

#     def decoded_token
#         begin
#             JWT.decode(token, jwt_key, true, { :algorithm => 'HS256' })
#         rescue => exception
#             [{error: "Invalid Token"}]
#         end    
#     end
    
#     def token
#         request.headers["Authorization"]
#     end

#     def user_id
#         decoded_token.first["user_id"]
#     end

#     def current_user
#         user ||= User.find_by(id: user_id)
#     end

#     def logged_in?
#         !!current_user
#     end
    
# end

class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    before_action :require_login

    def encode_token(payload)
        JWT.encode(payload, 'my_secret')
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, 'my_secret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                []
            end
        end
    end

    def session_user
        decoded_hash = decoded_token
        if !decoded_hash.empty? 
            puts decoded_hash.class
            user_id = decoded_hash[0]['user_id']
            @user = User.find_by(id: user_id)
        else
            nil 
        end
    end

    def logged_in?
        !!session_user
    end

    def require_login
     render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
    end

    private

    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end  

end
