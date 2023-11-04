console.log('Holi')




function manejoTienda(inventario) {
  return {
    inventario: inventario,

    agregarProducto: function(producto) {
      if(!producto.nombre || !producto.precio || !producto.cantidad) {
        console.log('El producto debe tener nombre, precio y cantidad.')
      }
      this.inventario.push(producto)
    },

    eliminarProducto: function(nombre) {
      const indice = this.inventario.findIndex((producto) => producto.nombre === nombre)
      this.inventario.splice(indice, 1)
    },

    calcularValorTotal: function() {
      return this.inventario.reduce(( total, producto ) => total + producto.precio * producto.cantidad, 0)
    }
  }
}


const inventarioInicial = [
  { nombre: 'Jeans', precio: 10, cantidad: 5 },
  { nombre: 'Sudadera', precio: 15, cantidad: 3 },
  { nombre: 'Tenis', precio: 15, cantidad: 10 },
];

const tienda = manejoTienda(inventarioInicial)
// console.log(tienda.inventario)

tienda.agregarProducto({ nombre: 'Chaqueta', precio: 20, cantidad: 5 })
// console.log(tienda.inventario)

// tienda.eliminarProducto('Jeans')


console.log(tienda.calcularValorTotal())
console.log(tienda.inventario)
