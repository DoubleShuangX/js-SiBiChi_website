window.onresize = function(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px'
}
document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px'
window.onload = function(){
    $('ul').on('click','li',function(){
        console.log($(this).attr('pid'))
        location.href = './chat.html?pid=' + $(this).attr('pid')
    })
}