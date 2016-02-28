class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :mission_name
      t.boolean :is_active
      t.references :creator

      t.timestamps
    end
  end
end
