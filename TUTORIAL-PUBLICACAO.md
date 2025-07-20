# 📚 Tutorial Completo - Publicar M.Schuenker no GitHub Pages

## 🎯 Objetivo
Publicar o sistema M.Schuenker no GitHub Pages para acesso online gratuito.

## 📋 Pré-requisitos
- Conta no GitHub (gratuita)
- Navegador web
- 10 minutos de tempo

---

## 🔧 Método 1: Interface Web (Mais Fácil)

### **Passo 1: Criar Conta no GitHub**
1. Acesse: https://github.com
2. Clique em **"Sign up"** (cadastre-se)
3. Complete o cadastro com email, senha e nome de usuário
4. Verifique seu email

### **Passo 2: Criar Repositório**
1. **Clique no "+"** no canto superior direito
2. Selecione **"New repository"**
3. **Preencha os campos:**
   - **Repository name**: `mschuenker-sistema`
   - **Description**: "Sistema completo para gestão de peças e notas fiscais"
   - **Deixe PÚBLICO** (importante para GitHub Pages gratuito)
   - **NÃO marque** "Initialize with README"
4. Clique em **"Create repository"**

### **Passo 3: Upload dos Arquivos**
1. Na página do repositório, clique em **"uploading an existing file"**
2. **Arraste TODOS os arquivos** da pasta para a área de upload:
   - index.html
   - css/ (pasta inteira)
   - js/ (pasta inteira)
   - pages/ (pasta inteira)
   - assets/ (se existir)
   - README.md
   - .gitignore
3. **Escreva a mensagem**: "Primeira versão do sistema M.Schuenker"
4. Clique em **"Commit changes"**

### **Passo 4: Ativar GitHub Pages**
1. No repositório, clique em **"Settings"** (lateral direita)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em **"Save"**

### **Passo 5: Aguardar e Acessar**
- **Aguarde 1-5 minutos** para o deploy
- Sua URL será: `https://SEU-USUARIO.github.io/mschuenker-sistema`
- Substitua SEU-USUARIO pelo seu nome de usuário

---

## 🔧 Método 2: Terminal/Comandos (Alternativo)

### **Passo 1: Abrir Terminal**
- **Windows**: Win+R → cmd
- **Mac**: Terminal
- **Linux**: Ctrl+Alt+T

### **Passo 2: Executar Comandos**
```bash
# 1. Configurar Git (apenas primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Inicializar repositório
git init
git add .
git commit -m "🎉 Sistema M.Schuenker - Gestão Completa de Peças"

# 3. Adicionar repositório remoto
git remote add origin https://github.com/SEU-USUARIO/mschuenker-sistema.git

# 4. Subir arquivos
git push -u origin main
```

---

## 🔧 Método 3: Script Automático (Mais Rápido)

### **Passo 1: Executar Script**
```bash
./publicar.sh
```

### **Passo 2: Seguir Instruções**
O script vai te guiar com prompts interativos.

---

## 📱 Verificação Final

### **Como Saber se Funcionou:**
1. **Status do Deploy**: Vá em Actions no seu repositório
2. **URL Ativa**: Tente acessar `https://SEU-USUARIO.github.io/mschuenker-sistema`
3. **Verde no Status**: Um círculo verde indica deploy bem-sucedido

### **Teste Rápido:**
1. Acesse a URL gerada
2. Faça login com qualquer email
3. Teste o cadastro de peças
4. Teste a emissão de notas

---

## 🚨 Solução de Problemas

### **Erro: "Repository not found"**
- Verifique se o nome do repositório está correto
- Certifique-se de estar logado no GitHub

### **Erro: "Permission denied"**
- Verifique se o repositório é público
- Confirme seu nome de usuário

### **Erro: "404 Page not found"**
- Aguarde mais 5-10 minutos
- Verifique se GitHub Pages está ativado em Settings → Pages

---

## ✅ Checklist Final

- [ ] Conta GitHub criada
- [ ] Repositório criado
- [ ] Arquivos enviados
- [ ] GitHub Pages ativado
- [ ] URL testada
- [ ] Sistema funcionando

## 🎯 URL Final
**`https://SEU-USUARIO.github.io/mschuenker-sistema`**

Substitua SEU-USUARIO pelo seu nome de usuário real do GitHub.

**Pronto! Seu sistema estará online em menos de 10 minutos!**
