const sendButton = document.querySelector('.send-button');
const messageInput = document.querySelector('.chat-input input');
const chatBody = document.querySelector('.chat-body');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    // 내 메시지 추가
    const myMessage = document.createElement('div');
    myMessage.className = 'message my-message';
    myMessage.innerHTML = `
        ${messageText}
        <div class="time">${getCurrentTime()} </div>
    `;
    chatBody.appendChild(myMessage);

    // 입력창 비우기
    messageInput.value = '';

    // 1초 뒤 상대방 메시지 추가
    setTimeout(() => {
        const otherMessage = document.createElement('div');
        otherMessage.className = 'message other-message';
        otherMessage.innerHTML = `
            답장~.~
            <div class="time">${getCurrentTime()}</div>
        `;
        chatBody.appendChild(otherMessage);

        // 새 메시지로 스크롤 이동
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
});

// 현재 시간 가져오는 함수
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
