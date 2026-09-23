const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif-content");

// Membuat tombol NO berpindah tempat secara acak saat dihover
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
// Aksi saat tombol YES diklik
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yeay! Terima Kasih Suci Amelia Santika! ❤️";
    
    // Memperbaiki URL GIF agar merujuk ke link gambar .gif yang valid
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eHR6ZnJyd3d3eXB1YnpneWRzNm8ybW00Y2J0ZWpxMnltNGlsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"; 
    
    noBtn.style.display = "none";
});