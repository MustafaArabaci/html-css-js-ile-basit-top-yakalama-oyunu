var counter=0,obj,xpos,ypos;
obj=document.querySelector('#obj');
obj.onmouseover=function(){
  counter++;
  xpos=parseInt(Math.random()*1745)
  ypos=parseInt(Math.random()*700)
  obj.style.left=xpos+"px";
  obj.style.top=ypos+"px";
  obj.style.width=this.clientWidth+10+"px";
  obj.style.height=this.clientHeight+10+"px";
}

obj.onclick=function(){
  alert(counter+ ". Seferde Yakaladın TEBRİKLER...");
  obj.style.width="110px";
  obj.style.height="110px";
  counter=0;}
