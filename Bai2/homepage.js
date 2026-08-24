const productGrid = document.getElementById('product-grid');
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max 256GB",
        price: 29500000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "iPhone 13 Pro Max",
        price: 16500000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 27990000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "MacBook Pro 14 M3",
        price: 39990000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "MacBook Air M2",
        price: 24500000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "iPad Pro 11 inch M2",
        price: 20990000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        price: 10290000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Apple Watch Ultra 2",
        price: 21490000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "AirPods Pro 2 USB-C",
        price: 5890000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "AirPods Max",
        price: 12990000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop"
    },
    {
        id: 11,
        name: "Sony WH-1000XM5",
        price: 8490000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop"
    },
    {
        id: 12,
        name: "Bàn phím cơ Keychron K2 V2",
        price: 1950000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop"
    },
    {
        id: 13,
        name: "Chuột Logitech MX Master 3S",
        price: 2490000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop"
    },
    {
        id: 14,
        name: "Màn hình Dell UltraSharp U2723QE",
        price: 12890000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop"
    },
    {
        id: 15,
        name: "Loa Bluetooth JBL Charge 5",
        price: 3690000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop"
    },
    {
        id: 16,
        name: "Loa Marshall Stanmore III",
        price: 9490000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop"
    },
    {
        id: 17,
        name: "Máy ảnh Sony Alpha A7 IV",
        price: 55990000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop"
    },
    {
        id: 18,
        name: "Máy chơi game Nintendo Switch OLED",
        price: 7490000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&auto=format&fit=crop"
    },
    {
        id: 19,
        name: "PlayStation 5 Slim",
        price: 13490000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop"
    },
    {
        id: 20,
        name: "Kính thực tế ảo Meta Quest 3",
        price: 12990000,
        rating: 4.7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPnzAaUALQdKIdQmDzQHrWR_CZPse7ZSQN56bCmz_S7voEesFPAL5OOsi&s=10"
    }
];
function hienThiSp(){
    //map trả về mảng gồm các sản phẩm có giao diện, join nối chúng lại 
    const htmlContent = products.map(product => {
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>

                    <h2 class="product-price">${product.price}</h2>

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