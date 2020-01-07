var techclubs = [
    {
  Name: "Drama Club",
  Logo:"./pclubs/drama/logo.jpg",
  Founded:"2006",
  Description:"Joining drama as a student consultant is a great way to boost your CV with relevant work- and consulting experience, while expanding your professional network. Our consultants get a hands on experience working with clients on a wide range of topics and issues employing strategies to achieve the the firms objective. Moreover, you will expand your social network by meeting like-minded students from different countries, study backgrounds and universities.",
  PORs: [
  {
  Photo:"./pclubs/drama/prez.jpg",
  Title: "Coordinator",
  Name: "Shashank Kataria",
  Phone: "+91 95407 03800",
  Email: "shashankkataria@hotmail.com"
  },
  {
  Photo:"./pclubs/drama/vprez.jpg",
  Title: "Sub Coordinator",
  Name: "Krishna Dutta",
  Phone: "+91 81691 48620",
  Email: "mpatra@drama.org"
  }]},
    {
      Name: "Literary and Debating Club",
      Logo:"./pclubs/ldc/logo.jpg",
      Founded:"2019",
      Description:"We’re a bunch of avid readers, funny writers, debaters, loony comedians and more. We value the ability to take a joke higher than the ability to crack one. We find humour in the strangest little things. As far as mixing work and play is concerned, we have thin lines between the two.",
      PORs: [
      {
      Photo:"./pclubs/ldc/Prez.png",
      Title: "Coordinator",
      Name: "Atharv Kirtikar",
      Phone: "+91 89752 97801",
      Email: "f20180107@goa.bits-pilani.ac.in"
      },
    {
    Photo:"./pclubs/ldc/Prez.png",
    Title: "Literary Head",
    Name: "Atharv Phadnis ",
    Phone: "+91 7350 95005",
    Email: "asphadnis1@gmail.com"
    },
    {
    Photo:"./pclubs/ldc/Prez.png",
    Title: "Coordinator",
    Name: "Aditya Sunkara",
    Phone: "+91 97915 13743",
    Email: "f20180316@goa.bits-pilani.ac.in"
    }]}

];


function Obs(club){
    return `
    <div class="option active" style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);">
                     <div class="shadow"></div>
                     <div class="label">
                        <div class="icon">
                           <i class="fas fa-walking"></i>
                        </div>
                        <div class="info">
                           <div class="main">Blonkisoaz</div>
                           <div class="sub">Omuke trughte a otufta</div>
                        </div>
                     </div>
                  </div>
                  <div class="option active" style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);">
                     <div class="shadow"></div>
                     <div class="label">
                        <div class="icon">
                           <i class="fas fa-walking"></i>
                        </div>
                        <div class="info">
                           <div class="main">Blonkisoaz</div>
                           <div class="sub">Omuke trughte a otufta</div>
                        </div>
                     </div>
                  </div>
                  <div class="option" style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);">
                     <div class="shadow"></div>
                     <div class="label">
                        <div class="icon">
                           <i class="fas fa-snowflake"></i>
                        </div>
                        <div class="info">
                           <div class="main">Oretemauw</div>
                           <div class="sub">Omuke trughte a otufta</div>
                        </div>
                     </div>
                  </div>
                  <div class="option" style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);">
                     <div class="shadow"></div>
                     <div class="label">
                        <div class="icon">
                           <i class="fas fa-sun"></i>
                        </div>
                        <div class="info">
                           <div class="main">Inatethi</div>
                           <div class="sub">Omuke trughte a otufta</div>
                        </div>
                     </div>
    `

}

document.getElementById("sessions").innerHTML = `
    ${techclubs.map(Obs).join('')}
`