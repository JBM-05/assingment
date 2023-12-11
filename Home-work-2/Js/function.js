function changing(){
    options=["shuffle-01.jpg","shuffle-02.jpg", "shuffle-03.jpg", 
    "shuffle-04.jpg", "shuffle-05.jpg", "shuffle-06.jpg", "shuffle-07.jpg", "shuffle-08.jpg"  ];
    change=document.querySelectorAll("#small-pictures img");
    for(var i = 0 ; i<change.length ; i++){
        console.log("image" + i)
        random="Js/dist/images/" + options[Math.floor(Math.random() * options.length)]
        change[i].src=random 
        change[i].setAttribute("tabindex", "0")}
        
}
function hover(element){
    x=document.getElementById("large-picture") ;
    x.innerHTML=element.alt;
    // x.style.background=`url(${element.src})`;
    x.style.backgroundImage="url("+element.src+")";
}
function again (){
    x=document.getElementById('large-picture');
    x.innerHTML='hover again';
   x.style.backgroundImage = 'url("original-image-url")';
}