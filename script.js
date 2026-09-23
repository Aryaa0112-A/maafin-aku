const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif-content");

// Membuat tombol NO berpindah tempat
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Aksi saat tombol YES diklik
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yeay! Terima Kasih! ❤️";
    gif.src = "media.giphy.com"; // Ganti ke GIF bahagia
    noBtn.style.display = "none";
});
