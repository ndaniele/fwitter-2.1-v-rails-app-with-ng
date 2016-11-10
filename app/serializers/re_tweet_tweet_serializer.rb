class ReTweetTweetSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :tweet_id

  has_one :user, serializer: UserSerializer
  has_one :tweet, serializer: ReTweetTweetSerializer

end