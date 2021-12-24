


function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const coordinates = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            
            createAndAddMap(coordinates);
            
        });
    }
    
}

function createAndAddMap(coordinates) {
    const options = {
        zoom: 18,
        center: coordinates,
    };

    var map = new google.maps.Map(document.getElementById("google-map-container"), options);

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
    });

    // API key bulana kadar...
    setTimeout(passAlert, 100);
    setTimeout(passAlert, 2000);
    setTimeout(passAlert, 6000);

}

function passAlert() {
    var dismissButton = document.getElementsByClassName('dismissButton')[0];
    if (dismissButton) {
        dismissButton.click();
    }
}



