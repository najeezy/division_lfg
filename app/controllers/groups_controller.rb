class GroupsController < ApplicationController

  def index
    groups = Group.search(params['q'])

    respond_to do |format|
      format.html do
        redirect_to '/'
      end
      format.json {
        render json: groups.as_json({ include: [:players, :creator] })
      }
    end
  end

  def create
    group = Group.new(group_params)
    render json: :ok
  end

  private

  def group_params
    params.require(:group).permit(:mission_name)
  end
end
