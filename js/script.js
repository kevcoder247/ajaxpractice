// http://www.omdbapi.com/?apikey=62612635&t=Die+Hard

//How to request data from an api using javascript and jquery

//there are many ways to do this
// 1.jQuery $.ajax() function
// 2. the browser fetch() function
// 3.using the Axios http client libary

//Variables
const URL = "http://www.omdbapi.com/?apikey=62612635&t=Die+Hard"

// Element References

//Event Listeners
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rating');

//FUNCTIONS
$.ajax(URL).then(function(data) {
    console.log('movie data is ready')
    console.log(data)
}), function(error){
    console.log('something is wrong')
    console.log(error)
}
