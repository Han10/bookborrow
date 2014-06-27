class User < ActiveRecord::Base

has_many :books

 attr_accessible :email, :pass, :password_confirmation, :dof, :first_name, :last_name, :gender

validates :first_name, presence: true
validates :last_name, presence: true
validates :email, presence: true, uniqueness: true
validates :gender, presence: true
validates :pass, presence: true
validates :password_confirmation, presence: true


end
