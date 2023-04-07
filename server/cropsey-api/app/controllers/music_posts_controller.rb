class MusicPostsController < ApplicationController
    skip_before_action :require_login, only: [:index, :show]
    wrap_parameters format:[]

    def index
        render json: MusicPost.all.order(release_date: :asc)
    end 

    def show
        render json: find_music_post
    end 

    def limit_post
        render json: MusicPost.limit(10)
    end

    private

    def find_music_post
        music_post = MusicPost.find(params[:id])
    end

end
