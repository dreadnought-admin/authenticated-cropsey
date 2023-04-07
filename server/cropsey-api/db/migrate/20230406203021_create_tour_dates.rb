class CreateTourDates < ActiveRecord::Migration[7.0]
  def change
    create_table :tour_dates do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :image, default: nil
      t.string :venue
      t.string :city
      t.string :state
      t.string :country
      t.string :time
      t.date :date, format: :long
      t.string :ticket_link
      t.string :rsvp_link, default: nil

      t.timestamps
    end
  end
end
