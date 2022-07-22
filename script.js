const luttapi=document.getElementById("luttapi");
const mayavi=document.getElementById('mayavi');
const score=document.getElementById('score');

function jump(){
    luttapi.classList.add('jump-animation');
    setTimeout(()=>{
        luttapi.classList.remove('jump-animation');

    },500);

}

document.addEventListener('keypress',()=> {
if(!luttapi.classList.contains('jump-animation')){
jump();
}
});

setInterval(() =>{
    score.innerText++;
    const LuttapiTop=parseInt(window.getComputedStyle(luttapi)
    .getPropertyValue('top'));
    const mayaviLeft=parseInt(window.getComputedStyle(mayavi)
    .getPropertyValue('left'));

if (mayaviLeft<0){
    mayavi.style.display='none';

}else {
    mayavi.style.display='';
}
if(mayaviLeft<50 && mayaviLeft>0 &&LuttapiTop >150 ){
    alert("You got a score of:"+score.innerText+
    "\n\nPlay again?");
    location.reload();
}

},50)

