const products = [
  { name: "Smartphone", category: "Electronics", price: 8000, rating: 4.5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXI_WtCA49H3howBbPvPGp-kGWHZ8KjNytVg&s" },
  { name: "Dress", category: "Clothing", price: 400, rating: 4.2, img: "https://assets.ajio.com/medias/sys_master/root/20250603/0n42/683f29827a6cd4182f7de600/raiyani_enterprise_x_ag_aqua_blue_women_printed_fit_%26_flare_dress.jpg" },
  { name: "Smart Watch", category: "Electronics", price: 3000, rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN93Rj9WUiK3G8T8ifCzsbpKC2esoiSPQA9A&s"},
  { name: "Novel", category: "Books", price: 350, rating: 3.9, img: "https://m.media-amazon.com/images/I/51xwFZin4pL._UF1000,1000_QL80_.jpg" },
  { name: "Men's Suit", category: "Clothing", price: 1200, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN5npx_YZOqNYktkVbrNYo5DssgI1wH7AW2eiSMq6hM9sb56XHReUyUSwttrrRBZy_sM&usqp=CAU" },
  { name: "Laptop", category: "Electronics", price: 15000, rating: 4.3, img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732187805/Croma%20Assets/Computers%20Peripherals/Laptop/Images/311051_0_xkl2ks.png?tr=w-400" },
  { name: "women's Saree", category:"Clothing",price:1000, rating: 4.0, img:"https://www.distacart.com/cdn/shop/products/JQVrQhH9WX_240x.jpg?v=1686294833" },
  { name: "Men's T-shirt", category:"Clothing",price: 500, rating: 3.8, img:"https://images.meesho.com/images/products/374206265/6zazs_512.webp"},
  { name: "Kid's frock", category:"Clothing", price: 600, rating: 4.2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRue2qEV_8MVl8DKrYgcTpuC5dyAU_YSUe6QpCCqnsikiUAb1SjeWeKZwNe98KN6-3OoT0&usqp=CAU"},
  { name: "Jewellery", category:"cosmetics", price: 2500, rating: 4.5, img:"https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"},
  { name: "Biography", category:"Books", price: 800,rating: 4.2,img:"https://m.media-amazon.com/images/I/81y0LXoNs-L._UF1000,1000_QL80_.jpg" },
  { name: "Earings", category:"cosmetics", price:1000, rating:4.0, img:"https://shoppingyar.com/wp-content/uploads/2021/09/jewellry-34.jpg" },
  { name: "Slippers", category:"Footwear", price: 300, rating: 3.5, img:"https://4.imimg.com/data4/LD/DI/GLADMIN-2068720/ladies-footwear-wn-706-500x500.png",},
  { name: "shoes", category:"Footwear", price: 900, rating: 3.9,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSac3ZdJ8aUOaEnsec0w-qiYGass_Hb9sPGaQ&s" },
  { name: "Bangles", category:"cosmetics", price: 1600, rating: 4.1, img:"https://madeforhers.in/wp-content/uploads/2022/07/MFH-41-49.jpg" },
  { name: "GreenTea", category:"Groceries", price: 300, rating: 4.2,img:"https://foodcare.in/cdn/shop/files/GREENTEABAG.jpg?v=1725364792&width=1445" },
  { name: "Rice pack",category:"Groceries",price: 1400, rating: 4.3, img:"https://4.imimg.com/data4/GQ/RU/ANDROID-53192496/product-500x500.jpeg" },
  { name: "Chudidar",category:"Clothing",price: 750, rating:4.4, img:"https://m.media-amazon.com/images/I/81Q3bmk3RVL._UY1100_.jpg" },
  { name: "Dry fruits", category:"Groceries",price:450,rating:4.0,img:"https://eatanytime.in/cdn/shop/files/MiniDryFruits-912399.png?v=1714830184" },
  { name: "Necklace", category:"cosmetics", price:650,rating:3.8,img:"https://www.orra.co.in/media/catalog/product/cache/0223386358b565e9d65c640854c3ad24/o/n/ons23022.jpg" }

];


  const productList = document.getElementById("productList");
    const categoryFilter = document.getElementById("categoryFilter");
    const priceFilter = document.getElementById("priceFilter");
    const sortOption = document.getElementById("sortOption");
    const searchBar = document.getElementById("searchBar");
    const toast = document.getElementById("toast");

    function showToast() {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    }

    function addToCart(name) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(name);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById("cart-count").innerText = cart.length;
      showToast();
    }

    function addToWishlist(name) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (!wishlist.includes(name)) {
        wishlist.push(name);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to wishlist!");
      }
    }

    function displayProducts(list) {
      productList.innerHTML = "";
      if (list.length === 0) {
        productList.innerHTML = "<p style='text-align:center'>No products found.</p>";
        return;
      }
      list.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="${p.img}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <div class="price">₹${p.price}</div>
          <div class="rating">⭐ ${p.rating}</div>
          <button onclick="addToCart('${p.name}')">Add to Cart</button>
          <button class="wishlist-btn" onclick="addToWishlist('${p.name}')">♡ Wishlist</button>
        `;
        productList.appendChild(div);
      });
    }

    function applyFilters() {
      let filtered = [...products];
      const category = categoryFilter.value;
      const priceRange = priceFilter.value;
      const sort = sortOption.value;
      const search = searchBar.value.toLowerCase();

      if (category !== "All") filtered = filtered.filter(p => p.category === category);
      if (priceRange !== "All") {
        const [min, max] = priceRange.split("-").map(Number);
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      }
      if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

      if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
      else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
      else if (sort === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);

      displayProducts(filtered);
    }

    document.addEventListener("DOMContentLoaded", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      document.getElementById("cart-count").innerText = cart.length;
      applyFilters();
    });

    categoryFilter.addEventListener("change", applyFilters);
    priceFilter.addEventListener("change", applyFilters);
    sortOption.addEventListener("change", applyFilters);
    searchBar.addEventListener("input", applyFilters);
