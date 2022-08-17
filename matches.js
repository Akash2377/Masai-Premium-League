var MatchData = JSON.parse(localStorage.getItem("schedule")) || [];
window.addEventListener("load", function () {
  displayData(MatchData);
});
function displayData(MatchData) {
  document.querySelector("tbody").innerText = "";
  MatchData.map(function (ele) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    td1.innerText = ele.MatchNum;
    td2.innerText = ele.TeamA;
    td3.innerText = ele.TeamB;
    td4.innerText = ele.Date;
    td5.innerText = ele.Venue;
    td6.innerText = "favorite";
    td6.style.cursor = "pointer";
    td6.setAttribute("class", "fav");
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
    td6.addEventListener("click", function () {
      addFav(ele);
    });
  });
}
var favorite = JSON.parse(localStorage.getItem("favourites")) || [];
function addFav(elm) {
  var flag = favorite.filter(function (element) {
    return elm.MatchNum == element.MatchNum;
  });
  if (flag.length == 0) {
    favorite.push(elm);
    console.log(elm);
    localStorage.setItem("favourites", JSON.stringify(favorite));
  } else {
    alert("Already present at favorite matches");
  }
}
function handleFilter() {
  var temp = document.getElementById("filterVenue").value;
  var filteredList = MatchData.filter(function (el) {
    if (temp == "none") {
      return true;
    } else {
      return el.Venue == temp;
    }
  });
  displayData(filteredList);
}
