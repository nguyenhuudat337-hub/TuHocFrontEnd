const productGridCart = document.querySelector('.productCart-grid');
const btnDeleteProduct = document.querySelector('.buttonDelete');
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const sumProduct = document.querySelector('.totalAmount')
function xoaSanPham(productId, productName) {
    const ok = confirm(`Bạn có chắc chắn xóa "${productName}"?`);
    if (!ok) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    hienThiGioHang();
};
function tangSoLuong(productId){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    item = cart.find(item => item.id === productId);
    item.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    hienThiGioHang();

}
function giamSoLuong(productId,productName){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    item = cart.find(item => item.id === productId);
    if (item.quantity === 1){
        xoaSanPham(productId, productName);
        return;
    }else{
        item.quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    hienThiGioHang();

}
function hienThiGioHang(){
    let sum = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContentHtml = ' ';
    if(cart.length !== 0){
        cartContentHtml = cart.map(item =>{
            sum += (item.price*item.quantity);
            return `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}" class="imgProduct">
                <div class="product-info">
                    <h4 class="product-name">${item.name}</h4>

                    <h2 class="product-price">${item.price.toLocaleString('vi-VN')} ₫</h2>
                </div>

                <div class="quantity">
                    <button class="btn-minus" onclick ="giamSoLuong(${item.id},'${item.name}')">-</button>

                    <span class="quantity-value">${item.quantity}</span>

                    <button class="btn-plus" onclick="tangSoLuong(${item.id})">+</button>
                </div>
                <button class="buttonDelete" onclick="xoaSanPham(${item.id}, '${item.name}')" >
                    <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" class ="imgDelete">
                </button>
            </div>
            `;
        }).join(' ');
    }else{
        cartContentHtml = '<p>Bạn chưa Có Sản Phẩm Nào</p>'
    }
    productGridCart.innerHTML = cartContentHtml;
    sumProduct.innerHTML = sum;
};

hienThiGioHang();

