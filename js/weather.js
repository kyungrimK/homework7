function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location = "Ann Arbor"
    if (document.querySelector("#location").value != "") {
        location = document.getElementById("location").value
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let fomat = document.querySelector("#fahrenheit").value;
    if (document.querySelector("input[name = temp]:checked") ){
        fomat = document.querySelector("input[name = temp]:checked").value
    }

    // Your code here.
    console.log("Format is " + fomat);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + fomat +"&appid=187082d85644c8684ab17440bb188621";
    
    // Your code here.  
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
   
    // Your code here.
    
    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        $("#forecast").css("display", "block")
        loc.innerHTML = json["name"]
        temp.innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"]
        tempImg.src = "http://openweathermap.org/img/wn/" + json["weather"][0]["icon"] + ".png"
        tempImg.alt = "Weather Icon"
    });
}
