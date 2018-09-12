$("ul").on("click","span#content",function() {
    $(this).toggleClass("crossed")
})

// $("span").click(function() {
$("ul").on("click","span#delete",function() {
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    // $(this).parent().remove();
    event.stopPropagation();
})

let addListCallback = function(){
    let inputVal = $("input[type='text']").val();
    let deleteSpan = "<span id='delete'><i class='fas fa-minus-circle'></i></span>"
    if(inputVal !== ""){
        $("ul").append("<li>"+deleteSpan+"<span id='content'>"+inputVal+"</span></li>")
        inputVal = $("input[type='text']").val("");
    }else{
        alert("Please enter something!")
    }
}

$("input[type='text']").keypress(function(event){
    // 13 is ENTER keypress
    if(event.which === 13){
        addListCallback();
    }
})

$("#submit").on("click",function(){
    addListCallback();
})





