const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
    const text = messageInput.value;
    if (text === '') return; //만약 input 의 value가 아무것도 없다면 아래의 코드를 실행하지 않고 return함

    // 내 메시지 추가
    const myMessage = document.createElement('div');
    myMessage.className = 'message-container sent-container'; //my message의 클래스 네임을 추가함
    myMessage.innerHTML = `
        <div class="name">나</div>
        <div class="message sent">${text}</div>
    `; 
    // my message의 html 형식을 추가함.

    // ` = 백틱 백틱으로 문자열 + ${변수} 등을 묶을 경우 가독성이 뛰어남
    // 보통 위에처럼 html 만들때 자주 쓰고 
    // const name = "준호";
    // const massage = `${name}형 수업 너무 재미있어요`; 등의 방식으로 ""와 + 를 쓰는 것 보다 편함

    chatBox.appendChild(myMessage); // chatbox의 자식으로 mymessage를 추가함 (appendchild의 역할)
    chatBox.scrollTop = chatBox.scrollHeight; //chatbox의 현재 스크롤 위치(scrolltop)를 내부의 크기 만큼(scrollheight)로 설정하여 스크롤의 제일 아래로 가게 설정
    messageInput.value = ''; //input의 value를 다시 아무것도 없게 되돌림 (전송했으니까)

setTimeout(() => {
    const reply = "ㅇㅋ여";

    const replyMessage = document.createElement('div');
    replyMessage.className = 'message-container received-container';
    replyMessage.innerHTML = `
        <div class="name">조아람</div>
        <div class="message received">${reply}</div>
    `;
    chatBox.appendChild(replyMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}, 1000); 

//settiemout를 이용하여 1초 (1000)뒤에 조아람의 답장이 오도록 설정.

}