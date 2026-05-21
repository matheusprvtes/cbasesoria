document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('qualify-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Capture data
        const nome = document.getElementById('nome').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const email = document.getElementById('email').value;
        
        const objetivo = document.querySelector('input[name="objetivo"]:checked').value;
        const localizacao = document.querySelector('input[name="localizacao"]:checked').value;
        const reserva = document.querySelector('input[name="reserva"]:checked').value;
        const escolaridade = document.querySelector('input[name="escolaridade"]:checked').value;

        // 2. Format message
        const message = `Olá, vim pela Landing Page de Visto de Estudante. Aqui estão meus dados:
        
*Nome:* ${nome}
*E-mail:* ${email}
*WhatsApp:* ${whatsapp}

*Objetivo:* ${objetivo}
*Localização atual:* ${localizacao}
*Possui reserva financeira:* ${reserva}
*Nível de escolaridade:* ${escolaridade}

Gostaria de falar com a equipe sobre o meu planejamento migratório.`;

        // 3. Encode URI
        const encodedMessage = encodeURIComponent(message);

        // 4. Set WhatsApp Number
        const waNumber = '34697987817'; // Formato: DDI + DDD + Numero (sem o '+')

        // 5. Redirect
        const waLink = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedMessage}`;
        window.location.href = waLink;
    });
});
