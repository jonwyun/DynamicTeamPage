// Bio Pop-up Section

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
        bio : 'August 15, 1969',
        skill : 'some bio info',
        picture : 'images/logo-apple.svg'
    },

    {
        name : 'Mohamed Zarandah',
        role : 'Designer',
        bio : 'John',    
        skill : 'some bio info',
        picture : 'images/logo-apple.svg'  
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