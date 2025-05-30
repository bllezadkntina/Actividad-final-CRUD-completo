const express = require('express')
const bodyParser = require('body-parser')
const inventario = require('./inventario') 
const app = express()
const puerto = 3000

app.use(bodyParser.json())

app.listen(puerto, () => {
      console.log('servicio iniciado')
  })

app.get('/Mostrar', async(req, res) => {
      const data = await inventario.findAll();
      res.send(data);
})

app.post('/Guardar', async(req, res) => {
      const {nombre, precio, talla, stock} = req.body;
      const data = await inventario.create({
            nombre, precio, talla, stock
      });
      res.send(data);
})

app.put('/Actualizar/:id', async(req, res) => {
      const {nombre, precio, talla, stock} = req.body;
      const {id} = req.params;
      const data = await inventario.update({
            nombre, precio, talla, stock
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