// DOM 요소 가져오기
const input = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');
const messagesContainer = document.querySelector('.chat-messages');

// 전송 버튼 클릭 시
sendButton.addEventListener('click', sendMessage);

// Enter 키 입력도 처리
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 메시지 전송 함수
function sendMessage() {
    const text = input.value.trim();
    if (text === '') return;

    // 사용자의 메시지 생성
    const myMessage = document.createElement('div');
    myMessage.classList.add('message', 'sent');
    myMessage.textContent = text;
    messagesContainer.appendChild(myMessage);

    // 입력창 비우기
    input.value = '';

    // 스크롤 아래로 이동
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 1초 후에 상대방 메시지 응답
    setTimeout(() => {
        const reply = document.createElement('div');
        reply.classList.add('message', 'received');
        reply.textContent = '만나서 반갑습니다~!';
        messagesContainer.appendChild(reply);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}