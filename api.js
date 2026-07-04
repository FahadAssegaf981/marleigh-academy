/**
 * Marleigh Academy - API Connection Layer
 * Menghubungkan Frontend ke Backend AI di Railway
 */

const BASE_URL = "https://marleigh-academy-production.up.railway.app/api";

async function callAI(question) {
    try {
        console.log("Mengirim pertanyaan ke AI:", question);
        
        const response = await fetch(`${BASE_URL}/tutor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        });

        if (!response.ok) {
            throw new Error(`Server merespons dengan status: ${response.status}`);
        }

        const data = await response.json();
        console.log("AI menjawab:", data.response);
        return data.response;
        
    } catch (error) {
        console.error("Gagal terhubung ke sistem AI:", error);
        return "Maaf, sistem sedang sibuk. Mohon coba lagi sebentar.";
    }
}

// Ekspor fungsi agar bisa dipanggil oleh app.js
// Jika Anda tidak menggunakan sistem modul (cukup taruh di file terpisah), 
// fungsi callAI() ini sudah otomatis tersedia secara global.