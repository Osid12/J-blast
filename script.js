// Product Upload and Display Logic
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
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}" />
      <h3>${name}</h3>
      <p class="price">₦${price}</p>
      <p class="product-description">${description}</p>
      <button>Add to Cart</button>
    `;
    
    document.querySelector('.product-grid').appendChild(productCard);
  };
  
  reader.readAsDataURL(imageInput.files[0]);
});
