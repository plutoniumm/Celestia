var coordinators = [
    {
  Name:"Venugopalan Iyengar",
  post: "President",
},
{
    Name:"Vidit Parab",
    post: "Vice President",
},
{
    Name:"Saransh Gokhale",
    post: "Treasurer",
},
{
    Name:"Soham Deshpande",
    post: "Sub Coordinator",
},
{
    Name:"Aaditee Juyal",
    post: "Lectures Head",
},
{
    Name:"Avdhoot Bhandare",
    post: "Observations Head",
},
{
    Name:"Harshvardhan C",
    post: "Projects Head",
},
{
    Name:"Devesh Dimble",
    post: "Publicity Head",
},
{
    Name:"Aaditee Juyal",
    post: "Lectures Head",
},
{
    Name:"Shirin Kaushik",
    post: "Vice President <br> SEDS India",
},
{
    Name:"Dhruv Nagpal",
    post: "Projects Head <br> SEDS India",
}

];


function Obs(coordinators){
    return `
    <div class="card">
        <h3 class="title">${coordinators.Name}</h3>
        <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
        </div>
        <h4 class="position">${coordinators.post}</h4>
    </div>
    `

}

document.getElementById("cordis").innerHTML = `
    ${coordinators.map(Obs).join('')}
`