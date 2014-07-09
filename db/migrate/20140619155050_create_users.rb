class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :pass
      t.string :password_confirmation
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.date :dof

      t.timestamps
    end

    add_index :users, :email,                unique: true
  end
end
