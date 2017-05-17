(function myMap(){
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(44.9778,-93.2650),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}());

