class SessionsController < ApplicationController

  def index
    render json: { user: current_user.as_json(only: [:id, :email]) }
  end

  def create
    user = User.find_by(email: params['email']).try(:authenticate, params['password'])
    if user
      session[:current_user_id] = user.id
      render json: { success: true, user: user.as_json(only: [:id, :email]) }
    else
      render json: { success: false, errors: ["Incorrect email or password."] }
    end
  end

  def destroy
    if current_user.id == params['id'].to_i
      session[:current_user_id] = nil
    end

    render json: :ok
  end
end
