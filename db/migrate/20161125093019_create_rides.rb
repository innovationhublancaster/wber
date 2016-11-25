class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.datetime :requested_at
      t.datetime :started
      t.datetime :ended
      t.integer :start_lat
      t.integer :start_long
      t.integer :end_lat
      t.integer :end_long
      t.integer :walker_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
