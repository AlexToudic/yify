var api        = require("./api");
var defaultify = require("defaultify");

function getMovies(options, callback)
{
    var defaultOptions  = {
        keywords : "",
        limit : 20,
        set : 1,
        quality : "ALL",
        rating : 0,
        genre : "ALL",
        sort : "date",
        order : "desc"
    };

    var opts = defaultify(options, defaultOptions).value;

    api.apiCall("list.json",opts,null,callback,null,"GET");
}

function getUpcomingMovies(callback)
{
   api.apiCall("upcoming.json",null,null,callback,null,"GET");
}

function getMovieDetails(id,callback)
{
    api.apiCall("movie.json",null,{id : id},callback,null,"GET");
}

function getComments(id,callback)
{
    api.apiCall("comments.json",null,{movieid : id},callback,null,"GET");
}

function getUserDetails(id,callback)
{
    api.apiCall("user.json",null,{id : id},callback,null,"GET");
}

module.exports = {
  getMovies : getMovies,
  getUpcomingMovies : getUpcomingMovies,
  getMovieDetails : getMovieDetails,
  getComments : getComments,
  getUserDetails : getUserDetails
};
