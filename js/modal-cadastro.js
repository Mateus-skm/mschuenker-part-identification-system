// Controle do modal de cadastro rápido de peças
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalCadastroPeca');
    const btnClose = document.getElementById('closeModalCadastro');
    const form = document.getElementById('formCadastroModal');
    
    // Abrir modal ao clicar em botão (vou adicionar botão depois)
    // Exemplo: document.getElementById('btnAbrirModal').addEventListener('click', () => modal.style.display = 'block');
    
    // Fechar modal
    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });
    
    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            form.reset();
        }
    });
    
    // Gerar código automático
    function gerarCodigoAutomatico(tipo) {
        const prefixos = {
            'parafuso': 'PAR',
            'porca': 'POR',
            'arruela': 'ARR',
            'eletrodo': 'ELE',
            'equipamento': 'EQP'
        };
        
        const prefixo = prefixos[tipo] || 'PEC';
        const pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        
        // Encontrar o próximo número sequencial
        const numeros = pecasCadastradas
            .filter(p => p.codigo.startsWith(prefixo))
            .map(p => parseInt(p.codigo.replace(prefixo, '')) || 0);
        
        const proximoNumero = Math.max(0, ...numeros) + 1;
        return `${prefixo}${proximoNumero.toString().padStart(3, '0')}`;
    }

    // Auto-preencher código quando tipo é selecionado
    document.getElementById('modalTipoPeca').addEventListener('change', function() {
        const tipo = this.value;
        if (tipo) {
            const codigoGerado = gerarCodigoAutomatico(tipo);
            document.getElementById('modalCodigoPeca').value = codigoGerado;
        }
    });

    // Submeter formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Capturar dados do formulário
        const novaPeca = {
            id: Date.now(),
            tipo: form.modalTipoPeca.value,
            codigo: form.modalCodigoPeca.value.toUpperCase(),
            nome: form.modalNomePeca.value,
            material: form.modalMaterial.value,
            diametro: form.modalDiametro.value,
            comprimento: form.modalComprimento.value,
            rosca: form.modalRosca.value,
            estoque: parseInt(form.modalEstoque.value) || 0,
            preco: parseFloat(form.modalPreco.value) || 0,
            fornecedor: form.modalFornecedor.value,
            descricao: form.modalDescricao.value,
            dataCadastro: new Date().toLocaleDateString('pt-BR'),
            dataHoraCadastro: new Date().toISOString()
        };
        
        // Validar campos obrigatórios
        if (!novaPeca.tipo || !novaPeca.codigo || !novaPeca.nome) {
            alert('Por favor, preencha todos os campos obrigatórios (*)');
            return;
        }
        
        // Validar preço positivo
        if (novaPeca.preco < 0) {
            alert('O preço deve ser um valor positivo.');
            return;
        }
        
        // Validar estoque não negativo
        if (novaPeca.estoque < 0) {
            alert('O estoque não pode ser negativo.');
            return;
        }
        
        // Salvar no localStorage
        let pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        
        // Verificar código duplicado
        if (pecasCadastradas.find(p => p.codigo === novaPeca.codigo)) {
            alert('Código da peça já existe! Use um código diferente.');
            return;
        }
        
        pecasCadastradas.unshift(novaPeca);
        localStorage.setItem('pecasCadastradas', JSON.stringify(pecasCadastradas));
        
        // Atualizar contador no dashboard
        atualizarContadoresDashboard();
        
        alert(`Peça ${novaPeca.codigo} cadastrada com sucesso!`);
        
        // Fechar modal e resetar formulário
        modal.style.display = 'none';
        form.reset();
    });

    // Função para atualizar contadores no dashboard
    function atualizarContadoresDashboard() {
        const pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        
        // Atualizar contadores se existirem
        const contadores = document.querySelectorAll('[data-contador]');
        contadores.forEach(contador => {
            const tipo = contador.dataset.contador;
            const total = pecasCadastradas.filter(p => p.tipo === tipo).length;
            contador.textContent = total;
        });
    }
});
