class CreateNewsPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :news_posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
