// Sistema de cadastro de peças com funcionalidades avançadas
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastroPeca');
    const tipoPeca = document.getElementById('tipoPeca');
    const codigoPeca = document.getElementById('codigoPeca');
    const listaPecas = document.getElementById('listaPecas');
    const buscaPecas = document.getElementById('buscaPecas');

    // Gerar código automático
    window.gerarCodigoAutomatico = function() {
        const tipo = tipoPeca.value;
        if (!tipo) {
            alert('Por favor, selecione um tipo de peça primeiro.');
            return;
        }

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
        codigoPeca.value = `${prefixo}${proximoNumero.toString().padStart(3, '0')}`;
    };

    // Auto-preencher código quando tipo é selecionado
    tipoPeca.addEventListener('change', function() {
        if (this.value) {
            gerarCodigoAutomatico();
        }
    });

    // Limpar formulário
    window.limparFormulario = function() {
        form.reset();
        codigoPeca.value = '';
    };

    // Carregar peças cadastradas
    function carregarPecas() {
        const pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        renderizarTabela(pecasCadastradas);
    }

    // Renderizar tabela de peças
    function renderizarTabela(pecas) {
        if (pecas.length === 0) {
            listaPecas.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 20px; color: #6b7280;">
                        Nenhuma peça cadastrada ainda
                    </td>
                </tr>
            `;
            return;
        }

        listaPecas.innerHTML = pecas.map(peca => `
            <tr>
                <td><strong>${peca.codigo}</strong></td>
                <td>${peca.tipo}</td>
                <td>${peca.nome}</td>
                <td>
                    <span class="estoque-badge ${peca.estoque <= 10 ? 'baixo' : peca.estoque <= 50 ? 'medio' : 'alto'}">
                        ${peca.estoque} un
                    </span>
                </td>
                <td>R$ ${peca.preco.toFixed(2)}</td>
                <td>
                    <button class="btn btn-secondary" onclick="verPeca('${peca.codigo}')">Ver</button>
                    <button class="btn btn-danger" onclick="excluirPeca('${peca.codigo}')">Excluir</button>
                </td>
            </tr>
        `).join('');
    }

    // Buscar peças
    buscaPecas.addEventListener('input', function() {
        const termo = this.value.toLowerCase();
        const pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        
        const pecasFiltradas = pecasCadastradas.filter(peca => 
            peca.nome.toLowerCase().includes(termo) ||
            peca.codigo.toLowerCase().includes(termo) ||
            peca.tipo.toLowerCase().includes(termo)
        );
        
        renderizarTabela(pecasFiltradas);
    });

    // Ver detalhes da peça
    window.verPeca = function(codigo) {
        const pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        const peca = pecasCadastradas.find(p => p.codigo === codigo);
        
        if (peca) {
            alert(`
                Detalhes da Peça:
                
                Código: ${peca.codigo}
                Tipo: ${peca.tipo}
                Nome: ${peca.nome}
                Material: ${peca.material || 'Não especificado'}
                Diâmetro: ${peca.diametro || 'Não especificado'} mm
                Comprimento: ${peca.comprimento || 'Não especificado'} mm
                Rosca: ${peca.rosca || 'Não especificado'}
                Estoque: ${peca.estoque} unidades
                Preço: R$ ${peca.preco.toFixed(2)}
                Fornecedor: ${peca.fornecedor || 'Não especificado'}
                Localização: ${peca.localizacao || 'Não especificado'}
                Descrição: ${peca.descricao || 'Sem descrição'}
                Data de Cadastro: ${peca.dataCadastro}
            `);
        }
    };

    // Excluir peça
    window.excluirPeca = function(codigo) {
        if (confirm(`Tem certeza que deseja excluir a peça ${codigo}?`)) {
            let pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
            pecasCadastradas = pecasCadastradas.filter(p => p.codigo !== codigo);
            localStorage.setItem('pecasCadastradas', JSON.stringify(pecasCadastradas));
            carregarPecas();
            alert('Peça excluída com sucesso!');
        }
    };

    // Submeter formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const novaPeca = {
            id: Date.now(),
            tipo: tipoPeca.value,
            codigo: codigoPeca.value.toUpperCase(),
            nome: document.getElementById('nomePeca').value,
            material: document.getElementById('materialPeca').value,
            diametro: document.getElementById('diametroPeca').value,
            comprimento: document.getElementById('comprimentoPeca').value,
            rosca: document.getElementById('roscaPeca').value,
            estoque: parseInt(document.getElementById('estoquePeca').value) || 0,
            preco: parseFloat(document.getElementById('precoPeca').value) || 0,
            fornecedor: document.getElementById('fornecedorPeca').value,
            localizacao: document.getElementById('localizacaoPeca').value,
            descricao: document.getElementById('descricaoPeca').value,
            dataCadastro: new Date().toLocaleDateString('pt-BR'),
            dataHoraCadastro: new Date().toISOString()
        };

        // Validar campos obrigatórios
        if (!novaPeca.tipo || !novaPeca.codigo || !novaPeca.nome || novaPeca.estoque === undefined || novaPeca.preco === undefined) {
            alert('Por favor, preencha todos os campos obrigatórios (*)');
            return;
        }

        // Validar valores
        if (novaPeca.preco < 0) {
            alert('O preço deve ser um valor positivo.');
            return;
        }

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

        alert(`Peça ${novaPeca.codigo} cadastrada com sucesso!`);
        
        // Limpar formulário e recarregar lista
        form.reset();
        codigoPeca.value = '';
        carregarPecas();
    });

    // Adicionar CSS para estoque
    const style = document.createElement('style');
    style.textContent = `
        .estoque-badge {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
        }
        .estoque-badge.baixo {
            background-color: #fee2e2;
            color: #dc2626;
        }
        .estoque-badge.medio {
            background-color: #fef3c7;
            color: #d97706;
        }
        .estoque-badge.alto {
            background-color: #dcfce7;
            color: #059669;
        }
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .form-actions {
            display: flex;
            gap: 12px;
            margin-top: 24px;
        }
        .card-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    `;
    document.head.appendChild(style);

    // Carregar peças ao iniciar
    carregarPecas();
});
