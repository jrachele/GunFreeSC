var geocoder;
var map;
var position;
  function initMap() {
    geocoder = new google.maps.Geocoder();
    
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 12,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    
    codeAddress(undefined, "Columbia, SC", undefined, false);

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

  function codeAddress(name, address, reason, mark=true) {


    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        if (mark) {
          var contentString = '<h3>' + name + '</h3><h6>' + reason + '</h6>'
          var infowindow = new google.maps.InfoWindow({
            content: contentString,

          });  
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: name,
        });
        marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
        });
        marker.addListener('mouseout', function() {
          infowindow.close();
        })

        }
        
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
