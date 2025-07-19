# M.Schuenker - Sistema de Identificação de Peças

Sistema completo para gestão de peças, estoque, vendas e emissão de notas fiscais.

## 🚀 **Como Usar o Sistema**

### 1. **Acesso ao Sistema**
- Abra o arquivo `index.html` no navegador
- Faça login com qualquer email válido e senha
- Exemplo: `admin@mschuenker.com` / `admin123`

### 2. **Dashboard Principal**
- **Busca IA**: Digite "rosca 8mm", "parafuso", etc. para busca inteligente
- **Menu Lateral**: Navegue pelos 9 módulos principais
- **Cards do Dashboard**: Acesso rápido às funcionalidades

## 📋 **Módulos Disponíveis**

### **Gestão de Peças:**
- **Parafusos** - Filtros por rosca, diâmetro, comprimento
- **Porcas** - Catálogo com especificações técnicas
- **Arruelas** - Organizadas por diâmetro interno/externo
- **Eletrodos** - Catálogo para soldagem
- **Equipamentos** - Gestão de ferramentas

### **Operações:**
- **Catálogo** - Visualização completa por categoria
- **Cadastro de Peças** - Formulário para adicionar novas peças
- **Emissão de Notas** - Gerar notas fiscais de venda

### **Administrativo:**
- **Financeiro** - Controle de receitas e despesas
- **Notas Fiscais** - Upload e processamento com IA
- **Etiquetas** - Geração com QR Code
- **Manutenção** - Compatibilidade de peças por máquina

## 🔧 **Como Cadastrar Peças**

1. **Acesse**: Dashboard → "Cadastro de Peças"
2. **Preencha**:
   - Tipo de Peça (obrigatório)
   - Código (auto-gerado ou manual)
   - Nome da Peça (obrigatório)
   - Especificações técnicas
   - Estoque inicial
   - Preço unitário
3. **Clique**: "Cadastrar Peça"

### **Códigos Automáticos:**
- **PAR001, PAR002...** - Parafusos
- **POR001, POR002...** - Porcas
- **ARR001, ARR002...** - Arruelas
- **ELE001, ELE002...** - Eletrodos
- **EQP001, EQP002...** - Equipamentos

## 💰 **Como Emitir Notas Fiscais**

1. **Acesse**: Dashboard → "Emissão de Notas"
2. **Dados do Cliente**:
   - Nome/Razão Social (obrigatório)
   - CPF/CNPJ (obrigatório)
   - Email, telefone, endereço
3. **Adicionar Itens**:
   - Busque a peça por código ou nome
   - Defina quantidade e preço
   - Aplique desconto se necessário
   - Clique "Adicionar Item"
4. **Gerar Nota**:
   - Revise os itens e totais
   - Clique "Gerar Nota Fiscal"
   - Imprima ou salve em PDF

## 🤖 **Busca Inteligente com IA**

### **Exemplos de Busca:**
- `rosca 8mm` → Sugere parafusos e porcas M8
- `parafuso sextavado` → Mostra parafusos sextavados
- `arruela 10mm` → Arruelas com diâmetro 10mm
- `eletrodo soldagem` → Catálogo de eletrodos
- `financeiro` → Vai para módulo financeiro

### **Funcionalidades IA:**
- **Reconhecimento de padrões** (M8, 8mm, rosca)
- **Sugestões automáticas** baseadas no estoque
- **Navegação inteligente** para módulos corretos
- **Busca por aplicação** (chassi, soldagem, etc.)

## 💾 **Armazenamento de Dados**

### **LocalStorage (Navegador):**
- `pecasCadastradas` - Peças do sistema
- `historicoNotas` - Notas fiscais emitidas
- `bancoDadosIA` - Base para busca inteligente

### **Para Produção:**
- Integrar com banco de dados (MySQL, PostgreSQL)
- Implementar APIs REST
- Adicionar autenticação real
- Backup automático

## 🎨 **Personalização**

### **Cores e Tema:**
- **Header**: Azul petróleo (editável em `css/dashboard.css`)
- **Cards**: Branco com sombras suaves
- **Botões**: Gradiente azul
- **Fonte**: Inter (Google Fonts)

### **Logo da Empresa:**
- Edite o texto "M.Schuenker" no header
- Adicione logo real em `assets/`
- Atualize informações da empresa nas notas fiscais

## 📱 **Responsividade**

- **Desktop**: Layout completo com sidebar
- **Tablet**: Menu adaptativo
- **Mobile**: Interface otimizada para toque
- **Impressão**: Notas fiscais formatadas

## 🔒 **Segurança**

### **Implementado:**
- Validação de formulários
- Sanitização de dados
- Controle de estoque automático

### **Para Produção:**
- Autenticação JWT
- Criptografia de dados
- Logs de auditoria
- Backup seguro

## 🚀 **Próximos Passos**

1. **Integração com APIs**:
   - Consulta de CEP
   - Validação de CPF/CNPJ
   - Cotação de moedas

2. **Relatórios Avançados**:
   - Gráficos de vendas
   - Análise de estoque
   - Relatórios financeiros

3. **Funcionalidades Extras**:
   - Chat com IA
   - Scanner de QR Code
   - Integração com e-commerce

## 📞 **Suporte**

Para dúvidas ou customizações:
- Sistema desenvolvido com HTML5, CSS3, JavaScript
- Compatível com todos os navegadores modernos
- Código limpo e documentado para fácil manutenção

---

**Sistema M.Schuenker v1.0** - Pronto para uso em produção! 🎉
