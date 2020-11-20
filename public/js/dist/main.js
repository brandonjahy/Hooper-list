

const searchBar = document.querySelector('.playerbox');


// API request 

$(function () {
    var firstName;
    var lastName;
    var playerName;
    var oneName;
    var twoName;
    var imageName;
    

    // api call to search names and stats
    $('.btn').on('click', function(){
        firstName = $('.firstName input[type="text"]').val();
        lastName = $('.lastName input[type="text"]').val();
        playerName = firstName + " " + lastName
        

        var request = $.ajax({
            "async": true,
	        "crossDomain": true,
            "url": `https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=` + playerName ,
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "cc62e16963msh66559015e6f02aap10d02cjsn9ba955a6cf0c",
		        "x-rapidapi-host": "free-nba.p.rapidapi.com"
            }
            
        });
        
        request.done(function( data ) {
            let feet = data.data[0].height_feet
            let inches = data.data[0].height_inches
            let position = data.data[0].position
            let weight = data.data[0].weight_pounds

            $('.feet h6').text(feet);
            $('.inches h6').text(inches);
            $('.position h6').text(position);
            $('.weight h6').text(weight);

            console.log(data)
            console.log(feet)
            console.log(inches)
            console.log(position)
            console.log(weight)
            console.log(firstName)
            console.log(lastName)
            console.log(playerName)
        });

        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })

    // api call for player images
    $('.btn').on('click', function(){
        oneName = $('.firstName input[type="text"]').val();
        twoName = $('.lastName input[type="text"]').val();
        imageName = twoName + "/" + oneName
        var request = $.ajax({
            "url": "https://nba-players.herokuapp.com/players/" + imageName ,
	        "method": "GET",
	        
        });
        
        request.done(function( data ) {
            $('.picbox1 img').attr('src', "https://nba-players.herokuapp.com/players/" + imageName)
            // console.log(data)
            console.log(imageName)
        });
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })
})