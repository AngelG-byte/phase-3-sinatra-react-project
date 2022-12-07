class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
#handle story calls on this to find the situation text
  get '/situation/:id' do
  sit = Situation.find(params[:id])
  sit.to_json
end
#loads the intro story
get '/intro' do
 message = 'Sleepily, with eyes half closed, you enter the elevator and take it up the second floor, just like every other day for the past 9 weeks. You figure youll grab yourself a little treat from Divine Cafe. Maybe a coffee and an Oatmeal Creme Pie? You head for the elevator and press the lobby button...'
 message.to_json
end



#FINDS the 5 characters
get '/battle/:id' do
      char = Character.find(params[:id])
       char.to_json( include: { char_vs_situations: {include: :situation}})

   end

#STAT TEST FETCHES
get '/battles/strength/:id/:sit_id' do
   char = Character.find(params[:id]).char_vs_situations.find_by(situation_id: params[:sit_id]).strength_test
   char.to_json
   end

get '/battles/intelligence/:id/:sit_id' do
    char = Character.find(params[:id]).char_vs_situations.find_by(situation_id: params[:sit_id]).intelligence_test
    char.to_json
    end

get '/battles/cunningness/:id/:sit_id' do
      char = Character.find(params[:id]).char_vs_situations.find_by(situation_id: params[:sit_id]).cunningness_test
      char.to_json
      end
get '/battles/charisma/:id/:sit_id' do
        char = Character.find(params[:id]).char_vs_situations.find_by(situation_id: params[:sit_id]).charisma_test
        char.to_json
        end
  get '/battles/luck/:id/:sit_id' do
    char = Character.find(params[:id]).char_vs_situations.find_by(situation_id: params[:sit_id]).luck_test
    char.to_json
    end


end
