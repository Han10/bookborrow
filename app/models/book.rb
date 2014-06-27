class Book < ActiveRecord::Base

attr_accessible :title, :description, :thumbnail, :email

has_attached_file :thumbnail,
				  :storage => :s3,
				  :region => 'us-west-2',
				  :s3_host_name => 's3-us-west-2.amazonaws.com',
				  :s3_credentials => Proc.new{|a| a.instance.s3_credentials }


def s3_credentials
	{:bucket => ENV['AWS_BUCKET_NAME'],
    :access_key_id => ENV['AWS_ACCESS_KEY'],
    :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'] }
end

end
