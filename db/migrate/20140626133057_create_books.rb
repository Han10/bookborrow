class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|

      t.string :title
      t.text :description
      t.attachment :thumbnail
      t.string :email, :references => User

      t.timestamps
    end
  end
end
