class AddHasMicToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :has_mic, :boolean, default: false
  end
end
