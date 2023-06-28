IconAnimation.ondrag = function(){
    
    let start = Date.now();
    
    let timer = setInterval(function()  {
        var TimePassed = Date.now - start;
        if (TimePassed >= 1000) {
           clearInterval(timer)
       }
        
        draw(TimePassed);
    }, 20)
    function draw(TimePassed) {
        IconAnimation.style.borderRadius = TimePassed / 200 + 'px';
        
    }
}