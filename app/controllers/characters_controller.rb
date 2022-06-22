class CharactersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    def index
        characters = Character.all 
        render json: characters, status: :ok
    end

    def show 
        character = find_character
        render json: character, status: :ok
    end

    def update
        character = find_character
        character.update!(team_id: params[:team_id])
        render json: character, status: :ok
    end

    private

    def render_not_found_response
        render json: { error: "No kids located" }, status: :not_found
    end

    def find_character
        Character.find_by!(id: params[:id])
    end

    def render_invalid_response (exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def character_params
        params.permit(:monster_id, :team_id)
    end

end
