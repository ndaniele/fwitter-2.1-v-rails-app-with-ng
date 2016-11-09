class Tweet < ApplicationRecord
  belongs_to :user
  has_many :re_tweets
  has_many :love_tweets
end
