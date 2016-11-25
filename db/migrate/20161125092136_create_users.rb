class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :rating
      t.string :picture
      t.boolean :walker, default: false

      t.timestamps null: false
    end
  end
end
