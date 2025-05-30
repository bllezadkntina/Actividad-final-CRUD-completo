import { useEffect, useState } from "react";

function InventarioForm({ agregarProducto, actualizarProducto, productoEditado, setProductoEditado }) {

  const [Nombre, setNombre] = useState("");
  const [Precio, setPrecio] = useState("");
  const [Talla, setTalla] = useState("");
  const [Stock, setStock] = useState("");

  useEffect(() => {
    if (productoEditado) {
      setNombre(productoEditado.Nombre || "");
      setPrecio(productoEditado.Precio || "");
      setTalla(productoEditado.Talla || "");
      setStock(productoEditado.Stock || "");
    } else {
      setNombre("");
      setPrecio("");
      setTalla("");
      setStock("");
    }
  }, [productoEditado]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      Nombre,
      Precio,
      Talla,
      Stock
    };

    if (productoEditado) {
      actualizarProducto({ ...form, id: productoEditado.id });
    } else {
      agregarProducto(form);
    }

    setNombre("");
    setPrecio("");
    setTalla("");
    setStock("");
    setProductoEditado(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input name="Precio" value={Precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" required />
      <input name="Talla" value={Talla} onChange={(e) => setTalla(e.target.value)} placeholder="Talla" required />
      <input name="Stock" value={Stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
      <button type="submit">{productoEditado ? "Actualizar" : "Guardar"}</button>
    </form>
  );
}

export default InventarioForm;