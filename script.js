// 1. Display selected feature
function showFeature(feature) {

    const workspace = document.getElementById("workspace");

    // AI CHAT
    if (feature === "chat") {
        workspace.innerHTML = `
            <h2>🤖 AI Study Chat</h2>
            <input id="question"
            placeholder="Ask a question about AI, HTML or JavaScript">

            <button onclick="askQuestion()">Ask Question</button>

            <p id="answer"></p>
        `;
    }

    // QUIZ GENERATOR
    else if (feature === "quiz") {
        workspace.innerHTML = `
            <h2>📝 Quick Quiz</h2>

            <p>What does HTML stand for?</p>

            <button onclick="checkAnswer('correct')">
            HyperText Markup Language
            </button>

            <button onclick="checkAnswer('wrong')">
            HighText Machine Language
            </button>

            <p id="result"></p>
        `;
    }

    // STUDY PLANNER
    else if (feature === "planner") {
        workspace.innerHTML = `
            <h2>📅 Study Planner</h2>

            <input id="subject"
            placeholder="Enter your subject">

            <input id="hours" type="number"
            placeholder="Enter study hours">

            <button onclick="createPlan()">Create Plan</button>

            <p id="plan"></p>
        `;
    }

    // NOTES MAKER
    else if (feature === "notes") {
        workspace.innerHTML = `
            <h2>📚 Notes Maker</h2>

            <textarea id="topic"
            placeholder="Enter your topic or notes"></textarea>

            <button onclick="makeNotes()">Create Notes</button>

            <p id="notes"></p>
        `;
    }
}


// 2. AI CHAT FUNCTION
function askQuestion() {

    let question = document
        .getElementById("question")
        .value.toLowerCase();

    let answer = "Sorry, I don't know that topic yet. Try HTML, AI or JavaScript.";

    if (question.includes("html")) {
        answer = "HTML stands for HyperText Markup Language. It is used to create the structure of websites.";
    }

    else if (question.includes("javascript")) {
        answer = "JavaScript is a programming language used to make websites interactive.";
    }

    else if (question.includes("ai")) {
        answer = "AI stands for Artificial Intelligence. It allows machines to perform tasks that normally require human intelligence.";
    }

    document.getElementById("answer").innerText = answer;
}


// 3. QUIZ FUNCTION
function checkAnswer(choice) {

    if (choice === "correct") {
        document.getElementById("result").innerText =
            "🎉 Correct Answer! Well done!";
    }

    else {
        document.getElementById("result").innerText =
            "❌ Wrong Answer! Try again.";
    }
}


// 4. STUDY PLANNER FUNCTION
function createPlan() {

    let subject = document.getElementById("subject").value;

    let hours = Number(document.getElementById("hours").value);

    if (subject.trim() === "" || hours <= 0) {
        document.getElementById("plan").innerText =
            "Please enter a subject and valid study hours.";
        return;
    }

    document.getElementById("plan").innerText =
        "📖 Your Study Plan: Study " + subject +
        " for " + hours + " hours. Remember to take short breaks!";
}


// 5. NOTES MAKER FUNCTION
function makeNotes() {

    let topic = document.getElementById("topic").value;

    if (topic.trim() === "") {
        document.getElementById("notes").innerText =
            "Please enter a topic first.";
        return;
    }

    document.getElementById("notes").innerText =
        "📚 Your Notes: " + topic +
        ". Revise the important definitions, concepts and examples.";
}

