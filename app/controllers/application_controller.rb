class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/game/:id' do
char = Character.find(params[:id])
char.to_json( include: :situations)
end
  patch '/game/:id' do
char = Character.find(params[:id])
char.update(params)
char.to_json
end
  delete '/game/:id' do
char =  Character.find(params[:id])
char.destroy
  end

get '/battle/:id' do
      char = Character.find(params[:id])
       char.to_json( include: { char_vs_situations: {include: :situation}})  #( include: { character: { include: :situation } })

   end
get '/battles/:id' do
      char = Situation.find(params[:id])
       char.to_json( include: { char_vs_situations: {include: :character}})  #( include: { character: { include: :situation } })

   end
end


# get '/games/:id' do
#   game = Game.find(params[:id])

#   # include associated reviews in the JSON response
#   game.to_json(include: { reviews: { include: :user } })
# end

# get '/games/:id' do
#   game = Game.find(params[:id])

#   # include associated reviews in the JSON response
#   game.to_json(only: [:id, :title, :genre, :price], include: {
#     reviews: { only: [:comment, :score], include: {
#       user: { only: [:name] }
#     } }
#   })
# end