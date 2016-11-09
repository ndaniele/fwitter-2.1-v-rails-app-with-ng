class LoveTweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id
end
