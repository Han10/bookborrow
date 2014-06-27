class StaticPagesController < ApplicationController

skip_before_filter  :verify_authenticity_token

def home

	@user = User.new

end

def create

	@user = User.new(user_params)

	if @user.save
		redirect_to search_path
	end
	
end

private

def user_params
	params.require(:user).permit(:email, :pass, :password_confirmation, 
			:dof, :first_name, :last_name, :gender)
end

end

