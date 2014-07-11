class BookController < ApplicationController

  before_action :deny_access_if_not_logged_in
  before_action :set_user

  def index    

     @books = Book.search do
      fulltext params[:search]
      paginate page: params[:page], per_page: 5
    end.results

    @books_cou = @books.count
    
    respond_to do |format|
      format.html
      format.json 
    end

  end

  def show
    @book = Book.find(params[:id])
  end

  def view
    @book = Book.find(params[:id])
  end

  def requestmodal

    if request.post?

      message = params['message']
      requester = User.find(params['user_id'])
      book = Book.find(params['book_id'])
      poster = User.find_by email: params['book_email']

      UserMailer.request_email(requester,poster,book,message).deliver
      respond_to do |format|
        format.html
        format.json  {render json: true }
      end

    end
  end 

  def new
    @book = Book.new
  end

  def create

    @book = Book.new(book_params)
    @book.email = @user.email
    @book.user_id = @user.id
    
    if @book.save
      Book.reindex
      redirect_to @book

    else
      # DO SOMETHING ELSE
    end
  end

  def my_posts
    @books = Book.where user_id: @user.id
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])

    if @book.update(book_params)
      Book.reindex
      redirect_to @book
    else
      redirect_to @book
    end
  end

  def destroy
    
    @books = Book.where user_id: @user.id
    begin
        @book = Book.find!(params[:id])
        book_title = @book.title
        @book.destroy
        flash.now[:successful_deletion] = "Successfully deleted " << book_title << "."
        render :my_posts
    rescue
        flash.now[:unsuccessful_deletion] = "The book has been deleted or never existed"
        render :my_posts
    end
  end

  private

    def book_params
      params.require(:book).permit(:title, :description, :thumbnail, :email, :faculty)
    end

    def deny_access_if_not_logged_in
      if session[:current_user_email] == nil
        redirect_to root_path
      end
    end

    def set_user
      begin
        @user = User.find_by email: session[:current_user_email]
      rescue
        redirect_to root_path
      end
    end

end

