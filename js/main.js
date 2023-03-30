// Lightbox

let buttons = document.querySelectorAll(".button");
let lightboxCon = document.querySelector(".lightbox");

function bioPopup() {
    lightboxCon.classList.toggle("slide-toggle");
};

buttons.forEach(button => button.addEventListener("click", bioPopup, false));	

// Object

let team = [

    {
        name : 'Jong Woog Yun',
        role : 'Developer',
        bio : 'Jong Woog Yun, also known as "Jon," was born in Korea and moved to Canada to study Interactive Media Design at Fanshawe College. With extensive experience as a digital marketer and project manager for website development projects, he initially considered himself design-oriented. However, after learning to code, his perspective has shifted. Jon excels at keeping everything organized and this is one reason why he enjoys coding.',
        skill : 'HTML, CSS, Javascript, Maxon Cinema 4D, Adobe After Effects, Adobe Premier Pro, Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe Lightroom, Adobe InDesign',
        picture : 'images/logo-apple.svg'
    },

    {
        name : 'Mohamed Zarandah',
        role : 'Designer',
        bio : 'Mohamed Zarandah, who goes by "Moh," is currently studying to become a web developer and plans to expand his skillset to include UX/UI design and editing. He sees himself as a positive role model for his clients in these fields. As a designer, he takes pride in delivering outstanding work that meets his clients requests, which is why he is passionate about this profession.',    
        skill : 'HTML, CSS, Javascript, Maxon Cinema 4D, Adobe After Effects, Adobe Premier Pro, Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe Lightroom, Adobe InDesign',
        picture : 'images/logo-orange.svg'
    }
]

function getTeamData() {
    let teamMember = this.dataset.member;
    console.log(team[teamMember]);

    document.querySelector('.member-name').textContent = team[teamMember].name;
    document.querySelector('.member-role').textContent = team[teamMember].role;
    document.querySelector('.member-bio').textContent = team[teamMember].bio;
    document.querySelector('.member-skill').textContent = team[teamMember].skill;
    document.querySelector('.member-picture').src = team[teamMember].picture;
}

buttons.forEach(button => button.addEventListener("click", getTeamData));	