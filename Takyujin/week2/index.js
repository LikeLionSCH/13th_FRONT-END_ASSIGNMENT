document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const chatBox = document.querySelector(".chat-box");

    const autoReplies = [
        "좋아요!",
        "괜찮습니다!",
        "방금 도착했습니다.",
        "오늘 날씨 좋네요.",
        "회의 언제 시작하죠?",
        "오늘 하루 어떠셨나요?",
        "ㅋㅋㅋㅋ",
        "감사합니다!",
        "오늘 벚꽃이 이쁘네요!"
    ];

    
    
    function sendMessage() {
        const message = input.value.trim(); //입력력창에 적은 텍스트를 가져옴. trim은 공백제거를 해주는 함수다.
        if (message !== "") { //내가 문자를 입력했다면?
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("my", "message"); //main에서 내가 만든 변수 이름름 

            const textDiv = document.createElement("div"); //말풍선 안에 텍스트 영역 만듬
            textDiv.classList.add("my", "text");
            textDiv.textContent = message; //입력한 텍스트 넣어줘줘

            messageDiv.appendChild(textDiv); //말풍선 안에 텍스트 넣기기
            chatBox.appendChild(messageDiv); //채팅장에 추가가

            input.value = ""; //입력한 후, 채팅창 초기화화
            chatBox.scrollTop = chatBox.scrollHeight; //새로 보낸 메세지가 보이게 하기기
           
            
            setTimeout(() => {                //1초뒤에 연락오게 하는 코드
                const randomIndex = Math.floor(Math.random() * autoReplies.length); //랜덤 함수수
                const replyText = autoReplies[randomIndex]; //아무 연락 오게 하는 코드드

                const replyDiv = document.createElement("div");
                replyDiv.classList.add("message");

                const userDiv = document.createElement("div"); //연락 보내는 사람람
                userDiv.classList.add("user");
                userDiv.textContent = "멋사 운영진 조건희";
                
                const textDiv = document.createElement("div");
                textDiv.classList.add("text");
                textDiv.textContent = replyText;

                replyDiv.appendChild(userDiv); //52~54 코드가 없으면 연락도 나한테 보내는 이도 안뜸뜸
                replyDiv.appendChild(textDiv);
                chatBox.appendChild(replyDiv);

                chatBox.scrollTop = chatBox.scrollHeight; //맨 아래로 채팅창을 내려주는 코드드
            }, 1000);

        }
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();  // 폼 지켜주기
            sendMessage();
        }
    });
});

//강의를 들으면서 모르는 부분은 찾아보고, 물어보고, 배우면서 하려고 노력했습니다!