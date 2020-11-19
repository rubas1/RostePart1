const renderPage = function(data){
    $('.players').empty()
    console.log(data.length) 
    for(let i=0;i<16;i++){
        $('.players').append("<div class='player' id=" + data[i].personId +
        ">" + data[i].firstName + " " + data[i].lastName + "<br>" + data[i].jersey
        + "<br>" + data[i].pos + "</div")
    }
}