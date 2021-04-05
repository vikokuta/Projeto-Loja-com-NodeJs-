const express = require('express'); 
const app = express();
const port = 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());

//conexao com db
const {MongoClient} = require('mongodb');
const mongodb= require("mongodb");
const uri = "mongodb+srv://Vivian:Shoyus123@cluster0.3laio.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const options = {
  ssl: true,
  sslValidate: true,
  useUnifiedTopology: true,
};

function create(database, collection, data) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, options, (err, client) => {
      if (err) reject(err);
      const db = client.db(database);
      db.collection(collection)
        .insertOne(data)
        .then((response) => {
          client.close();
          resolve(response.ops[0]);
        });
    });
  });
}
function deletar(database, collection, id) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, options, (err, client) => {
      if (err) reject(err);
      const db = client.db(database);
      console.log(id);
      db.collection(collection)
        .deleteOne({_id: new mongodb.ObjectID(id)})
        .then((response) => {
          client.close();
          resolve(response);
        });
    });
  });
}
function updateEstoque(database, collection, descricao, quant, valor) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, options, (err, client) => {
      if (err) reject(err);
      const db = client.db(database);
      db.collection(collection)
      .updateOne(
        {
          descricao : descricao
        },
          { $set: { quantidade: quant, valor: valor}}
      )
        .then((response) => {
          client.close();
          resolve(response);
        });
    });
  });
}


function list(database, collection, query = {}) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, options, (err, client) => {
      if (err) reject(err);
      const db = client.db(database);
      db.collection(collection)
        .find(query)
        .toArray()
        .then((data) => {
          client.close();
          resolve(data);
        });
    });
  });
}

app.get('/getEstoque', async (req, res) => {
  //Ao contactar essa rota, o usuário receberá JSON com todo o estoque da loja.
  var json = await list("loja","estoque");
  res.send(json);
});

app.post('/updateEstoque', async(req, res) => {
    //Ao postar nessa rota, o usuário será capaz de atualizar o estoque de um calçado específico
    const {descricao, quantidade, valor} = req.body;
    await updateEstoque("loja","estoque",descricao, quantidade,valor);
    res.send('item alterado');
  });

app.post('/insertEstoque', async (req, res) => {
    //Adicionar um novo calçado no estoque
    await create("loja","estoque",req.body);
    res.send('item cadastrado');
  });

  app.delete('/deletar/:id', async (req, res) => {
    //apagar item pelo id
    await deletar("loja","estoque",req.params.id);
    res.send('item apagado');
  });

app.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
});