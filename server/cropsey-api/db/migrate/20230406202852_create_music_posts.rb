class CreateMusicPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :music_posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :album_cover
      t.string :title
      t.string :record_label
      t.string :release_date
      t.string :description
      t.string :spotify_link
      t.string :bandcamp_link

      t.timestamps
    end
  end
end
