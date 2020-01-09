Nav =`
<div id="mySidebar" class="sidebar" style="height: 100%; width: 0; position: fixed;z-index: 999;top: 0;left: 0;overflow-x: hidden;padding-top: 60px;transition: 0.5s;">
<div id="background" style="background-color: rgba(51, 51, 51, 0.95);">
</div>
<a style="width: 0%;" href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<a href="index.html">Index</a>
<a href="events.html">Events</a>
<a href="observations.html">Observations</a>
<a href="about.html">About</a>
</div>

<div id="main">
  <button style="font-size: 20px;  cursor: pointer;  background-color: rgba(255, 0, 0, 0);  color: white;  padding: 10px 15px;  border: none;" class="openbtn" onclick="openNav()">&#9776; Sidebar</button>
</div>
`
document.getElementById("nav-barr").innerHTML = Nav;
document.getElementById("footer").innerHTML = `<p style="padding:5px;">© 2020 Copyright: Footer</p>`;

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 
