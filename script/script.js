"use strict"
const msg = {
    hello: "Hi, I'm Daniel",
    qname: "What's Your Name?"
};
let num = 0;
function $(el){
    return document.querySelector(el);
}
let inputname = $("#name");
function start(){
    num++;
    $("main").innerHTML += `
    <br />
    <div class="flex">
    Type Number:
    <input id="i` + num + `"type="text" class="input" spellcheck="false" autocomplete="off">
    </div>
    `;
    $("#i"+num).focus();
    $("#i"+num).addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            if($("#i"+num).value == 1 || $("#i"+num).value == 2 || $("#i"+num).value == 3){
                if($("#i"+num).value == 1){
                    $("main").innerHTML += `
                    <br />
                    <br />
                    <div>
                        <p>const contact = {</p>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Email: "<a href="mailto:me@imdanieldev.ir">me@imdanieldev.ir</a>",</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Telegram: "<a href="//t.me/imdanieln">@imdanieln</a>",</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Telegram Channel: "<a href="//t.me/danieln_ch">@danieln_ch</a>",</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Telegram Gap: "<a href="//t.me/danieln-gap">@danieln_gap</a>",</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Mastodon: "<a href="//mas.to/imdanieln">@imdanieln@mas.to</a>",</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Github: "<a href="//github.com/imdanieldev">imdanieldev</a>"</span>
                        <p>}</p>
                    </div>
                    <br />
                    <br />
                    `;
                    start();
                }
                if($("#i"+num).value == 2){
                    $("main").innerHTML += `
                    <br />
                    <br />
                    <div>
                        <p>const skills = {</p>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;HTML-CSS: true,</span>
                            <br>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Js-VueJs: true,</span>
                            <br>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Bootstrap-TailwindCss: true,</span>
                            <br>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Git-Github: true</span>
                        <p>}</p>
                    </div>
                    <br />
                    <br />
                    `;
                    start();
                }
                if($("#i"+num).value == 3){
                    $("main").innerHTML += `
                    <br />
                    <br />
                    <div>
                        <p>const info = {</p>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Full Name: "Daniel Nasr",</span>
                            <br>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Location: "Iran>isfahan",</span>
                            <br>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Birthday: "2008/3/7"</span>
                        <p>}</p>
                    </div>
                    <br />
                    <br />
                    `;
                    start();
                }
            }else{
                $("main").innerHTML += "<span>Error 404</span><br />";
                start();
            }
        }
    });
}
function showinput(){
    inputname.classList.remove("hidden");
    inputname.focus();
    inputname.addEventListener("keypress", (e)=>{
        if(e.key === "Enter"){
            inputname.blur();
            if(inputname.value != ""){
                $("#sayhello").innerHTML = "Hello " + inputname.value;
                setTimeout(()=>{
                    $("#help").classList.remove("hidden");
                    inputname.classList.add("hidden");
                    start();
                },1000);
            }
        }
    });
}
setTimeout(()=>{
    let firstmsg = new Typed(
        "#firstmsg", {
            strings: [msg['hello']],
            typeSpeed: 60,
            showCursor: false,
            onComplete: ()=>{
                let QName = new Typed(
                    "#QName", {
                        strings: [msg['qname']],
                        typeSpeed: 60,
                        showCursor: false,
                        onComplete: ()=>{
                            showinput();
                        }
                    }
                );
            }
        }
    );
},400);
