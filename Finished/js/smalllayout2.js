     document.getElementById("button1").addEventListener("click", function() {
                        Showlist("newbie with kitchen window");



                    });

                    function Showlist(catergory) {
                        var dbRef = firebase.database().ref("Team15/Combination/" + catergory);
                        var promise = dbRef.once("value", function(snap) {
                            list = snap.val();
                        });


                        promise.then(function() {
                            DisplayList(list); //JSON object
                        });
                    }






                    var indexofId = 0;

                    function DisplayList(list) {
                        console.log(list);

                        for (x in list) {
                            //                            var bottonClick = document.createElement("button");

                            //                            bottonClick.appendChild(inside);
                            //                            var node = document.createTextNode(x);
                            //                            inside.appendChild(node);
                            //                            inside.setAttribute("id", "listofplant" + indexofId);
                            //                            inside.setAttribute("draggable", "true");
                            //                            inside.setAttribute("ondragstart", "drag(event)");

                            //                            bottonClick.setAttribute("Class", "bottonClick");
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
                        //                        document.body.appendChild(x);
                    }