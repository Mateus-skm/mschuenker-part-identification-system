# 🏭 M.Schuenker - Sistema de Identificação de Peças

Sistema completo para gestão de peças, estoque, vendas e emissão de notas fiscais. Desenvolvido com HTML5, CSS3 e JavaScript puro.

![M.Schuenker Dashboard](https://via.placeholder.com/800x400/1e40af/ffffff?text=M.Schuenker+Sistema+de+Peças)

## 🚀 **Demonstração Online**
Acesse a demonstração ao vivo: [🔗 Clique aqui](https://seu-usuario.github.io/mschuenker-sistema)

## 📋 **Funcionalidades**

### **✅ Módulos Principais**
- **Dashboard** - Visão geral do sistema
- **Parafusos** - Gestão por tipo, tamanho e rosca
- **Porcas** - Catálogo com especificações técnicas
- **Arruelas** - Organizadas por diâmetro
- **Eletrodos** - Catálogo para soldagem
- **Equipamentos** - Gestão de ferramentas
- **Catálogo** - Visualização completa
- **Financeiro** - Controle de contas
- **Notas Fiscais** - Emissão completa
- **Etiquetas** - Geração com QR Code
- **Manutenção** - Compatibilidade de peças

### **🤖 Inteligência Artificial**
- **Busca inteligente** - Reconhece padrões como "rosca 8mm"
- **Sugestões automáticas** - Baseadas no estoque
- **Navegação por voz** - Digite "financeiro" para ir direto

### **💰 Emissão de Notas Fiscais**
- Cadastro completo de clientes
- Cálculo automático de impostos
- Visualização em PDF
- Histórico de notas emitidas

## 🎯 **Demonstração Rápida**

### **1. Acesso ao Sistema**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mschuenker-sistema.git

# Entre na pasta
cd mschuenker-sistema

# Abra o index.html no navegador
# Ou use um servidor local:
python -m http.server 8080
```

### **2. Login de Teste**
- **Email**: admin@mschuenker.com
- **Senha**: admin123
- Ou use qualquer email válido

### **3. Funcionalidades para Testar**

#### **📦 Cadastro de Peças**
1. Clique em "Cadastrar Peça" no dashboard
2. Selecione o tipo (ex: Parafuso)
3. O código será gerado automaticamente (ex: PAR001)
4. Preencha os dados e salve

#### **🧾 Emissão de Notas**
1. Vá para "Emissão de Notas"
2. Cadastre um cliente
3. Busque peças pelo nome ou código
4. Adicione itens e gere a nota

#### **🔍 Busca Inteligente**
- Digite "rosca 8mm" → Mostra parafusos M8
- Digite "parafuso sextavado" → Filtra por tipo
- Digite "financeiro" → Vai direto ao módulo

## 🛠️ **Tecnologias Utilizadas**

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Estilos**: CSS Grid, Flexbox, Design Responsivo
- **Armazenamento**: LocalStorage (navegador)
- **Fontes**: Google Fonts (Inter)
- **Ícones**: SVG inline (sem dependências externas)

## 📱 **Responsividade**

- **Desktop**: Layout completo com sidebar
- **Tablet**: Menu adaptativo
- **Mobile**: Interface otimizada para toque
- **Impressão**: Notas fiscais formatadas

## 🗂️ **Estrutura de Arquivos**

```
mschuenker-sistema/
├── index.html              # Página principal
├── README.md              # Documentação
├── .gitignore            # Arquivos ignorados
├── css/
│   ├── styles.css        # Estilos globais
│   └── dashboard.css     # Estilos do dashboard
├── js/
│   ├── script.js         # Login e navegação
│   ├── dashboard.js      # Módulos do dashboard
│   ├── ai-search.js      # Busca inteligente
│   ├── cadastro-pecas.js # Sistema de cadastro
│   ├── emissao-notas.js  # Emissão de notas
│   ├── modal-cadastro.js # Modal de cadastro
│   └── dados-exemplo.js  # Dados de teste
├── pages/
│   ├── cadastro-pecas.html
│   └── emissao-notas.html
└── assets/               # Imagens e recursos
```

## 🚀 **Publicação no GitHub Pages**

### **Método 1: GitHub Desktop (Recomendado)**
1. **Baixe o GitHub Desktop**: https://desktop.github.com/
2. **Clone este repositório** ou crie um novo
3. **Faça upload dos arquivos** para a branch `main`
4. **Ative o GitHub Pages**:
   - Vá em Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Clique em Save

### **Método 2: Linha de Comando**
```bash
# 1. Inicialize o repositório
git init
git add .
git commit -m "Primeira versão do sistema M.Schuenker"

# 2. Crie no GitHub e adicione o remote
git remote add origin https://github.com/seu-usuario/mschuenker-sistema.git
git branch -M main
git push -u origin main

# 3. Ative o GitHub Pages nas configurações do repositório
```

### **Método 3: Upload Direto**
1. **Crie um novo repositório** no GitHub
2. **Faça upload dos arquivos** via interface web
3. **Ative o GitHub Pages** nas configurações

## 📊 **Dados de Exemplo**

O sistema já vem com dados de exemplo:
- **5 peças cadastradas** (parafusos, porcas, arruelas, eletrodos, equipamentos)
- **1 nota fiscal emitida** para teste
- **Códigos automáticos** funcionando (PAR001, POR001, etc.)

## 🔧 **Personalização**

### **Cores e Tema**
Edite `css/styles.css` para personalizar:
```css
:root {
  --primary-color: #1e40af;
  --secondary-color: #3b82f6;
  --accent-color: #06b6d4;
}
```

### **Logo da Empresa**
Substitua o texto "M.Schuenker" no header por sua logo:
```html
<img src="assets/logo.png" alt="Sua Empresa" style="height: 40px;">
```

### **Informações da Empresa**
Atualize os dados nas notas fiscais editando `js/emissao-notas.js`

## 📞 **Suporte e Contribuições**

- **Issues**: Reporte bugs e sugira melhorias
- **Pull Requests**: Contribuições são bem-vindas!
- **Discussions**: Tire dúvidas e compartilhe ideias

## 📝 **Licença**

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

**Desenvolvido com ❤️ para a comunidade de gestão industrial**

**🔗 Acesse agora**: [https://seu-usuario.github.io/mschuenker-sistema](https://seu-usuario.github.io/mschuenker-sistema)
