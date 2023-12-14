document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de mudança para os botões de rádio
    document.querySelectorAll('input[name="filters"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            // Seleciona os elementos do DOM dentro da classe 'content-switch'
            const contentSwitches = document.querySelectorAll('.content-switch');

            // Itera sobre cada grupo de elementos para alternar o idioma
            contentSwitches.forEach(function (contentSwitch) {
                const portugalContents = contentSwitch.querySelectorAll('.portugal');
                const englandContents = contentSwitch.querySelectorAll('.england');

                // Verifica qual botão está selecionado
                if (radio.value === 'pt') {
                    portugalContents.forEach(function (element) {
                        element.style.display = 'block';
                    });
                    englandContents.forEach(function (element) {
                        element.style.display = 'none';
                    });
                } else if (radio.value === 'uk') {
                    portugalContents.forEach(function (element) {
                        element.style.display = 'none';
                    });
                    englandContents.forEach(function (element) {
                        element.style.display = 'block';
                    });
                }
            });
        });
    });
});