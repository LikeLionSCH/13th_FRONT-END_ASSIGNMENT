const inputField = document.querySelector('.input_field input');
const sendButton = document.querySelector('.input_field button');
const chatContainer = document.querySelector('.chatting_container');

function addMessage(message, type) {
    const container = document.createElement('div');
    container.classList.add(type === 'sent' ? 'sent_message_container' : 'receive_message_container');

    const bubble = document.createElement('div');
    bubble.classList.add(type === 'sent' ? 'sent_message' : 'receive_message');
    bubble.textContent = message;

    container.appendChild(bubble);
    chatContainer.appendChild(container);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendButton.addEventListener('click', () => {
    const message = inputField.value.trim();
    if (message === '') return;

    addMessage(message, 'sent');
    inputField.value = '';

    setTimeout(() => {
        addMessage("으아아아악악", 'receive');
    }, 1000);
});

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
