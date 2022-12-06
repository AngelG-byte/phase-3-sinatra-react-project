class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'


get '/game/:id' do
char = Character.find(params[:id])
char.to_json
end
# patch '/game/:id' do
# char = Character.find(params[:id])
# # char.update(
# #   health: params[:health]
# #   money: params[:money]
# #   strenght: params[:strenght]
# #   intelligence: params[:intelligence]
# #   lick: params[:luck]
# #   cunningness: params[:cunningness]
# # has_plot_armor?: params[:has_plot_armor?]
# # has_invisibility_cloak?: params[:has_invisibility_cloak?]
# # has_8_ball?: params[:has_8_ball?]
# # has_money_bag?: params[:has_money_bag?]
# # has_sword?: params[:has_sword?]
# # has_perfume?: params[:has_perfume?]
# # charisma: params[:charisma]
# )
# char.to_json
# end
end
