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

  const dbRefObject = firebase.database().ref();
  dbRefObject.on("child_added", function(snapshot){
      codeAddress(snapshot.val().name, snapshot.val().address)
  })


  // Get elecments 
  

  // realtime info
  //dbRefObject.on('value', snap => console.log(snap.val())); 

}());
