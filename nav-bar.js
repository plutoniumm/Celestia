Nav =`
<div id="mySidebar" class="sidebar" style="height: 100%; width: 0; position: fixed;z-index: 999;top: 0;left: 0;background-color: rgba(255, 0, 0, 0);;overflow-x: hidden;padding-top: 60px;transition: 0.5s;">
  <ul>
  <li><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <li><a>About</a></li>
  <li><a>Services</a></li>
  <li><a>Clients</a></li>
  <li><a>Contact</a></li>
  </ul>
</div>

<div id="main">
  <button style="font-size: 20px;  cursor: pointer;  background-color: rgba(255, 0, 0, 0);  color: white;  padding: 10px 15px;  border: none;" class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>
  <h2>Collapsed Sidebar</h2>
  <p>Content...</p>
</div> 
`
document.getElementById("nav-barr").innerHTML = Nav;

function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 