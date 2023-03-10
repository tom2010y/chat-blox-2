var firebaseConfig = {
    apiKey: "AIzaSyAyvIzvebATy6-MYxmodJ6h3s1NiNKYWPs",
    authDomain: "chat-blox-bee66.firebaseapp.com",
    databaseURL: "https://chat-blox-bee66-default-rtdb.firebaseio.com",
    projectId: "chat-blox-bee66",
    storageBucket: "chat-blox-bee66.appspot.com",
    messagingSenderId: "958139618962",
    appId: "1:958139618962:web:c19f72d234ad25af83b84b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();