// Gabungan engine yang Anda butuhkan
class MemoryEngine {
    static extractWeakTopics(events) { return events.filter(e => e.type === "ERROR").map(e => e.topic || "Konsep Dasar"); }
}

class TutorEngine {
    static respond(question) {
        if (question.toLowerCase().includes("bantu")) return "Tentu, mari kita bahas pelan-pelan!";
        return "Saya sedang menganalisis kebutuhan belajar Anda. Apa yang ingin dipelajari hari ini?";
    }
}

// Logika Aplikasi Utama
document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('user-input').value;
    const responseDiv = document.getElementById('ai-response');
    
    // Simulasi respons AI
    const response = TutorEngine.respond(input);
    responseDiv.innerText = response;
    document.getElementById('user-input').value = '';
});