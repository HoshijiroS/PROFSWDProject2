class UsersController < ApplicationController
  def index
    @users = User.all
  end
  
  def login
    puts"Username is "+params[:username].to_s
    puts"Password is "+params[:password].to_s
    
    # user=User.where(username: username).first
    if User.present? && User.where("username = '{params[:username]}' AND password = '{params[:password]}'")
      @user=User.where("username = '{params[:username]}' AND password = '{params[:password]}'")
    else
      nil
    end
  end

  def logout
    # @user = User.find(params[:id])
    @user = nil
    redirect_to users_path, notice: "You have successfully logged out."
  end

  def create
    @user = User.new(user_params)

  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
