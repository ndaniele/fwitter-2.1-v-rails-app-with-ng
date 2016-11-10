class ReTweetSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :tweet_id

  has_one :user
  has_one :tweet
end
