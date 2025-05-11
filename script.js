// Handle the product upload and display
document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const category = document.getElementById('category').value;
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');
  const reader = new FileReader();

  reader.onload = function () {
    const imageUrl = reader.result;

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}" />
      <h3>${name}</h3>
      <p><strong>Price:</strong> ₦${price}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p>${description}</p>
    `;

    document.getElementById('product-list').appendChild(productCard);
    document.getElementById('product-form').reset();
  };

  reader.readAsDataURL(imageInput.files[0]);
});
