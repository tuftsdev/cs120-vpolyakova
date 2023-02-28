// Documentation for XMLHttpRequest object: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// A global variable `request`
var request;

// Step 1: Make an instance of the XMLHttpRequest object to make an HTTP GET request
request = new XMLHttpRequest();

// Step 2: Initialize HTTP request
//request.open("GET", "https://www.cs.tufts.edu/comp/120/cat.json", true);

request.open("GET", "https://aws.random.cat/meow", true);

// Step 3: Set up handler / callback function to deal with HTTP response
request.onreadystatechange = function() {
  // Step 5: Get document div to populate
  var meow_div = document.getElementById("meow");
  
  //Step 6: Retrieve response and log
  var data = request.responseText;
  console.log("response text: " + data);
  console.log("status: " + request.status);
  console.log("status text: " + request.statusText);
  console.log("response ready state: " + request.readyState);
  
  //Step 7:Parse JSON:
  var json_data = JSON.parse(data)
  console.log("parsed json data:" + json_data);
  meow_div.innerHTML = "<p>Cat picture: " + json_data["file"] + "</p>"
  
  //Step 8:Create image object:
  var img = document.createElement("img")
  img.src = json_data["file"];
  
  meow_div.append(img);



}





// Step 4: Send ("fire off") the request
request.send();