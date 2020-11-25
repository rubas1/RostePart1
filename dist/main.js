const roster = function(){
    let input = $("#team-input").val()
    $.ajax({
        method: "GET",
        url: `teams/${input}`,
        success: function (data){
            renderPage(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}