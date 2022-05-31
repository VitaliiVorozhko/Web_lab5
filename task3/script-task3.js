let N = array.length;
let Button= document.getElementById('Button');

var newHH = document.createElement("Text");


Button.onclick=()=>{
    task3();
}

function task3(){
    var I = document.getElementById('Text');
    var K = I.value;
    N = K.split(',');
    shuffle(array);
    document.write(shuffle("<br>" + array));;

}

    for (var a=[],i=0;i<array.length;++i) a[i]=i;
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    } 
    
