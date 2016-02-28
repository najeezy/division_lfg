class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :platform
      t.string :username, unique: true, null: false
      t.integer :level
      t.references :user

      t.timestamps
    end
  end
end
