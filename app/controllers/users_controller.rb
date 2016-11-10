class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit]


  def show
    user = User.find_by_id(params[:id])
    render json: user, include:['re_tweets', 're_tweets.tweet', 'love_tweets.tweet', 'love_tweets', 'tweets.re_tweets', 'tweets.love_tweets']
  end

  def edit

  end

  def update_password
  end

end