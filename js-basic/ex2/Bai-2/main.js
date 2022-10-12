var color = ["#222f3e","#f368e0","#ee5253","#0abde3","#10ac84"
        ,"#222f3e","#5f27cd"];
var color1 = ["#f368e0","#ee5253","#0abde3","#10ac84"
        ,"#222f3e","#5f27cd", "#222f3e"];
var i = 0;
document.querySelector("button").addEventListener("click",
    function(){
        i = i < color.length ? ++i : 0;
        document.querySelector("body").style.background= color[i]
        document.querySelector("body").style.color= color1[i]


    })     