class StaticPagesController < ApplicationController


def login_page
	@user = User.new
	session[:current_user_email] = nil
end

def signup
	@user = User.new
end

def create

	@user = User.new(user_params)
	
	@user.valid?
	email_exist = User.exists? email: params[:user][:email]
	password_match = params[:user][:pass] != params[:user][:password_confirmation]
	
	prefix = ['Darn, ', 'Damn, ', 'Dang, ', 'Oh Snap! '].sample

	case
	when email_exist && password_match
		flash[:unsuccessful_signup] = prefix << "the email was taken! And your passwords dont match."
		render :signup
	when email_exist
		flash[:unsuccessful_signup] = prefix << "that email was taken!"
		render :signup
	when password_match
		flash[:unsuccessful_signup] = prefix << "your passwords dont match!"
		render :signup
	when @user.save
		redirect_to book_index_path
	else
		flash[:unsuccessful_signup] = prefix << "Change a few things up and try submitting again."
		render :signup	
	end
	
end

def login_authentication

	email = params[:user][:email]
	password = params[:user][:pass]
	user = User.new
	if user.authenticate_user(email,password)
		session[:current_user_email] = email
		redirect_to book_index_path
	else
		flash[:unsuccessful_login] = "Invalid email or password."
		redirect_to root_path
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

