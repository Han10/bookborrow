class Book < ActiveRecord::Base

attr_accessible :title, :description, :thumbnail, :email

searchable do
	text :title
	text :description
end

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

def desc 

#	if self.description.length > 140 
#		desc_min = self.description[ 0.. self.description.index('.')]
#		if desc_min.length < 140
#			desc_min = self.description[0 .. self.description.index(/\./, self.description.index('.')+1) ]
#		end
#	else
#		desc_min = self.description
#	end 
    if self.description.length>250
    	return self.description[0.. 250]+'...'
else

	return self.description[ 0.. 250]
end

end

def title_min
	return title[0...self.title.index(/[^A-Za-z0-9 ]/, 0 )]
end

def last_name
	user = User.all
	
	user.each do | user |
		if user.email.eql? self.email
			return user.last_name
		end
	end

end



end
