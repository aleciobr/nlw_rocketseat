const express = require("express")
const server = express()

const db = require("./database/db.js")

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true}))



const nunjucks = require("nunjucks")
nunjucks.configure("src/view", {
    express: server,
    noCache: true
})

server.get("/", (req,res) =>{
    return res.render("index.html")
})

server.get("/create-point", (req,res) =>{

    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) =>{
    const query = `
         INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
        `

     const values =  [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]   
  
    function afterInsertData(err){
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log("Cadastrado com Sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }
  
    db.run(query, values, afterInsertData)

    
})

server.get("/search-results", (req, res) => {

    const search = req.query.search
    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", {  total: 0 })
    }


    //pegar os dados do bd
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        console.log("Aqui estão os seus registros: ")
        console.log(rows)
        //mostrar a página com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })
})


server.listen(3000)
