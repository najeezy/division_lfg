class UsersController < ApplicationController

  def create
    user = User.create(user_params)

    if user.id
      session[:current_user_id] = user.id
      render json: { success: true, user: user.as_json(only: [:id, :email]) }
    else
      render json: { success: false, errors: user.errors.full_messages }
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, player_attributes: [:username, :platform, :level])
  end
end
