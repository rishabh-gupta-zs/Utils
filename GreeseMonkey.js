document.addEventListener("DOMContentLoaded", function () {
    const host = window.location.hostname;
    if(host.includes("youtube.com"))             x_youtube_x();
    else if(host.includes("music.youtube.com"))  x_youtubeMusic_x();
    else if(host.includes("web.whatsapp.com"))   x_whatsapp_x();
    else                                         x_unknown_x();
    console.log("\t\t\t\ ...GreeseMonkey")
});
function x_youtube_x(){
    console.log("youtube . . . . . . . . .")
    setOpacity("0.1")
}
function x_youtubeMusic_x(){
    console.log("youtubeMusic . . . . . . . . .")
    setOpacity("0.2")
}
function x_whatsapp_x(){
    console.log("whatsapp . . . . . . . . .")
    blur(`div[role="listitem"]`, `div[role="row"]>div>div>div`, `header._amid`);
}
function x_unknown_x(){
    console.log("unknown . . . . . . . . .")
}

function blur(... ar){
    const selector = ar.join(",")
    const selectorWithHover = ar.join(":hover,")+":hover"
    const style = document.createElement('style');
    style.textContent = `
                    ${selector}{filter: blur(4px);}
                    ${selectorWithHover}{filter: blur(0px);}`;
    document.head.appendChild(style);
}

function setOpacity(opacity){
    if(isInOffice()){
        document.body.style.opacity = opacity;
        if(confirm("desable")) document.body.style.opacity = "1";
    }
}
function isInOffice() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    if (day >= 1 && day <= 5) { 
        if ((hour > 11 || (hour === 11 && minute >= 0)) &&
            (hour < 18 || (hour === 18 && minute === 0))) { 
            return true;
        }
    }
    return false;
}

function getDetailsAndSendMail(subject, content){
    const input = prompt("Enter email_id, name");
    const [email, name] = input.split(",");
    console.log(email)
    const anchorElement = document.createElement("a");
    anchorElement.href = `mailto:${email}?subject=${subject}&body=${content}`;
    anchorElement.target = "_blank";
    anchorElement.click();
}
