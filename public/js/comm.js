$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll
            ("#header");
            $(`<link rel="stylesheet" href="css/header.css">`)
            .appendTo("head")
        }
    })
})
$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/footer.html",
        type:"get",
        success:function(result){
            $(result).replaceAll
            ("#footer");
            $(`<link rel="stylesheet" href="css/footer.css">`)
            .appendTo("head")
        }
    })
})
