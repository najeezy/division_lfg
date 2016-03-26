class GroupsController < ApplicationController

  def index
    groups = Group.search(params['q'])

    respond_to do |format|
      format.html do
        redirect_to '/'
      end
      format.json {
        render json: groups.as_json(include: [:players, :creator])
      }
    end
  end

  def create
    new_group_params = group_params.merge(creator_id: current_user.id)
    group = Group.create(new_group_params)
    render json: group.as_json(include: [:players, :creator])
  end

  def join
    group = Group.find_by(id: params[:id])
    if group && group.players.count <= 2
      group.players << current_user.player
      render json: {
        success: true,
        group_id: group.id,
        player_id: current_user.player.id
      }
    else
      render json: { success: false }
    end
  end

  private

  def group_params
    params.require(:group).permit(:mission_name)
  end
end
