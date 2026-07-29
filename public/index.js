const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  // API sederhana
  app.get('/api/salam', (req, res) => {
    res.json({
        pesan: 'Halo dari server Node.js! 🚀',
            waktu: new Date().toLocaleString('id-ID')
              });
              });

              app.listen(PORT, () => {
                console.log(`Server berjalan di port ${PORT}`);
                });