document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let TamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {   
        TamanhoAtualFonte += 0.1;
        document.body.style.fontsize = '$(TamanhoAtualFonte)rem';
        document.h2.style.fontsize = '$(TamanhoAtualFonte)rem';

    });

    diminuiFonteBotao.addEventListener('click', function() {   
        TamanhoAtualFonte -= 0.1;
        document.body.style.fontsize = '$(TamanhoAtualFonte)rem';
        document.h2.style.fontsize = '$(TamanhoAtualFonte)rem';
    });
})
