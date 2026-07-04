const app = require('./src/app'); // Memanggil logika dari dalam folder src
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});