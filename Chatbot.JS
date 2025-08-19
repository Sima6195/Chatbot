
function talk() {
    var know = {
        "Hello": "Hi there!",
        "Who are you": "Hello, Alice here.",
        "How are you": "Good :)",
        "What can I do for you": "Please give us a follow & like.",
        "Your followers": "I have my family of 5000 members. I don't have followers; I have a supportive family.",
        "ok": "Thank you so much!",
        "Bye": "Okay! We'll meet soon."
    };

    var user = document.getElementById('userBox').value;
    var chatLog = document.getElementById('chatLog');

    if (user in know) {
        chatLog.innerHTML = "You: " + user + "<br>" + "Bot: " + know[user];
    } else {
        chatLog.innerHTML = "You: " + user + "<br>" + "Bot: Sorry, I didn't understand.";
    }
}