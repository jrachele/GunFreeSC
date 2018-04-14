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
      codeAddress(snapshot.val().name, snapshot.val().address, snapshot.val().reason)
  })


  function addLocation(name, address, reason) {
    dbRefObject.push().set({
      name: name,
      address: address
      reason: reason
    }).then(function(result){
      console.log("Successfully wrote data")
    }).catch(function(error){
      console.log("Something broke")
      console.log(error);
    })
  }

  // Get elecments 
  

  // realtime info
  //dbRefObject.on('value', snap => console.log(snap.val())); 

}());
