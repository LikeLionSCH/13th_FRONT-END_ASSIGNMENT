document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.querySelector('.chat-box');
  const textarea = document.querySelector('.chat-input textarea');
  const sendBtn = document.querySelector('.chat-input button');

  // 현재 시간 포맷
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // 메시지 추가 함수
  function appendMessage(text, type) {
    const message = document.createElement('div');
    message.classList.add('message', type);
  
    if (type === 'received') {
      const profile = document.createElement('div');
      profile.classList.add('profile');
      const img = document.createElement('img');
      img.src = 'selfi.png';
      img.alt = '프로필 이미지';
      profile.appendChild(img);
  
      const content = document.createElement('div');
      content.classList.add('message-content');
  
      const name = document.createElement('div');
      name.classList.add('sender-name');
      name.textContent = '홍지민';
  
      const textDiv = document.createElement('div');
      textDiv.classList.add('msg-text');
      textDiv.innerHTML = text.replace(/\n/g, '<br>');
  
      const timeDiv = document.createElement('div');
      timeDiv.classList.add('msg-time');
      timeDiv.textContent = getCurrentTime();
  
      content.appendChild(name);
      content.appendChild(textDiv);
      content.appendChild(timeDiv);
  
      message.appendChild(profile);
      message.appendChild(content);
    } else {
      const textDiv = document.createElement('div');
      textDiv.classList.add('msg-text');
      textDiv.innerHTML = text.replace(/\n/g, '<br>');
  
      const timeDiv = document.createElement('div');
      timeDiv.classList.add('msg-time');
      timeDiv.textContent = getCurrentTime();
  
      const readDiv = document.createElement('div');
      readDiv.classList.add('read-status');
      readDiv.textContent = '1';
  
      message.appendChild(textDiv);
      message.appendChild(timeDiv);
      message.appendChild(readDiv);
  
      // 1초 뒤에 읽음 표시 제거
      setTimeout(() => {
        readDiv.remove();
      }, 1000);
    }
  
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // 전송 처리
  function sendMessage() {
    const rawText = textarea.value;
    const text = rawText.trim();
    if (text === '') return;

    appendMessage(text, 'sent');
    textarea.value = '';
    textarea.style.height = 'auto';

    setTimeout(() => {
      const reply = getAutoReply();
      appendMessage(reply, 'received');
    }, 1000);
  }

  // 자동 응답
  function getAutoReply() {
    return "안녕";
  }

  // 버튼 클릭 시 전송
  sendBtn.addEventListener('click', sendMessage);

  // 한글 조합 여부 체크
  let isComposing = false;
  textarea.addEventListener('compositionstart', () => { isComposing = true; });
  textarea.addEventListener('compositionend', () => { isComposing = false; });

  textarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      sendMessage();
    }
  });
});
