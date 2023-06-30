let visitorScore = 0;
let homeScore = 0;

let visitorScoreElement = document.getElementById("visitor-score");
let homeScoreElement = document.getElementById("home-score");

function incrementScore(team, increment) {
    if (team === 'visitor') {
        visitorScore += increment;
        visitorScoreElement.textContent = visitorScore;
    } else if (team === 'home') {
        homeScore += increment;
        homeScoreElement.textContent = homeScore;
    }
}
