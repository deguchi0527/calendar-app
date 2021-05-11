class MemosController < ApplicationController
  before_action :set_memo, only: [:show, :edit, :update, :destroy]
  
  def index
    @memos = Memo.all
  end

  def new
    @memo = Memo.new
  end

  def create
    @memo = Memo.new(memo_params)
    if @memo.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @memo.update(memo_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @memo.destroy
    redirect_to root_path
  end

  private

  def memo_params
    params.require(:memo).permit(:title, :content, :start_time)
  end

  def set_memo
    @memo = Memo.find(params[:id])
  end
end
