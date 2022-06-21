class MonstersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    def index
        monsters = Monster.all 
        render json: monsters, status: :ok
    end

    def show 
        monster = Monster.find_by!(id: params[:id])
        render json: monster, status: :ok
    end

    def destroy
        monster = Monster.find_by!(id: params[:id])
        monster.destroy!
        head :no_content, status: :ok
    end

    private

    def render_not_found_response
        render json: { error: "No monster found" }, status: :not_found
    end

    def render_invalid_response (exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
