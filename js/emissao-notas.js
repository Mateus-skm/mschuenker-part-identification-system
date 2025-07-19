// Sistema de emissão de notas fiscais
document.addEventListener('DOMContentLoaded', function() {
    let itensNota = [];
    
    // Elementos do DOM
    const buscaPeca = document.getElementById('buscaPeca');
    const sugestoesPecas = document.getElementById('sugestoesPecas');
    const quantidadeItem = document.getElementById('quantidadeItem');
    const precoItem = document.getElementById('precoItem');
    const descontoItem = document.getElementById('descontoItem');
    const tabelaItens = document.getElementById('tabelaItens');
    
    // Busca inteligente de peças
    buscaPeca.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            sugestoesPecas.style.display = 'none';
            return;
        }
        
        const pecasCadastradas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
        const pecasEncontradas = pecasCadastradas.filter(peca => 
            peca.nome.toLowerCase().includes(query) || 
            peca.codigo.toLowerCase().includes(query)
        ).slice(0, 5);
        
        if (pecasEncontradas.length > 0) {
            sugestoesPecas.innerHTML = pecasEncontradas.map(peca => `
                <div class="suggestion-item" data-codigo="${peca.codigo}" data-nome="${peca.nome}" data-preco="${peca.preco}">
                    <strong>${peca.codigo}</strong> - ${peca.nome} (R$ ${peca.preco.toFixed(2)})
                </div>
            `).join('');
            sugestoesPecas.style.display = 'block';
        } else {
            sugestoesPecas.innerHTML = '<div class="suggestion-item">Nenhuma peça encontrada</div>';
            sugestoesPecas.style.display = 'block';
        }
    });
    
    // Selecionar peça das sugestões
    sugestoesPecas.addEventListener('click', function(e) {
        const item = e.target.closest('.suggestion-item');
        if (item && item.dataset.codigo) {
            buscaPeca.value = item.dataset.nome;
            precoItem.value = item.dataset.preco;
            sugestoesPecas.style.display = 'none';
            quantidadeItem.focus();
        }
    });
    
    // Fechar sugestões ao clicar fora
    document.addEventListener('click', function(e) {
        if (!buscaPeca.contains(e.target) && !sugestoesPecas.contains(e.target)) {
            sugestoesPecas.style.display = 'none';
        }
    });
    
    // Adicionar item à nota
    window.adicionarItem = function() {
        const nomePeca = buscaPeca.value.trim();
        const quantidade = parseInt(quantidadeItem.value) || 0;
        const preco = parseFloat(precoItem.value) || 0;
        const desconto = parseFloat(descontoItem.value) || 0;
        
        if (!nomePeca || quantidade <= 0 || preco <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }
        
        // Gerar código temporário
        const codigo = `ITEM${String(itensNota.length + 1).padStart(3, '0')}`;
        
        const item = {
            codigo,
            descricao: nomePeca,
            quantidade,
            precoUnitario: preco,
            desconto,
            total: (preco * quantidade) * (1 - desconto / 100)
        };
        
        itensNota.push(item);
        atualizarTabela();
        limparCamposItem();
    };
    
    // Atualizar tabela de itens
    function atualizarTabela() {
        if (itensNota.length === 0) {
            tabelaItens.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center; padding: 20px; color: #6b7280;">
                        Nenhum item adicionado
                    </td>
                </tr>
            `;
        } else {
            tabelaItens.innerHTML = itensNota.map((item, index) => `
                <tr>
                    <td>${item.codigo}</td>
                    <td>${item.descricao}</td>
                    <td>${item.quantidade}</td>
                    <td>R$ ${item.precoUnitario.toFixed(2)}</td>
                    <td>${item.desconto}%</td>
                    <td>R$ ${item.total.toFixed(2)}</td>
                    <td>
                        <button class="btn btn-danger" onclick="removerItem(${index})">Remover</button>
                    </td>
                </tr>
            `).join('');
        }
        
        atualizarTotais();
    }
    
    // Remover item
    window.removerItem = function(index) {
        itensNota.splice(index, 1);
        atualizarTabela();
    };
    
    // Limpar campos do item
    function limparCamposItem() {
        buscaPeca.value = '';
        quantidadeItem.value = '1';
        precoItem.value = '';
        descontoItem.value = '0';
        sugestoesPecas.style.display = 'none';
    }
    
    // Atualizar totais
    function atualizarTotais() {
        const subtotal = itensNota.reduce((sum, item) => sum + (item.precoUnitario * item.quantidade), 0);
        const descontoTotal = itensNota.reduce((sum, item) => sum + (item.precoUnitario * item.quantidade * item.desconto / 100), 0);
        const valorProdutos = subtotal - descontoTotal;
        const icms = valorProdutos * 0.18; // 18% ICMS
        const total = valorProdutos + icms;
        
        document.getElementById('subtotalNota').textContent = `R$ ${subtotal.toFixed(2)}`;
        document.getElementById('descontoTotal').textContent = `R$ ${descontoTotal.toFixed(2)}`;
        document.getElementById('valorProdutos').textContent = `R$ ${valorProdutos.toFixed(2)}`;
        document.getElementById('icmsNota').textContent = `R$ ${icms.toFixed(2)}`;
        document.getElementById('totalNota').textContent = `R$ ${total.toFixed(2)}`;
        document.getElementById('totalItens').textContent = `${itensNota.length} item${itensNota.length !== 1 ? 's' : ''}`;
    }
    
    // Limpar nota
    window.limparNota = function() {
        if (confirm('Tem certeza que deseja limpar todos os itens da nota?')) {
            itensNota = [];
            atualizarTabela();
            document.getElementById('formCliente').reset();
        }
    };
    
    // Emitir nota
    window.emitirNota = function() {
        // Validar dados do cliente
        const nomeCliente = document.getElementById('nomeCliente').value;
        const documentoCliente = document.getElementById('documentoCliente').value;
        const emailCliente = document.getElementById('emailCliente').value;
        
        if (!nomeCliente || !documentoCliente || !emailCliente) {
            alert('Por favor, preencha os dados do cliente.');
            return;
        }
        
        if (itensNota.length === 0) {
            alert('Adicione pelo menos um item à nota.');
            return;
        }
        
        // Calcular totais finais
        const subtotal = itensNota.reduce((sum, item) => sum + (item.precoUnitario * item.quantidade), 0);
        const descontoTotal = itensNota.reduce((sum, item) => sum + (item.precoUnitario * item.quantidade * item.desconto / 100), 0);
        const valorProdutos = subtotal - descontoTotal;
        const icms = valorProdutos * 0.18;
        const total = valorProdutos + icms;
        
        // Criar nota fiscal
        const notaFiscal = {
            numero: `NF${Date.now()}`,
            data: new Date().toLocaleDateString('pt-BR'),
            cliente: {
                nome: nomeCliente,
                documento: documentoCliente,
                email: emailCliente,
                telefone: document.getElementById('telefoneCliente').value,
                endereco: document.getElementById('enderecoCliente').value
            },
            itens: itensNota,
            totais: {
                subtotal,
                desconto: descontoTotal,
                valorProdutos,
                icms,
                total
            }
        };
        
        // Salvar nota no localStorage
        let notasEmitidas = JSON.parse(localStorage.getItem('historicoNotas')) || [];
        notasEmitidas.unshift(notaFiscal);
        localStorage.setItem('historicoNotas', JSON.stringify(notasEmitidas));
        
        // Gerar visualização da nota
        gerarVisualizacaoNota(notaFiscal);
        
        alert(`Nota fiscal ${notaFiscal.numero} emitida com sucesso!`);
        
        // Limpar formulário
        limparNota();
    };
    
    // Gerar visualização da nota
    function gerarVisualizacaoNota(nota) {
        const visualizacao = window.open('', '_blank', 'width=800,height=600');
        visualizacao.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Nota Fiscal ${nota.numero}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .section { margin-bottom: 20px; }
                    .section h3 { border-bottom: 1px solid #ccc; padding-bottom: 5px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
                    .total { text-align: right; font-weight: bold; font-size: 1.2em; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>NOTA FISCAL</h1>
                    <h2>Número: ${nota.numero}</h2>
                    <p>Data: ${nota.data}</p>
                </div>
                
                <div class="section">
                    <h3>Dados do Cliente</h3>
                    <p><strong>Nome:</strong> ${nota.cliente.nome}</p>
                    <p><strong>CPF/CNPJ:</strong> ${nota.cliente.documento}</p>
                    <p><strong>Email:</strong> ${nota.cliente.email}</p>
                    <p><strong>Telefone:</strong> ${nota.cliente.telefone || 'Não informado'}</p>
                    <p><strong>Endereço:</strong> ${nota.cliente.endereco || 'Não informado'}</p>
                </div>
                
                <div class="section">
                    <h3>Itens da Nota</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descrição</th>
                                <th>Qtd</th>
                                <th>Preço Unit.</th>
                                <th>Desconto</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${nota.itens.map(item => `
                                <tr>
                                    <td>${item.codigo}</td>
                                    <td>${item.descricao}</td>
                                    <td>${item.quantidade}</td>
                                    <td>R$ ${item.precoUnitario.toFixed(2)}</td>
                                    <td>${item.desconto}%</td>
                                    <td>R$ ${item.total.toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div class="section">
                    <h3>Totais</h3>
                    <p>Subtotal: R$ ${nota.totais.subtotal.toFixed(2)}</p>
                    <p>Desconto: R$ ${nota.totais.desconto.toFixed(2)}</p>
                    <p>Valor dos Produtos: R$ ${nota.totais.valorProdutos.toFixed(2)}</p>
                    <p>ICMS (18%): R$ ${nota.totais.icms.toFixed(2)}</p>
                    <p class="total">Total da Nota: R$ ${nota.totais.total.toFixed(2)}</p>
                </div>
            </body>
            </html>
        `);
        visualizacao.document.close();
    }
    
    // Adicionar CSS para sugestões
    const style = document.createElement('style');
    style.textContent = `
        .search-suggestions {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
        }
        
        .suggestion-item {
            padding: 8px 12px;
            cursor: pointer;
            border-bottom: 1px solid #f3f4f6;
        }
        
        .suggestion-item:hover {
            background-color: #f9fafb;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
            gap: 12px;
            align-items: end;
        }
        
        @media (max-width: 768px) {
            .form-row {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});
