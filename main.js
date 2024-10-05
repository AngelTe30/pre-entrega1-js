
    // Elementos
    const minusButton = document.getElementById('minus-button');
    const plusButton = document.getElementById('plus-button');
    const quantityInput = document.getElementById('cantidad');
    const addCartButton = document.getElementById('add-cart');
    let cart = [];

    // Funciones para aumentar y disminuir la cantidad
    plusButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    minusButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 0) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    // Función para agregar al carrito
    addCartButton.addEventListener('click', () => {
        const productName = document.querySelector('.name-product').textContent;
        const productPrice = parseFloat(document.getElementById('price-product').textContent);
        const productQuantity = parseInt(quantityInput.value);

        if (productQuantity > 0) {
            const product = {
                name: productName,
                price: productPrice,
                quantity: productQuantity
            };

            cart.push(product);
            console.log(cart); // Puedes reemplazar esto con la lógica para mostrar el carrito

            // Reiniciar el campo de cantidad
            quantityInput.value = 0;
        }
    });

