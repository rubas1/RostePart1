const renderPage = function(data){
    $('.players').empty()
    let len = data.length
    const source = $('#player-template').html()
    const template = Handlebars.compile(source)
    for(let i=0;i<len;i++){
       const newHTML = template({id: data[i].id, fname: data[i].fname, lname: data[i].lname, img: data[i].image, jersey: data[i].jersey, pos: data[i].pos})
       $('.players').append(newHTML)
    }
}