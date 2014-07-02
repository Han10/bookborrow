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

validates_attachment :thumbnail,
  :content_type => { :content_type => ["image/jpeg", "image/gif", "image/png"] }

def desc book

	desc = book.description

	if desc.length > 140 

		desc_min = desc[ 0.. desc.index('.')]

		if desc_min.length < 140

			desc_min = desc[0 .. desc.index(/\./, desc.index('.')+1) ]

		end
	else

		desc_min = desc

	end 
	
	return desc_min

end

end
