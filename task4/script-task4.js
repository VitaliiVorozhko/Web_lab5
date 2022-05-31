let arr=[];
let Button= document.getElementById('Button');

var newH = document.createElement("Text");


Button.onclick=()=>{
    task4();
}


function task4(){
    var I = document.getElementById('Text');
    var K = I.value;
    arr = K.split(',');
    makeUniq(array);
    document.write(makeUniq("<br>" + array));

}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr);
    return [...uniqSet];
  }