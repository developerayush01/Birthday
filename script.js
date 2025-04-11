let input=document.querySelector(".form-control");
let button=document.querySelector(".btn");
let message=document.querySelector(".gift-box")
let audio=document.querySelector(".music-audio")
button.addEventListener("click",()=>{
    if(input.value=="")
    {
        document.querySelector(".para").innerHTML="Please enter your name";
    }
    else
    {
        document.querySelector(".para").style.display="none";
        document.querySelector(".gift-box").style.display="block";
    }
})
message.addEventListener("click",()=>{
    document.querySelector(".message").style.display="block";
    document.querySelector(".message").innerHTML = `🎉 Happy Birthday <span style="color: red; font-weight: bold;">${input.value}</span> 🎂🎁 Wishing you a fantastic year ahead!`;
    audio.style.display="block";
    audio.play();
})