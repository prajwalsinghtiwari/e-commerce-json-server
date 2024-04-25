document.addEventListener('DOMContentLoaded', function () {
    // Fetch products from JSON Server
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            // Display products on the page
            const productsContainer = document.getElementById('products');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.src}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Rating: ${product.ratings}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                    <button onclick="deleteFromCart(${product.id})">Delete from Cart</button>
                `;
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    // Function to add product to cart
    window.addToCart = function (productId) {
        // Implement adding product to cart logic here
        console.log('Adding product to cart with ID:', productId);
    };

    // Function to delete product from cart
    window.deleteFromCart = function (productId) {
        // Implement deleting product from cart logic here
        console.log('Deleting product from cart with ID:', productId);
    };
});
