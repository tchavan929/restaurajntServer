var mongoose = require('mongoose');
var Schema = mongoose.Schema;
MovieSchema = new Schema({
//_id:String,
plot:String,
genres:String,
cast:String,
//num_mflix_comments:{"$numberInt":"0"},
//title:"Blacksmith Scene",
num_mflix_comments:String,
title:String,
fullplot:String,
/*countries:["USA"],
released:{"$date":{"$numberLong":"-2418768000000"}},
directors:["William K.L. Dickson"],
rated:String,
awards:{"wins":{"$numberInt":"1"},"nominations":{"$numberInt":"0"},"text":"1 win."},
lastupdated:String,
year:{"$numberInt":"1893"},
imdb:{"rating":{"$numberDouble":"6.2"},"votes":{"$numberInt":"1189"},"id":{"$numberInt":"5"}},
type:"movie",
tomatoes:{"viewer":{"rating":{"$numberDouble":"3.0"},"numReviews":{"$numberInt":"184"},"meter":{"$numberInt":"32"}},
lastUpdated:{"$date":{"$numberLong":"1435516449000"}}}*/
});
module.exports = mongoose.model('Movie', MovieSchema);
//{"_id":{"$oid":"573a1390f29313caabcd4135"},"plot":"Three men hammer on an anvil and pass a bottle of beer around.","genres":["Short"],"runtime":{"$numberInt":"1"},"cast":["Charles Kayser","John Ott"],"num_mflix_comments":{"$numberInt":"0"},"title":"Blacksmith Scene","fullplot":"A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.","countries":["USA"],"released":{"$date":{"$numberLong":"-2418768000000"}},"directors":["William K.L. Dickson"],"rated":"UNRATED","awards":{"wins":{"$numberInt":"1"},"nominations":{"$numberInt":"0"},"text":"1 win."},"lastupdated":"2015-08-26 00:03:50.133000000","year":{"$numberInt":"1893"},"imdb":{"rating":{"$numberDouble":"6.2"},"votes":{"$numberInt":"1189"},"id":{"$numberInt":"5"}},"type":"movie","tomatoes":{"viewer":{"rating":{"$numberDouble":"3.0"},"numReviews":{"$numberInt":"184"},"meter":{"$numberInt":"32"}},"lastUpdated":{"$date":{"$numberLong":"1435516449000"}}}}
