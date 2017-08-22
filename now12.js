var time = "";
var inputValue = "";
var when = "";

function openNav() {
  document.getElementById("dropcontent").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("dropcontent").style.visibility = "hidden";
}

function weekFunction(){
    var day = prompt("Enter the day you would like to complete the task");
    var times = prompt("Enter the time you would like to complete the task");
    var task = prompt("Enter the task you would like to complete");
    //only reads the first if statement
    if (day == "tuesday" || day == "Tuesday"){
      document.getElementById("tuesday").innerHTML = document.getElementById("tuesday").innerHTML + "<br>" + times + " " + task;
    }
    else if (day == "monday" || day == "Monday"){
      document.getElementById("monday").innerHTML = document.getElementById("monday").innerHTML + "<br>" + times + " " + task;
    }
    else if (day == "wednesday" || day == "Wednesday"){
      document.getElementById("wednesday").innerHTML = document.getElementById("wednesday").innerHTML + "<br>" + times + " " + task;
    }
    else if (day == "thursday" || day == "Thursday"){
      document.getElementById("thursday").innerHTML = document.getElementById("thursday").innerHTML + "<br>" + times + " " + task;
    }
    else if (day == "friday" || day == "Friday"){
      document.getElementById("friday").innerHTML = document.getElementById("friday").innerHTML + "<br>" + times + " " + task;
    }
    else if (day == "saturday" || day == "Saturday"){
      document.getElementById("saturday").innerHTML = document.getElementById("saturday").innerHTML + "<br>" + times + " " + task;
    }
    else if (day == "sunday" || day == "Sunday"){
      document.getElementById("sunday").innerHTML = document.getElementById("sunday").innerHTML + "<br>" + times + " " + task;
    }
    else{  //not working
      alert("Not Valid!");
    }
}


function addTask(){
//var task = document.getElementById("myInput").value;
console.log(inputValue);

if (when == "am"){
  if (time == "12:00"){
    document.getElementById("twelve dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("twelve dash").style.transform = "rotate(-90deg)";
    twelve =   document.getElementById("twelve dash");
    console.log(twelve);
  }
  else if (time == "1:00"){
    document.getElementById("one dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("one dash").style.transform = "rotate(25.5deg)";
  }
  else if (time == "2:00"){
    document.getElementById("two dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("two dash").style.transform = "rotate(55.5deg)";
  }
  else if (time == "3:00"){
    document.getElementById("three dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("three dash").style.transform = "rotate(90deg)";
  }
  else if (time == "4:00"){
    document.getElementById("four dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("four dash").style.transform = "rotate(-90deg)";
  }
  else if (time == "5:00"){
    document.getElementById("five dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("five dash").style.transform = "rotate(25.5deg)";
  }
  else if (time == "6:00"){
    document.getElementById("six dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("six dash").style.transform = "rotate(-90deg)";
  }
  else if (time == "7:00"){
    document.getElementById("seven dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("seven dash").style.transform = "rotate(25.5deg)";
  }
  else if (time == "8:00"){
    document.getElementById("eight dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eight dash").style.transform = "rotate(55.5deg)";
  }
  else if (time == "9:00"){
    document.getElementById("nine dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("nine dash").style.transform = "rotate(90deg)";
  }
  else if (time == "10:00"){
    document.getElementById("ten dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("ten dash").style.transform = "rotate(-55.5deg)";
  }
  else if (time == "11:00"){
    document.getElementById("eleven dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eleven dash").style.transform = "rotate(-25.5deg)";
  }
}

else if (when == "pm"){
  if (time == "12:00"){
    document.getElementById("twelve dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("twelve dash2").style.transform = "rotate(-90deg)";
  }
  else if (time == "1:00"){
    document.getElementById("one dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("one dash2").style.transform = "rotate(25.5deg)";
  }
  else if (time == "2:00"){
    document.getElementById("two dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("two dash2").style.transform = "rotate(55.5deg)";
  }
  else if (time == "3:00"){
    document.getElementById("three dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("three dash2").style.transform = "rotate(90deg)";
  }
  else if (time == "4:00"){
    document.getElementById("four dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("four dash2").style.transform = "rotate(-90deg)";
  }
  else if (time == "5:00"){
    document.getElementById("five dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("five dash2").style.transform = "rotate(25.5deg)";
  }
  else if (time == "6:00"){
    document.getElementById("six dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("six dash2").style.transform = "rotate(-90deg)";
  }
  else if (time == "7:00"){
    document.getElementById("seven dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("seven dash2").style.transform = "rotate(25.5deg)";
  }
  else if (time == "8:00"){
    document.getElementById("eight dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eight dash2").style.transform = "rotate(55.5deg)";
  }
  else if (time == "9:00"){
    document.getElementById("nine dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("nine dash2").style.transform = "rotate(90deg)";
  }
  else if (time == "10:00"){
    document.getElementById("ten dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("ten dash2").style.transform = "rotate(-55.5deg)";
  }
  else if (time == "11:00"){
    document.getElementById("eleven dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eleven dash2").style.transform = "rotate(-25.5deg)";
  }
}


var d = new Date();
var n = d.getDay()
if (n == 0){
  document.getElementById("sunday").innerHTML = document.getElementById("sunday").innerHTML + "<br>" + time + " " + inputValue;
}
else if(n == 1){
  document.getElementById("monday").innerHTML = document.getElementById("monday").innerHTML + "<br>" + time + " " + inputValue;
}
else if(n == 2){
  document.getElementById("tuesday").innerHTML = document.getElementById("tuesday").innerHTML + "<br>" + time + " " + inputValue;
}
else if(n == 3){
  document.getElementById("wednesday").innerHTML = document.getElementById("wednesday").innerHTML + "<br>" + time + " " + inputValue;
}
else if(n == 4){
  document.getElementById("thursday").innerHTML = document.getElementById("thursday").innerHTML + "<br>" + time + " " + inputValue;
}
else if(n == 5){
  document.getElementById("friday").innerHTML = document.getElementById("friday").innerHTML + "<br>" + time + " " + inputValue;
}
else if(n == 6){
  document.getElementById("saturday").innerHTML = document.getElementById("saturday").innerHTML + "<br>" + time + " " + inputValue;
}

}

//function time(){
//  alert("What time do you want to do this task?")
  //takes input for hour and am or pm (using select)
//}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.className = "item";
  $('<input type="checkbox" value="1"/>').appendTo(li);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");  //works
  } else {
    document.getElementById("list").appendChild(li);
    time = prompt("What time do you want to do this task? (ex. 5:00, 6:00)");
    console.log(time);
    when = prompt("am or pm?")
    alert("You want to to complete" + " " + inputValue + " at " + time + when);
    //takes input for hour and am or pm (using select)
  }

  addTask();
  loadClock();

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      div = this.parentElement;
      console.log(div);
      if (div == twelve){
        twelve.style.visibility = 'hidden';
      }
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
     div.style.display = "none";
  }
}

function loadClock() {
// grab the hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const date = document.querySelectorAll('.date');
date.textContent = new Date().getDate();
function setDate() {
  const now = new Date();
  // seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // minutes
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  // hours
  const hours = now.getHours();
  const hoursDegree = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);
};

function splitTime(){
  var days_work = prompt("How many days do you want to spend on this?");
  console.log(days_work);
  var hours_work = prompt("How many total hours do you want to work on this?")
  console.log(hours_work);

  if (days_work > 1){
    var total_time = (hours_work/days_work);
    if (total_time<1){
      alert("Spend " + total_time*100 + " minutes each day doing this.");
    }
    else{
      alert("Spend " + total_time + " hours each day doing this.");
    }
  }
  else if (days_work = 1){
    if (hours_work<1){
      alert("Get it done in one go!");
    }
    else {
      var intervals = prompt("That's a lot for one day... do you want the time split into intervals?");
      if (intervals == "yes"){
        hours_work = (hours_work/4)*100;
        alert("Spend " + hours_work + " minutes on this at a time.");
      }
      else {
        alert("Good luck! Make sure you don't overwork yourself.")
      }
    }
  }
  var add = prompt("Do you want this added to your calendar?");
}


window.onload = loadClock();

//monthly cal
function acti(){
if (document.getElementById("mon").value == "day1"){
  document.getElementById("hi").className = "active";
  }

else if (document.getElementById("mon").value == "day2"){
  document.getElementById("hi2").className = "active";
  }

else if (document.getElementById("mon").value == "day3"){
  document.getElementById("hi3").className = "active";
    }

else if (document.getElementById("mon").value == "day4"){
  document.getElementById("hi4").className = "active";
    }

else if (document.getElementById("mon").value == "day5"){
      document.getElementById("hi5").className = "active";
        }

else if (document.getElementById("mon").value == "day6"){
      document.getElementById("hi6").className = "active";
        }

else if (document.getElementById("mon").value == "day7"){
      document.getElementById("hi7").className = "active";
        }

else if (document.getElementById("mon").value == "day8"){
        document.getElementById("hi8").className = "active";
        }

else if (document.getElementById("mon").value == "day9"){
        document.getElementById("hi9").className = "active";
        }
else if (document.getElementById("mon").value == "day10"){
        document.getElementById("hi10").className = "active";
        }
else if (document.getElementById("mon").value == "day11"){
          document.getElementById("hi11").className = "active";
        }
else if (document.getElementById("mon").value == "day12"){
        document.getElementById("hi12").className = "active";
        }
else if (document.getElementById("mon").value == "day13"){
        document.getElementById("hi13").className = "active";
        }
else if (document.getElementById("mon").value == "day14"){
        document.getElementById("hi14").className = "active";
      }
else if (document.getElementById("mon").value == "day15"){
                document.getElementById("hi15").className = "active";
              }
else if (document.getElementById("mon").value == "day16"){
              document.getElementById("hi16").className = "active";
              }
else if (document.getElementById("mon").value == "day17"){
              document.getElementById("hi17").className = "active";
              }
else if (document.getElementById("mon").value == "day18"){
              document.getElementById("hi18").className = "active";
            }
else if (document.getElementById("mon").value == "day19"){
                      document.getElementById("hi19").className = "active";
                    }
else if (document.getElementById("mon").value == "day20"){
                    document.getElementById("hi20").className = "active";
                    }
else if (document.getElementById("mon").value == "day21"){
                    document.getElementById("hi21").className = "active";
                    }
else if (document.getElementById("mon").value == "day22"){
                    document.getElementById("hi22").className = "active";
                  }
else if (document.getElementById("mon").value == "day23"){
                            document.getElementById("hi23").className = "active";
                          }
else if (document.getElementById("mon").value == "day24"){
                          document.getElementById("hi24").className = "active";
                          }
else if (document.getElementById("mon").value == "day25"){
                          document.getElementById("hi25").className = "active";
                          }
else if (document.getElementById("mon").value == "day26"){
                          document.getElementById("hi26").className = "active";
                        }
else if (document.getElementById("mon").value == "day27"){
                          document.getElementById("hi27").className = "active";
                                                  }
else if (document.getElementById("mon").value == "day28"){
                          document.getElementById("hi28").className = "active";
                                                  }
else if (document.getElementById("mon").value == "day29"){
    document.getElementById("hi29").className = "active";
                                                }
else if (document.getElementById("mon").value == "day30"){
    document.getElementById("hi30").className = "active";
                                                                                                  }
else if (document.getElementById("mon").value == "day31"){
    document.getElementById("hi31").className = "active";
                                                                                                }
}

function deacti(){
if (document.getElementById("mon").value == "day1"){
  document.getElementById("hi").className = "nactive";
  }

else if (document.getElementById("mon").value == "day2"){
  document.getElementById("hi2").className = "nactive";
  }

else if (document.getElementById("mon").value == "day3"){
  document.getElementById("hi3").className = "nactive";
    }

else if (document.getElementById("mon").value == "day4"){
  document.getElementById("hi4").className = "nactive";
    }

else if (document.getElementById("mon").value == "day5"){
      document.getElementById("hi5").className = "nactive";
        }

else if (document.getElementById("mon").value == "day6"){
      document.getElementById("hi6").className = "nactive";
        }

else if (document.getElementById("mon").value == "day7"){
      document.getElementById("hi7").className = "nactive";
        }

else if (document.getElementById("mon").value == "day8"){
        document.getElementById("hi8").className = "nactive";
        }

else if (document.getElementById("mon").value == "day9"){
        document.getElementById("hi9").className = "nactive";
        }
else if (document.getElementById("mon").value == "day10"){
        document.getElementById("hi10").className = "nactive";
        }
else if (document.getElementById("mon").value == "day11"){
          document.getElementById("hi11").className = "nactive";
        }
else if (document.getElementById("mon").value == "day12"){
        document.getElementById("hi12").className = "nactive";
        }
else if (document.getElementById("mon").value == "day13"){
        document.getElementById("hi13").className = "nactive";
        }
else if (document.getElementById("mon").value == "day14"){
        document.getElementById("hi14").className = "nactive";
      }
else if (document.getElementById("mon").value == "day15"){
                document.getElementById("hi15").className = "nactive";
              }
else if (document.getElementById("mon").value == "day16"){
              document.getElementById("hi16").className = "nactive";
              }
else if (document.getElementById("mon").value == "day17"){
              document.getElementById("hi17").className = "nactive";
              }
else if (document.getElementById("mon").value == "day18"){
              document.getElementById("hi18").className = "nactive";
            }
else if (document.getElementById("mon").value == "day19"){
                      document.getElementById("hi19").className = "nactive";
                    }
else if (document.getElementById("mon").value == "day20"){
                    document.getElementById("hi20").className = "nactive";
                    }
else if (document.getElementById("mon").value == "day21"){
                    document.getElementById("hi21").className = "nactive";
                    }
else if (document.getElementById("mon").value == "day22"){
                    document.getElementById("hi22").className = "active";
                  }
else if (document.getElementById("mon").value == "day23"){
                            document.getElementById("hi23").className = "nactive";
                          }
else if (document.getElementById("mon").value == "day24"){
                          document.getElementById("hi24").className = "nactive";
                          }
else if (document.getElementById("mon").value == "day25"){
                          document.getElementById("hi25").className = "nactive";
                          }
else if (document.getElementById("mon").value == "day26"){
                          document.getElementById("hi26").className = "nactive";
                        }
else if (document.getElementById("mon").value == "day27"){
                          document.getElementById("hi27").className = "nactive";
                                                  }
else if (document.getElementById("mon").value == "day28"){
                          document.getElementById("hi28").className = "nactive";
                                                  }
else if (document.getElementById("mon").value == "day29"){
    document.getElementById("hi29").className = "nactive";
                                                }
else if (document.getElementById("mon").value == "day30"){
    document.getElementById("hi30").className = "mactive";
                                                                                                  }
else if (document.getElementById("mon").value == "day31"){
    document.getElementById("hi31").className = "nactive";
                                                                                                }
}

//progress js

var x = 50;
var numPoints = 0;
function button(){
  alert("Congratulations! You just won 15 points!");
  var c = document.getElementById("myPoints");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, x, 100);
  x += 50;
  numPoints += 15;
  document.getElementById("woo2").innerHTML = ( numPoints);

  var stickers = ["CROWN", "DIAMOND", "THUMB", "STAR", "CASH", "KEY", "TROPHY", "SMILE", "CHECK", "CUPCAKE"];
  y = 150;
  for (i = 0; i < stickers.length; i++) {
    if (numPoints == y) {
      alert("You just won an achievement sticker!");
      ctx.fillStyle = "#e3dede";
      ctx.fillRect(0, 0, 500, 100);
      x = 50;
      document.getElementById(stickers[i]).style.display = 'inline-block';
    }
    y += 150;
   }

}


//stay connected js
//var modal = document.getElementById('myModal');
// Get the button that opens the modal
//var btn = document.getElementById("myBt1n");
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal
//btn.onclick = function() {
    //modal.style.display = "block";
//}
// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
    //modal.style.display = "none";
//}
// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //  if (event.target == modal) {
  //      modal.style.display = "none";
  //  }
//}

//for some reason tasks print in one paragraph
