//alert("멋사 화이팅!")

function btnClick(){
    const kim=document.getElementById("jihan")
    const newDiv = document.createElement('div')
    newDiv.classList.add('message-container','sent');
    const newDiv2 = document.createElement('div')
    newDiv2.classList.add('chat-bubble');
    newDiv.appendChild(newDiv2)
    newDiv2.innerText = kim.value


    const messageList = document.getElementsByClassName("chat-messages")[0]
    messageList.appendChild(newDiv)

    console.log(kim.value)

    setTimeout(()=>{
        const oldDiv = document.createElement('div')
        const oldDiv2 = document.createElement('div')
        const oldDiv3 = document.createElement('div')
        oldDiv.classList.add('message-container','received');
        oldDiv2.classList.add('profile-pic');
        oldDiv3.classList.add('chat-bubble');
        oldDiv.appendChild(oldDiv2)
        oldDiv.appendChild(oldDiv3)
        oldDiv3.innerText = "빙가워용"

        messageList.appendChild(oldDiv)
    },1000)
}