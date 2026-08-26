const productGrid = document.getElementById('product-grid');
const searchInput = document.querySelector('.searchproduct');
const btnCategory = document.querySelectorAll(`.category-btn`);
const btnSortSelect = document.querySelector(`#sortPrice`);
const btnCart = document.querySelector(`.btn-cart`);
let products = [];
let currentList = [];
async function readJSON(){
    try{
        const responese = await fetch("/JSON/product.json");
        products = await responese.json();
        hienThiSp(products);
        currentList = products;
    }catch(error){
        console.log('Lỗi khi tải sản phẩm: ',error);
    }
}
function addToCart(productId){
    let product = products.find(item => item.id === productId);
    if(product){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existing = cart.find(item => item.id === productId);

        if(existing){
            existing.quantity += 1;
        }else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem('cart',JSON.stringify(cart));
        
        alert(`Bạn vừa thêm ${product.name} vào giỏ hàng`);
        console.log(`Bạn vừa thêm ${product.name} vào giỏ hàng`);
    }else{
        return;
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
readJSON();
searchInput.addEventListener('input',function(){
    const keyWord = searchInput.value.toLowerCase().trim();
    currentList = products.filter(item => {
        return item.name.toLowerCase().includes(keyWord);
    });
    if(currentList.length === 0){
        productGrid.innerHTML = '<p>Sản phẩm không tồn tại</p>';
    }else{
        hienThiSp(currentList);
    }
    btnSortSelect.value = 'default';//nếu chuyển category thì phải chuyển selector về trạng thái default
    
});
btnCategory.forEach(btn => {
    btn.addEventListener('click',function(){
        btnCategory.forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
        const category = this.dataset.category;
        if (category === 'all'){
            currentList = products;
        }else{
            currentList = products.filter(item => item.category === category);
        }
        hienThiSp(currentList);
        btnSortSelect.value = 'default';//nếu chuyển category thì phải chuyển selector về trạng thái default
    });
});
btnSortSelect.addEventListener("change",function (){
    let product = currentList.slice();
    if (btnSortSelect.value === "asc"){
        product.sort((a , b) => a.price - b.price);
    }else if (btnSortSelect.value === "desc"){
        product.sort((a , b) => b.price - a.price);
    }else{
        product = currentList.slice();
    }
    hienThiSp(product);
});
btnCart.addEventListener("click",function(){
    window.location.href = "cartpage.html";
});
