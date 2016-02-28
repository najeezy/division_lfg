class CreateGroupsPlayers < ActiveRecord::Migration
  def change
    create_table :groups_players, id: false do |t|
      t.references :group, index: true
      t.references :player, index: true
    end
  end
end
