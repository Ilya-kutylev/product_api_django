document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if (title.length < 3){
        alert("Title is required. Please enter a title for the product.");
        return;
    }

    if (isNaN(price) || price <= 0.10) {
        alert("Price must be greater than zero");
        return;
    }

    const response = await fetch('/api/v1/products/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, price }),
    });

    if (response.ok) {
        document.getElementById('productForm').reset();
        alert("Product created successfully")
    } else {
        alert('Error creating product');
    }
});

async function loadProducts() {
    try{
        const response = await fetch('/api/v1/products/');
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const products = await response.json();
        const tableBody = document.querySelector('#productTable tbody');
        tableBody.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Failed to load products:', error);
        alert('Failed to load products. Please try again later.');
    }
}
document.getElementById('refreshButton').addEventListener('click', function() {
    loadProducts();
});

loadProducts();
