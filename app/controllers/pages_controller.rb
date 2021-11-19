class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @nav_items = ['About', 'Stack', 'Projects', 'Contact']
  end

  def create
    @name = params[:name]
    @company = params[:company]
    @subject = params[:subject]
    @message = params[:message]

    PagesMailer.recruiter_email(@name, @company, @subject, @message).deliver_now
    redirect_to root_path
  end
end