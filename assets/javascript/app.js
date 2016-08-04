var watch = {
    number: 30,
    run: function() {
        counter = setInterval(watch.increment, 1000);
    },
    increment: function() {
        watch.number--;
        $('#show-number').html('<h2>' + watch.number + '</h2>');
        if (watch.number === 0) {
            watch.stop();
        }
    },
    stop: function() {
        clearInterval(counter);
    }
};

var quiz = [{
    question: "What is the James Bond Movie Title?",
    picture: "assets/images/question_1.jpg",
    choices: ['Lightening ball', 'Thunderball', 'Speedball', 'Thunderdome'],
    correct: 1,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_2.jpg',
    choices: ['Man off a wire', 'Skydive', 'Falling Spies', 'Skyfall'],
    correct: 3,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_3.jpg',
    choices: ['Loved by Russia', 'Spy Heart', 'From Russia with Love', 'Soviet Love'],
    correct: 2,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_4.jpg',
    choices: ['GoldenEye', 'EyeSpy', 'Gold Contact', '24 Hour Surveillance'],
    correct: 0,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_5.jpg',
    choices: ['Kill Card', 'Spy Contract', 'Spy Drive', 'Licence to Kill'],
    correct: 3,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_6.jpg',
    choices: ['Two Funerals', 'Two Spies and a Funeral', 'You Only Live Twice', 'Dead Together'],
    correct: 2,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_7.jpg',
    choices: ['Die Next Week', 'Two Kills a Month', 'Die Another Day', 'Monthly Contract'],
    correct: 2,
}, {
    question: "What is the James Bond Movie Title?",
    picture: 'assets/images/question_8.jpg',
    choices: ['Casino Royale', 'Royale Poker', 'Casino King Pin', 'King of Spies'],
    correct: 0,
}];

var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;
var bondPic = $('<img>');

$('input[name="choice"]').hide;

function nextQuest() {
    $('#questions').text(quiz[counter].question);
    bondPic.attr('src', quiz[counter].picture)
    $('#bonds').append(bondPic)
    $('#answer0').text(quiz[counter].choices[0]);
    $('#answer1').text(quiz[counter].choices[1]);
    $('#answer2').text(quiz[counter].choices[2]);
    $('#answer3').text(quiz[counter].choices[3]);
}

function validate() {
    if ($('input').is(':checked')) {
        nextQuest();
    } else {
        alert("PICK A TITLE!");
        counter--;
    }
}

nextQuest();
$('#nextBtn').on('click', function() {
    var answer = ($('input[name="choice"]:checked').val());
    if (answer == quiz[counter].correct) {
        numCorrect++;
    }
    counter++;


    if (counter >= numQuestions) {
        document.getElementById('main').innerHTML = "You saved " + numCorrect + " out of " + numQuestions + " hostages!";
        return;
    }
    validate();
    $('input[name="choice"]').prop('checked', false);
});

$('#backBtn').on('click', function() {
    if (quiz[counter] == 0) {} else {
        numCorrect--;
        counter--;
    }
    nextQuest();
});
