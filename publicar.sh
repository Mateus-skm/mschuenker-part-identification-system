#!/bin/bash

echo "🚀 Preparando para publicar o M.Schuenker no GitHub..."

# Verificar se é um repositório git
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
    git branch -M main
fi

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos..."
git add .

# Commit inicial
echo "💾 Criando commit..."
git commit -m "🎉 Primeira versão do Sistema M.Schuenker - Gestão de Peças"

# Instruções para o usuário
echo ""
echo "✅ Pronto para publicar!"
echo ""
echo "📋 Próximos passos:"
echo "1. Crie um repositório no GitHub: https://github.com/new"
echo "2. Nome do repositório: mschuenker-sistema (ou outro nome)"
echo "3. NÃO inicialize com README"
echo "4. Execute os comandos abaixo:"
echo ""
echo "🔧 Comandos para publicar:"
echo "git remote add origin https://github.com/SEU-USUARIO/mschuenker-sistema.git"
echo "git push -u origin main"
echo ""
echo "🌐 Após o push, ative o GitHub Pages:"
echo "1. Vá em Settings → Pages"
echo "2. Source: Deploy from a branch"
echo "3. Branch: main"
echo "4. Clique em Save"
echo ""
echo "🔗 URL final: https://SEU-USUARIO.github.io/mschuenker-sistema"
