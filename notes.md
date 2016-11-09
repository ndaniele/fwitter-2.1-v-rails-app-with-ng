<!--USERS -->
User has an email address, username, and password
has many tweets

<!-- TWEETS -->
belongs to a user and can only be deleted or editied by its owner
feature to retweet
a tweet has content
  <!-- RETWEET FEATURE -->
      number of retweets
      <!--RETWEET TABLE-->
      Tweet-id, id, user_id

      
      number of hearts
      belongs_to
      tweet_id, id, user_id

