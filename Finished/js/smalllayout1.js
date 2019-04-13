//show the string from database.
document.getElementById("button1").addEventListener("click", function () {
    Showlist("harvest with kitchen window");



});

function Showlist(catergory) {
    var dbRef = firebase.database().ref("Team15/Combination/" + catergory);
    var promise = dbRef.once("value", function (snap) {
        list = snap.val();
    });


    promise.then(function () {
        DisplayList(list);
    });
}






var indexofId = 0;

function DisplayList(list) {
    console.log(list);

    for (x in list) {

        indexofId++;
        DisplayImage("./images/" + x + ".png");
    }

}

function DisplayImage(picturefile) {
    var x = document.createElement("IMG");
    x.setAttribute("src", picturefile);
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("id", "listofplant" + indexofId);
    x.setAttribute("draggable", "true");
    x.setAttribute("ondragstart", "drag(event)");
    var pa = document.getElementById("showit");
    pa.appendChild(x);
}
