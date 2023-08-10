var inputVl=document.querySelector("#myinput");
var bbtn=document.querySelector("#btn");
bbtn.onclick=function(){
    if(bbtn.getAttribute('data-text')=="show"){
        inputVl.setAttribute('type','text');
        bbtn.setAttribute('data-text','hide');
        bbtn.innerHTML="Hide";
      
    }
    else{
        inputVl.setAttribute('type','password');
        bbtn.setAttribute('data-text','show');
        bbtn.innerHTML="Show";   

    }
}
console.log("fhasf");