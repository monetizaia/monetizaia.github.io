// Array para almacenar los productos en el carrito
let carrito = [];

// Lógica para agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const producto = e.target.getAttribute('data-product');
        const precio = parseFloat(e.target.getAttribute('data-price'));
        carrito.push({ producto, precio });
        alert(`${producto} ha sido añadido al carrito`);
    });
});

// Función para mostrar los productos en el carrito
function verCarrito() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    if (carrito.length === 0) {
        cartList.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    carrito.forEach(item => {
        cartList.innerHTML += `<p>${item.producto} - $${item.precio.toFixed(2)}</p>`;
    });

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    cartList.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
}

