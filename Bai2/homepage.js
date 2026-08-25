const productGrid = document.getElementById('product-grid');
const searchInput = document.querySelector('.searchproduct');
const products = [];
function addToCart(productId){
    let product = products.find(item => item.id === productId);
    if(product){
        alert(`Bạn vừa thêm ${product.name} vào giỏ hàng`);
        console.log(`Bạn vừa thêm ${product.name} vào giỏ hàng`);
    }
}
function hienThiSp(list=products){
    //map trả về mảng gồm các sản phẩm có giao diện, join nối chúng lại 
    const htmlContent = list.map(product => {
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>

                    <h2 class="product-price">${product.price.toLocaleString('vi-VN')} ₫</h2>

                    <div class="product-rating">
                        <span class="stars">⭐ ${product.rating}</span>
                        <button class="btn-buy" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>

                </div>
            </div>
            `;
    }).join(' ');
    productGrid.innerHTML = htmlContent; //đưa nội dung vào giao diện
}

hienThiSp();
searchInput.addEventListener('input',function(){
    const keyWord = searchInput.value.toLowerCase().trim();
    let product = products.filter(item => {
        return item.name.toLowerCase().includes(keyWord);
    });
    hienThiSp(product);
});
