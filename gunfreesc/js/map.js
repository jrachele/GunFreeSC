var geocoder;
var map;
var currentPosition;
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
    currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(currentPosition)
    var marker = new google.maps.Marker({
      map: map,
      position: currentPosition,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });
  }

  function codeAddress(name, address, reason, mark=true) {


    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        if (mark) {
          // var posX = 33.9722359;
          // var posY = -81.01880970000002;
          // if (!(currentPosition === 'undefined')) {
          //   posX = currentPosition.lat();
          //   posY = currentPosition.lng();
          // }
          var link = 'https://www.google.com/maps/dir/?api=1&origin='+
          encodeURI("Columbia SC") + '&destination=' +
          encodeURI(address)+ '&travelmode=car';

          var dirString = '<a target="_blank" href="' + link + '">Get Directions</a>'
          var contentString = '<h3>' + name + '</h3><h6>' + reason + '</h6>' + dirString;
          var infowindow = new google.maps.InfoWindow({
            content: contentString,
          });
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: name,
        });
        var close = true;
        marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
        });
        marker.addListener('click', function() {
          close = false;
        })
        marker.addListener('mouseout', function() {
          if (close)
            infowindow.close();
        })

        }

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
