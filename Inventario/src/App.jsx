import { useState, useEffect } from "react";
import axios from "axios";
import InventarioForm from "./components/InventarioForm";
import InventarioList from "./components/InventarioList";

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);

  const obtenerDatos = async () => {
    const res = await axios.get("http://localhost:3000/Mostrar");
    setProductos(res.data);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const agregarProducto = async (producto) => {
    await axios.post("http://localhost:3000/Guardar", producto);
    obtenerDatos();
  };

  const actualizarProducto = async (producto) => {
    await axios.put(`http://localhost:3000/Actualizar/${producto.id}`, producto);
    obtenerDatos();
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`http://localhost:3000/Eliminar/${id}`);
    obtenerDatos();
  };

  return (
    <div>
      <h1>Inventario de Ropa</h1>
      <InventarioForm
        agregarProducto={agregarProducto}
        actualizarProducto={actualizarProducto}
        productoEditado={productoEditado}
        setProductoEditado={setProductoEditado}
      />
      <InventarioList
        productos={productos}
        eliminarProducto={eliminarProducto}
        setProductoEditado={setProductoEditado}
      />
    </div>
  );
}

export default App;
  