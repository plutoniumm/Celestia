var coordinators = [
    {
  backgrounds: "./img/allnight.jpeg",
  Name:"All Night Observations",
  post: "fas fa-moon",
},
{
    backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    Name:"Star Party",
    post: "fas fa-sun",
},
{
    backgrounds: "./img/eclipse.jpeg",
    Name:"Eclipses",
    post: "far fa-circle",
},
{
    backgrounds: "./img/meteors.jpeg",
    Name:"Meteor Showers",
    post: "fas fa-meteor",
},
{
    backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    Name:"Celestial Bodies",
    post: "fas fa-globe-europe",
}

];


function Obs(coordinators){
    return `
    <div>
            <p>${coordinators.Name} - ${coordinators.post}</p>
    </div>
    `

}

document.getElementById("cordis").innerHTML = `
    ${coordinators.map(Obs).join('')}
`