const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db









//db.serialize(() =>{
    //criar
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
 //           id INTEGER PRIMARY KEY AUTOINCREMENT,
 //           name TEXT,
  //          image TEXT,
  //          address TEXT,
  //          address2 TEXT,
 //           state TEXT,
  //          city TEXT,
   //         items TEXT
  //      );
  //  `)

    //inserir
  //  const query = `
  //      INSERT INTO places (
  //          name,
  //          image,
  //          address,
  //          address2,
  //          state,
  //          city,
  //          items
  //      ) VALUES (?,?,?,?,?,?,?);
  //      `
  //  const values =  [
   //     "Papersider",
   //     "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
   //     "Guilherme, Jardim América",
   //     "Numero 265",
   //     "Santa Catarina",
   //     "Rio do Sul",
   //     "Resíduos Eletrônicos, Lâmpadas",
   // ]   

    //function afterInsertData(err){
    //    if(err) {
    //        return console.log(err)
    //    }
     //   console.log("Cadastrado com Sucesso")
      //  console.log(this)
   // }

    //db.run(query, values, afterInsertData)


//consulta   

    //db.all(`SELECT * FROM places`, function(err, rows){
    //    if(err) {
    //        return console.log(err)
    //    }
    //    console.log("Aqui estão seu registros")
    //    console.log(rows)
    //})

//deletar
    //db.run(`DELETE FROM places WHERE id = ?`, [2],function(err){
    //    if(err) {
    //        return console.log(err)
    //    }
    //    console.log("Registro deletado com sucesso!")
    //})    
    
//})
