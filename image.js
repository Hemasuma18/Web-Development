const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("closeBtn");
    const gallery = document.getElementById("gallery");

    // Function to create an image item
    function createImageItem(src, alt) {
      const item = document.createElement("div");
      item.className = "item";

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });

      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = alt;

      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.textContent = "×";
      delBtn.addEventListener("click", () => {
        item.remove();
      });

      item.appendChild(img);
      item.appendChild(caption);
      item.appendChild(delBtn);

      return item;
    }

    // Add initial images
    const imagesData = [
      { src: "https://i.pinimg.com/736x/2c/88/97/2c8897f667e06c22a4236289204b8000.jpg", alt: "Rose" },
      { src: "https://freshknots.in/wp-content/uploads/2023/03/lotus-Freshknots.png.webp", alt: "Lotus" },
      { src: "https://www.thespruce.com/thmb/uWwQIzO065q4jYXkFgZpTiDH2xM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/thespruce-sunflower-NaomiRahim-c3b906edf16a4b1694805e6ac54389d8.jpg", alt: "Sunflower" },
      { src: "jasmine.jpeg", alt: "Jasmine" },
      { src: "https://images.stockcake.com/public/9/1/1/911900da-3fc8-4fbb-9427-a69969edeac8_large/dewy-bluebell-bloom-stockcake.jpg", alt: "Blue Bell" },
      { src: "https://wildroots.in/wp-content/uploads/2020/07/Hibiscus-1.jpg", alt: "Hibiscus" },
      { src: "https://cdn.pixabay.com/photo/2017/08/04/00/01/orange-marigold-2578700_1280.jpg", alt: "Marigold" },
      { src: "https://m.media-amazon.com/images/I/71d2tLFqfBS.jpg", alt: "Morning Glory" },
      { src: "https://media.istockphoto.com/id/536772045/photo/st-josephs-lily.jpg?s=612x612&w=0&k=20&c=phVSk64gd2-98N_2uXM2ziF0CQwrpcShiONZ__78OyA=", alt: "Lily" },
      { src: "https://seedball.co.uk/wp-content/uploads/elementor/thumbs/seedball_seedling_guide_Oxeye-daisy-3-o6uurwp5k5fquqp7j32g0msx5tl64u0zaklew1nubm.jpg", alt: "Daisy" },
      { src: "https://cdn.pixabay.com/photo/2021/09/11/08/48/pink-periwinkle-6614959_1280.jpg", alt: "Periwinkle" },
      { src: "https://cdn.sanity.io/images/pn4rwssl/production/3d611c13104aa0d8e12c0ab72c8a9ae228eaf2a9-500x750.jpg?w=2880&q=75&auto=format", alt: "Orchid" },
    ];

    imagesData.forEach(data => {
      gallery.appendChild(createImageItem(data.src, data.alt));
    });

    // Add image from input
    function addImage() {
      const url = document.getElementById("imgUrl").value;
      const caption = document.getElementById("imgCaption").value;

      if (!url || !caption) {
        alert("Please enter both image URL and caption.");
        return;
      }

      gallery.appendChild(createImageItem(url, caption));
      document.getElementById("imgUrl").value = "";
      document.getElementById("imgCaption").value = "";
    }

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });


