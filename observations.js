var observations = [
    {
  backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
  Name:"All Night Observations",
  icon: "fas fa-telescope",
  subtext:"Joining drama as a student consultant is a great way to boost your CV with relevant work- and consulting experience, while expanding your professional network. Our consultants get a hands on experience working with clients on a wide range of topics and issues employing strategies to achieve the the firms objective. Moreover, you will expand your social network by meeting like-minded students from different countries, study backgrounds and universities.",
},
{
    backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    Name:"Star Party",
    icon: "fas fa-sun",
    subtext:"We’re a bunch of avid readers, funny writers, debaters, loony comedians and more. We value the ability to take a joke higher than the ability to crack one. We find humour in the strangest little things. As far as mixing work and play is concerned, we have thin lines between the two.",
},
{
    backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    Name:"Eclipses",
    icon: "far fa-circle",
    subtext:"We’re a bunch of avid readers, funny writers, debaters, loony comedians and more. We value the ability to take a joke higher than the ability to crack one. We find humour in the strangest little things. As far as mixing work and play is concerned, we have thin lines between the two.",
},
{
    backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    Name:"Meteor Showers",
    icon: "fas fa-meteor",
    subtext:"We’re a bunch of avid readers, funny writers, debaters, loony comedians and more. We value the ability to take a joke higher than the ability to crack one. We find humour in the strangest little things. As far as mixing work and play is concerned, we have thin lines between the two.",
},
{
    backgrounds: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    Name:"Celestial Bodies",
    icon: "fas fa-globe-europe",
    subtext:"We’re a bunch of avid readers, funny writers, debaters, loony comedians and more. We value the ability to take a joke higher than the ability to crack one. We find humour in the strangest little things. As far as mixing work and play is concerned, we have thin lines between the two.",
}

];


function Obs(observations){
    return `
    <div class="option active" style="--optionBackground:url('${observations.backgrounds}');">
                     <div class="shadow"></div>
                     <div class="label">
                        <div class="icon">
                           <i class="${observations.icon}"></i>
                        </div>
                        <div class="info">
                           <div class="main">${observations.Name}</div>
                           <div class="sub">${observations.subtext}</div>
                        </div>
                     </div>
                  </div>
    `

}

document.getElementById("sessions").innerHTML = `
    ${observations.map(Obs).join('')}
`