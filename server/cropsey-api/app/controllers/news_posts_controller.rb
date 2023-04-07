class NewsPostsController < ApplicationController
    skip_before_action :require_login
    wrap_parameters format:[]

    def index
        render json: NewsPost.all
    end

    def show
        render json: find_news_post
    end 

    private

    def find_news_post
        news_post = NewsPost.find(params[:id])
    end 

end
