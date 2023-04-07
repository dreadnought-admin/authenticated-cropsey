class TourDateSerializer < ActiveModel::Serializer
  attributes :id, :image, :venue, :city, :state, :country, :time, :date,
  :ticket_link, :rsvp_link
end