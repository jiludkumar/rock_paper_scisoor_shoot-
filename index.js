let userscore = 0;
let comp_score = 0;
const p = document.getElementById("paper");
const r = document.getElementById("rock");
const sc = document.getElementById("scissor");
const us = document.getElementById("user");
const cs = document.getElementById("computer");
const final = document.getElementById("result");


window.onload = function () {

    main();
}

function game(user_choice) {
    let computer_choose = computer_choice();
    let test = user_choice + computer_choose;
    switch (test) {
        case "pr":
        case "rsc":
        case "scp":
            win(test, user_choice);
            break;
        case "rp":
        case "scr":
        case "psc":
            lose(test, user_choice);
            break;
        case "pp":
        case "scsc":
        case "rr":
            draw(user_choice);
            break;
    }

}



function main() {

    p.addEventListener('click', function () {
        game("p");
    });
    r.addEventListener('click', function () {
        game("r");
    });
    sc.addEventListener('click', function () {
        game("sc");
    });

}



function computer_choice() {
    const choice = ['r', 'p', 'sc'];
    let random_no = Math.floor(Math.random() * 3);
    return choice[random_no];
}

function makeitfull(user_choice) {
    if (user_choice === "p") {
        return "paper";
    } else if (user_choice === "r") {
        return "rock";
    } else {
        return "scissor";

    }

}


function win(test, user_choice) {
    if (test === "pr") {
        userscore++;
        let final_result = "Paper beat Rock!!";
        us.innerHTML = "User Score :" + userscore;
        final.innerHTML = "User won..." + final_result;
        let full;
        full = makeitfull(user_choice);
        console.log(full);

        document.getElementById(full).classList.add('green_glow');
        setTimeout(function () {
            document.getElementById(full).classList.remove('green_glow')
        }, 300);
    } else if (test === "rsc") {
        let final_result = "Rock beat Scissor!!";
        userscore++;
        us.innerHTML = "User Score :" + userscore;
        final.innerHTML = "User won..." + final_result;
        let full;
        full = makeitfull(user_choice);
        document.getElementById(full).classList.add('green_glow');
        setTimeout(function () {
            document.getElementById(full).classList.remove('green_glow')
        }, 300);
    } else {

        userscore++;
        let final_result = "Scissor beat Paper!!";
        us.innerHTML = "User Score :" + userscore;
        final.innerHTML = "User won..." + final_result;
        let full;
        full = makeitfull(user_choice);
        document.getElementById(full).classList.add('green_glow');
        setTimeout(function () {
            document.getElementById(full).classList.remove('green_glow')
        }, 300);
    }


}

function lose(test, user_choice) {
    if (test === "rp") {
        var final_result = "Paper beat Rock!!";
    } else if (test === "scr") {
        var final_result = "Rock beat Scissor!!";
    } else {
        var final_result = "Scissor beat Paper!!";
    }
    comp_score++;
    cs.innerHTML = "Computer Score:" + comp_score;
    final.innerHTML = "Computer won.. " + final_result;
    let full;
    full = makeitfull(user_choice);
    document.getElementById(full).classList.add('red_glow');
    setTimeout(function () {
        document.getElementById(full).classList.remove('red_glow')
    }, 300);
}




function draw(user_choice) {
    final.innerHTML = "It's a Draw";
    let full;
    full = makeitfull(user_choice);
    document.getElementById(full).classList.add('gray_glow');
    setTimeout(function () {
        document.getElementById(full).classList.remove('gray_glow')
    }, 300);

}





console.log(full);
console.log(document.getElementById(full));