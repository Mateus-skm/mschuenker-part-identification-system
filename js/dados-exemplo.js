// Dados de exemplo para teste do sistema M.Schuenker
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se já existem dados
    const pecasExistentes = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
    
    if (pecasExistentes.length === 0) {
        // Adicionar peças de exemplo
        const pecasExemplo = [
            {
                id: 1,
                tipo: 'parafuso',
                codigo: 'PAR001',
                nome: 'Parafuso Sextavado M8x25',
                material: 'Aço Inox 304',
                diametro: 8.0,
                comprimento: 25.0,
                rosca: 'M8x1.25',
                estoque: 150,
                preco: 2.50,
                fornecedor: 'Metalúrgica Silva',
                localizacao: 'Prateleira A1',
                descricao: 'Parafuso sextavado para fixação geral, aço inoxidável',
                dataCadastro: new Date().toLocaleDateString('pt-BR'),
                dataHoraCadastro: new Date().toISOString()
            },
            {
                id: 2,
                tipo: 'porca',
                codigo: 'POR001',
                nome: 'Porca Sextavada M8',
                material: 'Aço Inox 304',
                diametro: 8.0,
                comprimento: null,
                rosca: 'M8x1.25',
                estoque: 300,
                preco: 1.20,
                fornecedor: 'Metalúrgica Silva',
                localizacao: 'Prateleira A2',
                descricao: 'Porca sextavada para acompanhar parafuso M8',
                dataCadastro: new Date().toLocaleDateString('pt-BR'),
                dataHoraCadastro: new Date().toISOString()
            },
            {
                id: 3,
                tipo: 'arruela',
                codigo: 'ARR001',
                nome: 'Arruela Lisa 8mm',
                material: 'Aço Carbono',
                diametro: 8.0,
                comprimento: null,
                rosca: null,
                estoque: 500,
                preco: 0.50,
                fornecedor: 'Ferragens Central',
                localizacao: 'Prateleira A3',
                descricao: 'Arruela lisa para distribuir carga do parafuso',
                dataCadastro: new Date().toLocaleDateString('pt-BR'),
                dataHoraCadastro: new Date().toISOString()
            },
            {
                id: 4,
                tipo: 'eletrodo',
                codigo: 'ELE001',
                nome: 'Eletrodo E6013 3.2mm',
                material: 'Aço',
                diametro: 3.2,
                comprimento: 350,
                rosca: null,
                estoque: 50,
                preco: 15.00,
                fornecedor: 'Soldas Brasil',
                localizacao: 'Prateleira B1',
                descricao: 'Eletrodo para soldagem em corrente alternada e contínua',
                dataCadastro: new Date().toLocaleDateString('pt-BR'),
                dataHoraCadastro: new Date().toISOString()
            },
            {
                id: 5,
                tipo: 'equipamento',
                codigo: 'EQP001',
                nome: 'Furadeira de Bancada 12mm',
                material: 'Metal',
                diametro: 12,
                comprimento: null,
                rosca: null,
                estoque: 5,
                preco: 850.00,
                fornecedor: 'Makita',
                localizacao: 'Área de Equipamentos',
                descricao: 'Furadeira de bancada profissional para metais',
                dataCadastro: new Date().toLocaleDateString('pt-BR'),
                dataHoraCadastro: new Date().toISOString()
            }
        ];
        
        localStorage.setItem('pecasCadastradas', JSON.stringify(pecasExemplo));
        console.log('Dados de exemplo carregados com sucesso!');
    }
    
    // Adicionar notas de exemplo
    const notasExistentes = JSON.parse(localStorage.getItem('historicoNotas')) || [];
    
    if (notasExistentes.length === 0) {
        const notasExemplo = [
            {
                numero: 'NF2024001',
                data: new Date().toLocaleDateString('pt-BR'),
                cliente: {
                    nome: 'João da Silva',
                    documento: '123.456.789-00',
                    email: 'joao@email.com',
                    telefone: '(11) 98765-4321',
                    endereco: 'Rua das Flores, 123, Centro, São Paulo, SP'
                },
                itens: [
                    {
                        codigo: 'PAR001',
                        descricao: 'Parafuso Sextavado M8x25',
                        quantidade: 50,
                        precoUnitario: 2.50,
                        desconto: 5,
                        total: 118.75
                    },
                    {
                        codigo: 'POR001',
                        descricao: 'Porca Sextavada M8',
                        quantidade: 50,
                        precoUnitario: 1.20,
                        desconto: 5,
                        total: 57.00
                    }
                ],
                totais: {
                    subtotal: 185.00,
                    desconto: 9.25,
                    valorProdutos: 175.75,
                    icms: 31.64,
                    total: 207.39
                }
            }
        ];
        
        localStorage.setItem('historicoNotas', JSON.stringify(notasExemplo));
        console.log('Notas de exemplo carregadas com sucesso!');
    }
    
    // Adicionar estilos para os badges
    const style = document.createElement('style');
    style.textContent = `
        .estoque-badge {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            display: inline-block;
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
    `;
    document.head.appendChild(style);
});

// Função para exportar dados
function exportarDados() {
    const pecas = JSON.parse(localStorage.getItem('pecasCadastradas')) || [];
    const notas = JSON.parse(localStorage.getItem('historicoNotas')) || [];
    
    const dados = {
        pecas,
        notas,
        exportadoEm: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-mschuenker-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Função para importar dados
function importarDados(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const dados = JSON.parse(e.target.result);
            
            if (dados.pecas) {
                localStorage.setItem('pecasCadastradas', JSON.stringify(dados.pecas));
            }
            
            if (dados.notas) {
                localStorage.setItem('historicoNotas', JSON.stringify(dados.notas));
            }
            
            alert('Dados importados com sucesso!');
            location.reload();
        } catch (error) {
            alert('Erro ao importar dados: ' + error.message);
        }
    };
    reader.readAsText(file);
}
