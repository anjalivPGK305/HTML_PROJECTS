function mdisplay(value)
{
    console.log(value);
    if(value.style.display==="none")
value.style.display="block";
else
value.style.display="none";
}
var music="";
var index=0;
var singer="";
var songname="";
var xhr = new XMLHttpRequest();
function playorpause()
{
    var m= document.getElementById("play");
    var n= document.getElementById("music");
    var o= document.getElementById("singer");
    var s=document.getElementById("song");

    xhr.onload =function(){
        responseObject = JSON.parse(xhr.responseText);
        music=responseObject.songs[index].file;
        singer=responseObject.songs[index].singer;
       songname=responseObject.songs[index].name;
    };
    Xhr.open('GET','music.json',true);
    xhr.send(null);

    if(m.className=="glyphicon glyphicon-play")
    {
        m.className="glyphicon glyphicon-pause";
        n.src=music;
        s.innerHTML=songname;
        o.innerHTML=singer;
        n.play();

    }
    else{
        m.className="glyphicon glyphicon-play";
        n.pause();
    }
}

function nextsong(){
    var n= document.getElementById("music");
    n.pause();
    index++;
    playorpause();
}
function previous(){
    var n=document.getElementById("music");
    n.pause();
    index--;
    playorpause();
}