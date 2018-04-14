var geocoder;
var map;
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    geocoder = new google.maps.Geocoder();

  }

  var getLocation =  function(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        console.log(latitude, longitude);
        return results[0].geometry.location;
        }
    });
  }

  //Call the function with address as parameter
  getLocation('New York');

/*
function codeAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
          // map.setCenter(results[0].geometry.location);
          // var marker = new google.maps.Marker({
          //     map: map,
          //     position: results[0].geometry.location
        return results[0].geometry.location;
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
}
initMap();
console.log(codeAddress("208 Leyswood Dr. Greenville SC 29615"))
*/
