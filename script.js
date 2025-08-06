function downloadOptimizedPDF() {
    // Crear un elemento iframe oculto para cargar el otro HTML
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'hdv_ia.html';
    document.body.appendChild(iframe);
    
    iframe.onload = function() {
        // Esperar a que el iframe cargue completamente
        setTimeout(() => {
            const element = iframe.contentDocument.getElementById('pdf-content');
            
            const opt = {
                margin: [10, 10, 10, 10],  // Márgenes más pequeños
                filename: 'Hoja_de_Vida_Juan_Toro_Optimizada.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    allowTaint: false,
                    scrollY: 0
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                }
            };

            html2pdf().set(opt).from(element).save();
            
            // Eliminar el iframe después de usar
            document.body.removeChild(iframe);
        }, 1000);
    };
}

// Función original para el primer botón (sin cambios)
function downloadPDF() {
    const element = document.getElementById('pdf-content');

    const opt = {
        margin: [2, 5, 1 , 5],  // [arriba, izquierda, abajo, derecha] en mm
        filename: 'Hoja_de_Vida_Juan_Toro.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a3',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(element).save();
}