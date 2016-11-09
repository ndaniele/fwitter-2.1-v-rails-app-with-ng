class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id

  has_one :user
  has_many :re_tweets
  has_many :love_tweets

end
