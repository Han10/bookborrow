class StaticPagesController < ApplicationController

skip_before_filter  :verify_authenticity_token

def login_page
	@user = User.new
	session[:current_user_email] = nil
end

def create

	@user = User.new(user_params)

	if @user.save
		redirect_to book_index_path
	end
	
end

def login_authentication

	email = params[:user][:email]
	password = params[:user][:pass]
	user = User.new
	if user.authenticate_user(email,password)
		redirect_to book_index_path
	else
		redirect_to root_path
		flash[:notice] = "Invalid email or password."
	end

end

def account_info
	@user = User.find_by email: session[:current_user_email]	
end

def update
end

private

def user_params
	params.require(:user).permit(:email, :pass, :password_confirmation, 
			:dof, :first_name, :last_name, :gender)
end

end

