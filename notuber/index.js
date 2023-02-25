let map;

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 42.352271, lng: -71.05524200000001 },
        zoom: 14,
    });

    const image =
        "car.png";

    const carImage_mXfkjrFw = new google.maps.Marker({
        position: { lat: 42.3453, lng: -71.0464 },
        map,
        icon: image,
    });

    const carImage2_nZXB8ZHz = new google.maps.Marker({
        position: { lat: 42.3662, lng: -71.0621 },
        map,
        icon: image,
    });

    const carImage3_Tkwu74WC= new google.maps.Marker({
        position: { lat: 42.3603, lng: -71.0547 },
        map,
        icon: image,
    });

    const carImage4_5KWpnAJN = new google.maps.Marker({
        position: { lat: 42.3472, lng: -71.0802 },
        map,
        icon: image,
    });

    const carImage5_uf5ZrXYw = new google.maps.Marker({
        position: { lat: 42.3663, lng: -71.0544 },
        map,
        icon: image,
    });

    const carImage6_VMerzMH8 = new google.maps.Marker({
        position: { lat: 42.3542, lng: -71.0704 },
        map,
        icon: image,
    });
}

window.initMap = initMap;

// Documentation for XMLHttpRequest object: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// A global variable `request`
var request;

// Step 1: Make an instance of the XMLHttpRequest object to make an HTTP GET request
request = new XMLHttpRequest();

// Step 2: Initialize HTTP request
request.open("GET", "", true);

// Step 3: Set up handler / callback function to deal with HTTP response
request.onreadystatechange = function() {
  // Step 5: ?????
  img = document.GetElemenyById("meow");
  img
}

// Step 4: Send ("fire off") the request
request.send();