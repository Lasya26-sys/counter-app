let count=0;
function increase(){
    count++;
    document.getElementById("1").innerHTML=count;
}
function decrease(){
if(count>0){
    count--;
    document.getElementById("1").innerHTML=count;
}
}
function resett(){
    if(count>0){
        count=0;
        document.getElementById("1").innerHTML=count;
    }
}