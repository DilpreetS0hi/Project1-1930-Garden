(function () {

    var firebase = app_firebase;

    // This function record user's information on firebase, and later which will be grab from firebase show on HTML. 

    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref("users/" + user.uid).update({
            "name": user.displayName,
            "email": user.email
        });
    });
})()
