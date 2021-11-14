class PagesController < ApplicationController
  def index
    @nav_items = ['About', 'Stack', 'Projects', 'Contact']  
  end
end