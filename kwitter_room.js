var firebaseConfig = {
      apiKey: "AIzaSyA0M98uTHXofZVgc8RRnBkl5koeeGYr30M",
      authDomain: "kwitter-67f75.firebaseapp.com",
      databaseURL: "https://kwitter-67f75-default-rtdb.firebaseio.com",
      projectId: "kwitter-67f75",
      storageBucket: "kwitter-67f75.appspot.com",
      messagingSenderId: "109805400914",
      appId: "1:109805400914:web:955bea401f058a2b75008b",
      measurementId: "G-3VG1J2TP5R"
    };
    firebase.initializeApp(firebaseConfig);
user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!!!!!!!!";
function getData() 
{ firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names = childKey; console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
 }); }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function add_room()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            ghostdeadly : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwiiter_page.html";
}
function redirecToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}