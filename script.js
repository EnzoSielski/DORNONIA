document.addEventListener("DOMContentLoaded", function() {
    const aumentaFonteBotao = document.getElementById("aumentar-fonte");
    const diminuiFonteBotao = document.getElementById("diminuir-fonte");

    let TamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener("click", function() {   
        TamanhoAtualFonte += 0.1;
        document.style.body.fontsize = "$(TamanhoAtualFonte)rem";
        document.style.h2.fontsize = "$(TamanhoAtualFonte)rem";

    });

    diminuiFonteBotao.addEventListener("click", function() {   
        TamanhoAtualFonte -= 0.1;
        document.style.body.fontsize = "$(TamanhoAtualFonte)rem";
        document.style.h2.fontsize = "$(TamanhoAtualFonte)rem";
    });
})
