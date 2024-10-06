let totalCarrito = 0;
let carrito = [];  // Aquí almacenaremos los productos agregados
const productos = [
    {
        id: 1,
        nombre: "Auriculares",
        precio: 800,
        stock: 8,
    },
    {
        id: 2,
        nombre: "Camara fotografica",
        precio: 1500,
        stock: 9,
    },
    {
        id: 3,
        nombre: "Lentes",
        precio: 750,
        stock: 7,
    },
    {
        id: 4,
        nombre: "Smarwatch",
        precio: 2500,
        stock: 10,
    },
    {
        id: 5,
        nombre: "Sneakers",
        precio: 1300,
        stock: 5,
    },
];

let nombre = '';
let compra = '';
alert('Bienvenido a nuestra tienda online');


while (!nombre) {
    nombre = prompt("Nombre del cliente");

    if (nombre) {
        alert('Muchas gracias por elegirnos ' + nombre + '!');
    } else {
        alert('No has ingresado tu nombre, inténtalo de nuevo');
    }
}


function mostrarProductos() {
    let lista = 'Productos disponibles:\n';
    productos.forEach(producto => {
        lista += `${producto.id}. ${producto.nombre} - $${producto.precio} (Stock: ${producto.stock})\n`;
    });
    lista += '0. Finalizar compra\n';
    return lista;
}


function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto && producto.stock > 0) {
        carrito.push(producto);
        totalCarrito += producto.precio;
        producto.stock--;  // Reducimos el stock del producto
        alert(`${producto.nombre} ha sido agregado al carrito. Total actual: $${totalCarrito}`);
    } else {
        alert('Producto no disponible o fuera de stock.');
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
    const productoIndex = carrito.findIndex(p => p.id === idProducto);
    if (productoIndex !== -1) {
        const producto = carrito[productoIndex];
        totalCarrito -= producto.precio;
        carrito.splice(productoIndex, 1);
        producto.stock++;  
        alert(`${producto.nombre} ha sido eliminado del carrito. Total actual: $${totalCarrito}`);
    } else {
        alert('Producto no encontrado en el carrito.');
    }
}


function mostrarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    let detalleCarrito = 'Carrito de compras:\n';
    carrito.forEach((producto, index) => {
        detalleCarrito += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    detalleCarrito += `Total: $${totalCarrito}\n`;
    alert(detalleCarrito);
}


function finalizarCompra() {
    if (carrito.length === 0) {
        alert('No tienes productos en el carrito.');
    } else {
        alert(`Gracias por tu compra, ${nombre}! El total es: $${totalCarrito}`);
        carrito = [];
        totalCarrito = 0;
    }
}


let continuarComprando = true;

while (continuarComprando) {
    let listaProductos = mostrarProductos();
    let seleccion = parseInt(prompt(listaProductos));

    if (seleccion === 0) {
        continuarComprando = false;
        finalizarCompra();
    } else if (seleccion > 0 && seleccion <= productos.length) {
        agregarAlCarrito(seleccion);
        mostrarCarrito(); 
    } else {
        alert('Opción no válida. Inténtalo de nuevo.');
    }
}



