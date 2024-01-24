"use strict"
const msg = {
    hello: "Hi, I'm Daniel",
    qname: "What's Your Name?"
};
let num = 0;
let ii = 0;
function $(el){
    return document.querySelector(el);
}
function typeEffect(el , string){
    const text = string;
    const arrayText = text.split("") ;
    let i = 0;
    let type = setInterval(()=>{
        $(el).innerHTML += arrayText[i];
        i++;
        if(i == arrayText.length){
            clearInterval(type);
        }
    },60);
}
function error(){
    $("main").innerHTML += `<span class="span" id="error`+ ii +`"></span><br />`;
    typeEffect("#error" + ii, "Error 404!");
    ii++;
}
let inputname = $("#name");
function start(){
    num++;
    $("main").innerHTML += `
    <br />
    <div class="flex">
    <span class="span">Type Number:</span>
    <input id="i` + num + `"type="text" class="input" spellcheck="false" autocomplete="off">
    </div>
    `;
    $("#i"+num).focus();
    $("#i"+num).addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            if($("#i"+num).value == 1 || $("#i"+num).value == 2 || $("#i"+num).value == 3 || $("#i"+num).value == 4){
                if($("#i"+num).value == 1){
                        $("main").innerHTML += `
                        <br />
                        <br />
                        <div>
                        <span>Email: <a href="mailto:me@imdanieldev.ir">me@imdanieldev.ir</a></span>
                        <br />
                        <span>Telegram: <a href="//t.me/imdanieln">@imdanieln</a></span>
                        <br />
                        <span>Github: <a href="//github.com/imdanieldev">imdanieldev</a></span>
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
                        <span>HTML-CSS: 100%</span>
                        <br>
                        <span>Js-VueJs: 40%</span>
                        <br>
                        <span>Bootstrap-TailwindCss: 100%</span>
                        <br>
                        <span>Git-Github: 50%</span>
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
                        <span>Full Name: Daniel Nasr</span>
                        <br>
                        <span>Location: Iran>isfahan</span>
                        <br>
                        <span>Birthday: 2008/3/7</span>
                        </div>
                        <br />
                        <br />
                        `;
                    start();
                }
                if($("#i"+num).value == 4){
                    $("#i"+num).blur();
                    setTimeout(() => {
                        $("main").innerHTML = `
                        <span>Contact Me: 1</span>
                        <br>
                        <span>My Skill: 2</span>
                        <br>
                        <span>About Me: 3</span>
                        <br>
                        <span>Clean Here: 4</span>
                        </div>
                        `;
                    }, 2000);
                    setTimeout(() => {
                        start();
                    }, 3000);
                }
            }else{
                error();
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
            if(inputname.value != ""){
                inputname.blur();
                typeEffect("#sayhello", "Hello " + inputname.value)
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
    typeEffect("#firstmsg", msg['hello'])
    setTimeout(()=>{
        typeEffect("#QName", msg['qname'])
        setTimeout(()=>{
            showinput();
        },1000)
    },1000);
},400);
