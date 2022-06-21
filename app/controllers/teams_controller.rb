class TeamsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    def index
        teams = Team.all 
        render json: teams, status: :ok
    end

    def show 
        team = Team.find_by!(id: params[:id])
        render json: team, status: :ok
    end

    def create
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    # def update
    #     team = Team.find_by(id: params[:id])
    #       team.update(team_params)
    #     render json: team, status: :created
    # end
# probably don't need update for teams?

    def destroy
        team = Team.find_by!(id: params[:id])
        team.destroy!
        head :no_content, status: :ok
    end

    private

    def render_not_found_response
        render json: { error: "No teams to display" }, status: :not_found
    end

    def render_invalid_response (exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def team_params
        params.permit(:team_name, :player_total)
    end
end
