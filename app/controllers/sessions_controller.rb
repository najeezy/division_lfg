class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params['email']).try(:authenticate, params['password'])
    if user
      session[:current_user_id] = user.id
      render json: :ok
    else
      render json: {errors: true}, status: 400
    end
  end

  def destroy
    if current_user
      session[:current_user_id] = nil
    end
  end
end
