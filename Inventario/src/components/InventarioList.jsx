function InventarioList({ productos, eliminarProducto, setProductoEditado }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Talla</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td><b>{prod.Nombre}</b></td>
              <td>${prod.Precio}</td>
              <td>{prod.Talla}</td>
              <td>{prod.Stock}</td>
              <td>
                <button onClick={() => setProductoEditado(prod)}>Editar</button>
                <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventarioList;