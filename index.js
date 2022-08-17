document.querySelector("form").addEventListener("submit", submitData);

var matchData = JSON.parse(localStorage.getItem("schedule")) || [];
function submitData(event) {
  event.preventDefault();
  var num = document.getElementById("matchNum").value;
  var teamA = document.getElementById("teamA").value;
  var teamB = document.getElementById("teamB").value;
  var date = document.getElementById("date").value;
  var venue = document.getElementById("venue").value;

  if (num < 1) {
    alert("Please select positive match no");
  } else {
    var md = JSON.parse(localStorage.getItem("schedule")) || [];
    var flag = matchData.filter(function (elm) {
      return num == elm.MatchNum;
    });
    if (flag.length >= 1) {
      alert("please select unique Match No");
    } else {
      var Matchobj = {
        MatchNum: num,
        TeamA: teamA,
        TeamB: teamB,
        Date: date,
        Venue: venue,
      };
      matchData.push(Matchobj);
      localStorage.setItem("schedule", JSON.stringify(matchData));
      matchNum.value = "";
    }
  }
}
