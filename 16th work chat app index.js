var list = [];
var div = document.getElementById('message');

var autoReplies = [
    "Hey",
    "Hello",
    "Where are you?",
    "How are you?",
    "what are you doing?",
    "I am fine!",
];

function handleSend() {
    var textMsg = document.getElementById('msg');
    if (textMsg.value !== "") {
        list.push({ text: textMsg.value, admin: false });
        
        handleDisplay();

        textMsg.value = "";
        setTimeout(() => {
            let getMsgIndex = Math.floor(Math.random() * autoReplies.length);
            list.push({ text: autoReplies[getMsgIndex], admin: true });
            handleDisplay();
        }, 1000);
    }
}

function handleDisplay() {
    div.innerHTML = '';
    for (count = 0; count < list.length; count++) {
        div.innerHTML += `<div class="flex ${list[count].admin ? 'self-start' : 'self-end'} bg-white inline-block p-2 px-6 rounded-lg border border-black mx-2 mt-2">${list[count].text}</div>`;
    }
}