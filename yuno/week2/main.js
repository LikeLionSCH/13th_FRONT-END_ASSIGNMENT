// 채팅창 화면에서 입력을 하여 전송 버튼을 누르면
// 화면에 나의 메시지가 추가되기
// 1초뒤에 상대방에 대한 답장이 보여야함
const contentDiv = document.querySelector("#content-div")
const button = document.querySelector("#input-div button")
const content = document.querySelector("input#text-content")

const submitHandler = () => {
  contentDiv.innerHTML += `
    <div class="chat right">
      <div class="content">
        ${content.value}
      </div>
    </div>`
  content.value = ''
  response()
}

const response = () => {
  setTimeout(() => {
    contentDiv.innerHTML += `      
    <div class="chat left">
      <div class="profile">
      </div>
      <div class="content">
        nope!
      </div>
    </div>`
  }, 1000);
}

button.addEventListener("click", submitHandler)
