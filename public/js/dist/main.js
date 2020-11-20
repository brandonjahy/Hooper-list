

const searchBar = document.querySelector('.playerbox');


// API request 

$(function () {
    var playerName;

    $('.btn').on('click', function(){
        playerName = $('.search-box input[type="text"]').val();
        var request = $.ajax({
            "async": true,
	        "crossDomain": true,
            "url": `https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=` + playerName     ,
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "cc62e16963msh66559015e6f02aap10d02cjsn9ba955a6cf0c",
		        "x-rapidapi-host": "free-nba.p.rapidapi.com"
	        }
        });
        
        request.done(function( data ) {
            console.log(data)
        });
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })
})
$(function () {
    var imageName;
    $('.btn1').on('click', function(){
        imageName = $('.imagebox input[type="text"]').val();
        var request = $.ajax({
            "url": "https://nba-players.herokuapp.com/players/" + imageName ,
	        "method": "GET",
	        
        });
        
        request.done(function( data ) {
            $('.picbox img').attr('src', "https://nba-players.herokuapp.com/players/" + imageName)
            console.log(data)
        });
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })
})