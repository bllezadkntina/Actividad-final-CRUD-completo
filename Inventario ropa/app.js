const express = require('express')
const bodyParser = require('body-parser')
const inventario = require('./inventario')
const cors = require('cors')
const app = express()
const puerto = 3000

app.use(bodyParser.json())
app.use(cors())

app.listen(puerto, () => {
      console.log('servicio iniciado')
  })

app.get('/Mostrar', async(req, res) => {
      const data = await inventario.findAll();
      res.send(data);
})

app.post('/Guardar', async(req, res) => {
      const {Nombre, Precio, Talla, Stock} = req.body;
      const data = await inventario.create({
            Nombre, Precio, Talla, Stock
      });
      res.send(data);
})

app.put('/Actualizar/:id', async(req, res) => {
      const {Nombre, Precio, Talla, Stock} = req.body;
      const {id} = req.params;
      const data = await inventario.update({
            Nombre, Precio, Talla, Stock
      },{
            where: {id}
      })
      res.send(data);
})

app.delete('/Eliminar/:id', async(req, res) => {
      const {id} = req.params;
       const data = await inventario.destroy({
            where: {id}
      })
      res.send(data);
})