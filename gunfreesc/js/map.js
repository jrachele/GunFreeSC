var geocoder;
var map;
var position;
  function initMap() {
    geocoder = new google.maps.Geocoder();
    
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    
    codeAddress("Columbia, SC", false);

  }

  function showPosition(position) {
    var coordss = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(coordss)
    var marker = new google.maps.Marker({
      map: map,
      position: coordss,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });
  }

  function codeAddress(address, mark=true) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        if (mark) {
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        }
        
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
