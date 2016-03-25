class ChangeIsActiveOnGroupsToDefaultTrue < ActiveRecord::Migration
  def change
    change_column :groups, :is_active, :boolean, default: true
  end
end
