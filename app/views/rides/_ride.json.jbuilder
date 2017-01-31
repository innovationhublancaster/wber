json.extract! ride, :id, :created_at, :updated_at, :requested_at, :started, :ended, :start_lat, :start_long, :end_lat, :end_long, :walker_id, :user_id
json.url ride_url(ride, format: :json)
