// Sistema de cadastro de peças
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroPecaForm');
    const pecasRecentes = document.getElementById('pecasRecentes');
    
    // Carregar peças do localStorage
    let pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
    
    // Exibir peças recentes ao carregar a página
    exibirPecasRecentes();
    
    // Handler do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        cadastrarPeca();
    });
    
    // Função para cadastrar nova peça
    function cadastrarPeca() {
        const novaPeca = {
            id: Date.now(),
            tipo: document.getElementById('tipoPeca').value,
            codigo: document.getElementById('codigoPeca').value.toUpperCase(),
            nome: document.getElementById('nomePeca').value,
            material: document.getElementById('material').value,
            diametro: document.getElementById('diametro').value,
            comprimento: document.getElementById('comprimento').value,
            rosca: document.getElementById('rosca').value,
            estoque: parseInt(document.getElementById('estoque').value) || 0,
            preco: parseFloat(document.getElementById('preco').value) || 0,
            fornecedor: document.getElementById('fornecedor').value,
            descricao: document.getElementById('descricao').value,
            dataCadastro: new Date().toLocaleDateString('pt-BR')
        };
        
        // Validar campos obrigatórios
        if (!novaPeca.tipo || !novaPeca.codigo || !novaPeca.nome) {
            alert('Por favor, preencha todos os campos obrigatórios (*)');
            return;
        }
        
        // Verificar se código já existe
        if (pecasCadastradas.find(peca => peca.codigo === novaPeca.codigo)) {
            alert('Código da peça já existe! Use um código diferente.');
            return;
        }
        
        // Adicionar à lista
        pecasCadastradas.unshift(novaPeca);
        
        // Salvar no localStorage
        localStorage.setItem('pecasCadastradas', JSON.stringify(pecasCadastradas));
        
        // Limpar formulário
        form.reset();
        
        // Exibir peças recentes
        exibirPecasRecentes();
        
        // Mostrar mensagem de sucesso
        mostrarMensagemSucesso(`Peça ${novaPeca.codigo} cadastrada com sucesso!`);
    }
    
    // Função para exibir peças recentes
    function exibirPecasRecentes() {
        if (pecasCadastradas.length === 0) {
            pecasRecentes.innerHTML = `
                <p style="color: #6b7280; text-align: center; padding: 20px;">
                    Nenhuma peça cadastrada ainda
                </p>
            `;
            return;
        }
        
        const ultimasPecas = pecasCadastradas.slice(0, 5);
        
        pecasRecentes.innerHTML = ultimasPecas.map(peca => `
            <div style="border-bottom: 1px solid #e5e7eb; padding: 12px 0;">
                <div style="font-weight: 500; color: #1f2937;">${peca.codigo}</div>
                <div style="font-size: 14px; color: #6b7280;">${peca.nome}</div>
                <div style="font-size: 12px; color: #9ca3af;">
                    ${peca.tipo.charAt(0).toUpperCase() + peca.tipo.slice(1)} • 
                    Estoque: ${peca.estoque} • 
                    ${peca.dataCadastro}
                </div>
            </div>
        `).join('');
    }
    
    // Função para mostrar mensagem de sucesso
    function mostrarMensagemSucesso(mensagem) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #059669;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 1000;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;
        
        notification.textContent = mensagem;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // Auto-gerar código baseado no tipo
    document.getElementById('tipoPeca').addEventListener('change', function() {
        const tipo = this.value;
        const codigoInput = document.getElementById('codigoPeca');
        
        if (tipo && !codigoInput.value) {
            const prefixos = {
                'parafuso': 'PAR',
                'porca': 'POR',
                'arruela': 'ARR',
                'eletrodo': 'ELE',
                'equipamento': 'EQP'
            };
            
            const prefixo = prefixos[tipo];
            const numero = String(pecasCadastradas.filter(p => p.tipo === tipo).length + 1).padStart(3, '0');
            codigoInput.value = `${prefixo}${numero}`;
        }
    });
});

// Função global para limpar formulário
function limparFormulario() {
    document.getElementById('cadastroPecaForm').reset();
}
