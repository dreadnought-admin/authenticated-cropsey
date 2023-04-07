class MusicPostSerializer < ActiveModel::Serializer
  attributes :id, :album_cover, :title, :record_label, :release_date, :description, :spotify_link, :bandcamp_link
end
