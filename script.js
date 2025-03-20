document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoFonteAtual = 1;

    aumentaFonteBotao.addEventListener('click', function() {   
        TamanhoAtualFonte += 0.1;
        document.body.style.fontsize = '$(tamanhoAtualFonte)rem';
        document.h2.style.fontsize = '$(tamanhoAtualFonte)rem';

    });

    diminuiFonteBotao.addEventListener('click', function() {   
        TamanhoAtualFonte -= 0.1;
        document.body.style.fontsize = '$(tamanhoAtualFonte)rem';
        document.h2.style.fontsize = '$(tamanhoAtualFonte)rem';
    });
})
