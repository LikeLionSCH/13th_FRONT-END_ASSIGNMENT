const input = document.querySelector('input');
const sendBtn = document.querySelector('sendBtn');
const messagesContainer = document.querySelector('.chat-messages');

function sendMessage() {
const text = input.value.trim();

const message = document.createElement('div');
message.classList.add('message', 'message-right');
message.innerText = text;
messagesContainer.appendChild(message);
input.value = ''; // 입력창 초기화

// 스크롤 하단으로 이동
messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function enter(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

window.onload = function () {
    const input = document.querySelector('input');
    const sendBtn = document.querySelector('#sendBtn');
  
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    sendBtn.addEventListener('click', () => {
      sendMessage();
    });
  };
  