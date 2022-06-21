class CharactersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 

    def index
        characters = Character.all 
        render json: characters, status: :ok
    end

    def show 
        character = Character.find_by!(id: params[:id])
        render json: character, status: :ok
    end

    private

    def render_not_found_response
        render json: { error: "No kids located" }, status: :not_found
    end

end
