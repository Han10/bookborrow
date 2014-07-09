class UserMailer < ActionMailer::Base
 
  default from: "bookborrow2014@gmail.com"

  def request_email requester,poster,book,message

  	@book = book
  	@requester = requester
  	@poster = poster
  	@message = message

  	mail(to: @poster.email, subject: "Someone has requested a book")

  end
end
