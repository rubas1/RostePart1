const express = require('express')
const urllib = require('urllib')
const path = require('path')
const app = express()
const port = 3000
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', function (request, response) {
    response.send( "Server is up and running smoothly")
})
app.get('/teams/:teamName', function (request, response) {
    urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, res){
    let teamID = teamToIDs[request.params.teamName]
    let data = JSON.parse(res.toString())
    let resArr = data.league.standard.filter(ele => (ele.teamId.substr(0,ele.teamId.indexOf(' '))) === teamID
    || ele.teamId.substr(ele.teamId.indexOf(' ')+1) === teamID).map(ele => { return { fname: ele.firstName, lname: ele.lastName, jersey: ele.jersey, image: 'https://nba-players.herokuapp.com/players/' + ele.lastName.toLowerCase() + "/" + ele.firstName.toLowerCase(), id: ele.personId, pos: ele.pos}})
    response.send(resArr)
})

})
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})