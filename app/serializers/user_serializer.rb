class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :tweets
  has_many :re_tweets
  has_many :love_tweets

end
