class AddFacultyToBooks < ActiveRecord::Migration
  def change
    add_column :books, :faculty, :string
  end
end
