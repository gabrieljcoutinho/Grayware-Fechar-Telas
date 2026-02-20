const { exec } = require('child_process');

// Removido o explorer.exe para evitar que a barra de tarefas suma (tela preta)
const programasParaLimpar = [
    "chrome.exe",       // Google Chrome
    "msedge.exe",       // Microsoft Edge
    "brave.exe",        // Brave Browser
    "pycharm64.exe",    // PyCharm
    "Code.exe",         // VS Code
    "Cursor.exe",       // Cursor Editor
    "winword.exe",      // Microsoft Word
    "excel.exe",        // Microsoft Excel
    "notepad.exe",      // Bloco de Notas
    "calc.exe"          // Calculadora
];

function executarLimpeza() {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`--- [${timestamp}] Iniciando faxina do sistema ---`);

    programasParaLimpar.forEach((app) => {
        // Encerra apenas os programas da lista
        exec(`taskkill /F /IM ${app} /T`, (erro) => {
            if (!erro) {
                console.log(`Encerrado: ${app}`);
            }
        });
    });

    // Comando específico para fechar as JANELAS do explorador de arquivos
    // sem matar o processo principal do Windows (evita a tela preta)
    exec(`powershell -command "(New-Object -ComObject Shell.Application).Windows() | foreach-object { $_.Quit() }"`, (erro) => {
        if (!erro) {
            console.log("Janelas de pastas fechadas com sucesso.");
        }
    });

    console.log("Verificação concluída. Próxima em 10 segundos...");
}

setInterval(executarLimpeza, 10000);

console.log("====================================================");
console.log("ROBÔ DE LIMPEZA SEGURO ATIVADO");
console.log("Fechando: Navegadores, IDEs e Janelas de Pastas");
console.log("A tela NÃO ficará mais preta.");
console.log("====================================================");

executarLimpeza();