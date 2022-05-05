$(document).ready(function(){
    $(document).on('click', '.control nav a', function(event){
        history.pushState(null,null,event.target.href)
        $('article').load(event.target.href+' article>.content')
        event.preventDefault();
    })
    $(document).on('click', '.control .home', function(){
        document.title = 'Home';
    })
    $(document).on('click', '.control .about', function(){
        document.title = 'About';
    })
    $(window).on('popstate', function(){
        $('article').load(location.href+' article>.content')
    })
    var audio = new Audio('Sweet Dove - Concordant Cacophony.mp3')
    $(document).on('click', '.control .player .play', function(){
        audio.play()
    })
    $(document).on('click', '.control .player .pause', function(){
        audio.pause()
    })
})