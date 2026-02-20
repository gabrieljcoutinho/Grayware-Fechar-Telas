# 🧹 Robô de Limpeza de Programas (Windows)

Um script em **Node.js** que encerra automaticamente aplicativos específicos em intervalos regulares, simulando uma “faxina” do sistema.

> ⚠️ Atenção: Este script força o fechamento de programas. Use com cuidado.

---

## 📌 Descrição

Este script foi criado para:

- Encerrar automaticamente programas predefinidos
- Evitar o fechamento do `explorer.exe` (prevenindo tela preta)
- Fechar apenas **janelas de pastas** com PowerShell
- Executar a limpeza a cada **10 segundos**

Aplicações alvo incluem navegadores, IDEs e apps comuns do Windows.

---

## 🛠️ Requisitos

Antes de executar, você precisa ter instalado:

- **Node.js** → https://nodejs.org/
- **Sistema Operacional Windows**

---

## ▶️ Como Executar

1. Salve o código em um arquivo:

```bash
limpeza.js
```

2. Execute no terminal:

```bash
node limpeza.js
```

---

## ⚙️ Como Funciona

O script utiliza:

- `child_process.exec()` → Para executar comandos do Windows  
- `taskkill` → Para encerrar processos  
- `PowerShell COM Object` → Para fechar janelas do Explorer  
- `setInterval()` → Para repetição automática  

Trecho principal:

```js
setInterval(executarLimpeza, 10000);
```

---

## ⏱️ Intervalo de Execução

O tempo é definido em **milissegundos**:

```js
10000 // 10 segundos
```

Exemplos:

```js
5000   // 5 segundos
30000  // 30 segundos
60000  // 1 minuto
```

---

## 🧨 Programas Encerrados

Por padrão, o script tenta fechar:

- chrome.exe (Google Chrome)
- msedge.exe (Microsoft Edge)
- brave.exe (Brave)
- pycharm64.exe (PyCharm)
- Code.exe (VS Code)
- Cursor.exe (Cursor)
- winword.exe (Word)
- excel.exe (Excel)
- notepad.exe (Bloco de Notas)
- calc.exe (Calculadora)

Você pode editar a lista:

```js
const programasParaLimpar = [ ... ];
```

---

## 🖥️ Segurança Contra Tela Preta

O script **NÃO encerra o explorer.exe**.

Isso evita:

✅ Barra de tarefas sumir  
✅ Tela preta no Windows  
✅ Reinicialização manual do Explorer  

Apenas as janelas de pastas são fechadas via PowerShell:

```powershell
(New-Object -ComObject Shell.Application).Windows() | foreach-object { $_.Quit() }
```

---

## ⚠️ Avisos Importantes

Este script:

- Força encerramento (`/F`)
- Fecha programas sem salvar
- Pode causar perda de trabalho não salvo

Evite usar enquanto estiver trabalhando em algo importante.

---

## 📜 Licença

Uso livre para fins educacionais e experimentais.

---

Projeto criado para testes, automações e estudos em Node.js 🚀
