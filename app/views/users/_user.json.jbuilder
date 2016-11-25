json.extract! user, :id, :created_at, :updated_at, :name, :picture, :rating
json.url user_url(user, format: :json)
