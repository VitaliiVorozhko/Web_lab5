let Array=[];
let Button= document.getElementById('Button');
let res=document.getElementById('Result');

Button.onclick=()=>{
    task5();
}

function task5(){
    var I = document.getElementById('Text');
    var jut = I.value;
    Array = jut.split(',');
    var newarr = [];
    var count = 0;
    for(var i = 0; i< Array.length;i++){
        if(Array[i] > 10){
            newarr[count++] = Array[i];
        }
    }
    if(newarr.length){
        res.textContent = newarr;
    }
    else{
        res.textContent='таких елементів немає';
    }
}