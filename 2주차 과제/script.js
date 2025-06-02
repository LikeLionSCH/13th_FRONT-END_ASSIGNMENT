const chatContent = document.getElementById('chat-content');
const input = document.getElementById('chat-input');
let botTimeout;
let lastUserMinute = null;
let lastUserTimestamp;

function getCurrentTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
}

function appendMessage(text, type) {
  const now = new Date();
  const currentMinute = now.getMinutes();
  const time = getCurrentTime();

  const msg = document.createElement('div');
  msg.classList.add('message', type);

  const timeDiv = document.createElement('div');
  timeDiv.classList.add('timestamp');
  timeDiv.textContent = time;

  if (type === 'bot') {
    const inner = document.createElement('div');
    inner.classList.add('bot-inner');

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const textBlock = document.createElement('div');
    textBlock.classList.add('bot-text');

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = '조아람';

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = text;

    textBlock.appendChild(name);
    textBlock.appendChild(bubble);

    inner.appendChild(profile);
    inner.appendChild(textBlock);
    msg.appendChild(inner);
    msg.appendChild(timeDiv);

  } else {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = text;

    msg.appendChild(timeDiv);
    msg.appendChild(bubble);

    if (lastUserMinute === currentMinute && lastUserTimestamp) {
      lastUserTimestamp.remove();
    }

    lastUserMinute = currentMinute;
    lastUserTimestamp = timeDiv;
  }

  chatContent.appendChild(msg);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  appendMessage(text, 'user');
  input.value = '';

  clearTimeout(botTimeout);
  botTimeout = setTimeout(() => {
    const replies = ["아람아 배고파", "아람아 나 힘들어", "아람아 생마차 ㄱ?", "아람아 연구실 ㄱ?", "아람아 세미나 준비했어?","기회의 아람카 아카"];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    appendMessage(reply, 'bot');
  }, 1000);
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
