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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='liked_message(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
} });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name : user_name ,
      message : msg,
      like : 0
});
document.getElementById("msg").value = "";
}
function liked_message(message_id)
{
      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_like
      });
}