class User < ActiveRecord::Base

has_many :books

 attr_accessible :email, :pass, :password_confirmation, :dof, :first_name, :last_name, :gender

validates :first_name, presence: true, format: {with: /[a-zA-Z0-9]+/, message: "only allow letters"}
validates :last_name, presence: true, format: {with: /[a-zA-Z0-9]+/, message: "only allow letters"}
validates :email, presence: true, uniqueness: true, format: {with: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/, message: "only allow letters"}
validates :pass, presence: true, confirmation: true, format: {with: /[a-zA-Z0-9#$@]+/, message: "only allow letters"}
validates :password_confirmation, presence: true, format: {with: /[a-zA-Z0-9#$@]+/, message: "only allow letters"}

def authenticate_user email,password

	all_users = User.all

	all_users.each do | user |
		if(user.email.eql?(email) && user.pass.eql?(password))
			return true
		end
	end

	return false
end

end#abc
