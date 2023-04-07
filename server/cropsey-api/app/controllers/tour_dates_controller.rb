class TourDatesController < ApplicationController
    skip_before_action :require_login, only: [:index, :show, :create, :destroy, :update]
    wrap_parameters format:[]

    def index
        render json: TourDate.all.order(date: :asc)
    end 

    def show
        render json: find_tour_date
    end

    def create
        tour = TourDate.create(tour_params)
        render json: tour, status: :ok
    end 

    def update
        tour = find_tour_date
        if tour.update(tour_params)
            render json: tour
        else 
            render json: tour.errors, status: :unprocessable_entity
        end 
    end 

    def destroy
        tour = find_tour_date
        tour.destroy
        head :no_content
    end 

    private

    def find_tour_date
        tour_date = TourDate.find(params[:id])
    end 

    def tour_params
        params.permit(:user_id, :venue, :city, :state, :country, :time, :date, :ticket_link, :rsvp_link, :image)
    end 

end
