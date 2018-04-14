(function(){

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAmIDOWhsGzq_nqInVBovu8oG3srRCoO7c",
    authDomain: "gunfreesodacity.firebaseapp.com",
    databaseURL: "https://gunfreesodacity.firebaseio.com",
    projectId: "gunfreesodacity",
    storageBucket: "gunfreesodacity.appspot.com",
    messagingSenderId: "696337298049"
  };
  firebase.initializeApp(config);

  // Get elecments 
  const preObject = document.getElementById('object');
  var place = {
    'name': null,
    'location': null,
  }

  // create refrences 
  const dbRefObject = firebase.database().databse().ref().chiled('object');

  // realtime info
  //dbRefObject.on('value', snap => console.log(snap.val())); 

}());
