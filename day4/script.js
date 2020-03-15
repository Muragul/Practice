function Add(){
    var input = document.getElementById('input');
    var text = input.value;
    if (text==''){
        alert('no input');
    } else{
        var forButtons = document.getElementById('forButtons');
        var text = document.createTextNode(input.value);
        input.value='';
        var li = document.createElement('li');
        var list = document.getElementById('list');
        li.appendChild(text);
        var btn = document.createElement('button');
        btn.className = 'btn btn-success';
        btn.innerHTML = 'X';
        btn.style="margin:10px";
        btn.onclick = function(){
            list.removeChild(li);
        }
        li.appendChild(btn);
        list.appendChild(li);
    }
}