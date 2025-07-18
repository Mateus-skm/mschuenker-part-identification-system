// Dashboard navigation and page loading functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu handling
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.dataset.page;
            loadPage(page);
        });
    });
});

// Page loading functions
function loadParafusosPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Parafusos</h1>
            <p class="page-description">Gerencie e identifique parafusos por tipo, tamanho e rosca</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Filtros de Busca</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Tipo de Rosca</label>
                    <select class="form-select">
                        <option>Todos</option>
                        <option>Métrica</option>
                        <option>Whitworth</option>
                        <option>UNC</option>
                        <option>UNF</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Diâmetro (mm)</label>
                    <input type="number" class="form-input" placeholder="Ex: 8">
                </div>
                <div class="form-group">
                    <label class="form-label">Comprimento (mm)</label>
                    <input type="number" class="form-input" placeholder="Ex: 25">
                </div>
                <button class="btn">Buscar Parafusos</button>
            </div>
            
            <div class="card" style="grid-column: span 2;">
                <div class="card-header">
                    <h3 class="card-title">Parafusos Cadastrados</h3>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Tipo</th>
                                <th>Diâmetro</th>
                                <th>Comprimento</th>
                                <th>Rosca</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PAR001</td>
                                <td>Sextavado</td>
                                <td>8mm</td>
                                <td>25mm</td>
                                <td>M8x1.25</td>
                                <td>150 un</td>
                                <td>
                                    <button class="btn btn-secondary">Ver</button>
                                    <button class="btn">Etiqueta</button>
                                </td>
                            </tr>
                            <tr>
                                <td>PAR002</td>
                                <td>Phillips</td>
                                <td>6mm</td>
                                <td>20mm</td>
                                <td>M6x1.0</td>
                                <td>200 un</td>
                                <td>
                                    <button class="btn btn-secondary">Ver</button>
                                    <button class="btn">Etiqueta</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadPorcasPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Porcas</h1>
            <p class="page-description">Catálogo completo de porcas com especificações técnicas</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Filtros</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Tipo</label>
                    <select class="form-select">
                        <option>Todas</option>
                        <option>Sextavada</option>
                        <option>Borboleta</option>
                        <option>Cega</option>
                        <option>Autotravante</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Rosca</label>
                    <input type="text" class="form-input" placeholder="Ex: M8">
                </div>
                <button class="btn">Filtrar</button>
            </div>
            
            <div class="card" style="grid-column: span 2;">
                <div class="card-header">
                    <h3 class="card-title">Porcas Disponíveis</h3>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Tipo</th>
                                <th>Rosca</th>
                                <th>Material</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>POR001</td>
                                <td>Sextavada</td>
                                <td>M8x1.25</td>
                                <td>Aço Inox</td>
                                <td>300 un</td>
                                <td>
                                    <button class="btn btn-secondary">Ver</button>
                                    <button class="btn">Etiqueta</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadArruelasPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Arruelas</h1>
            <p class="page-description">Arruelas organizadas por diâmetro interno e externo</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Especificações</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Diâmetro Interno (mm)</label>
                    <input type="number" class="form-input" placeholder="Ex: 8">
                </div>
                <div class="form-group">
                    <label class="form-label">Diâmetro Externo (mm)</label>
                    <input type="number" class="form-input" placeholder="Ex: 16">
                </div>
                <button class="btn">Buscar</button>
            </div>
            
            <div class="card" style="grid-column: span 2;">
                <div class="card-header">
                    <h3 class="card-title">Arruelas em Estoque</h3>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Tipo</th>
                                <th>Ø Interno</th>
                                <th>Ø Externo</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ARR001</td>
                                <td>Lisa</td>
                                <td>8mm</td>
                                <td>16mm</td>
                                <td>500 un</td>
                                <td>
                                    <button class="btn btn-secondary">Ver</button>
                                    <button class="btn">Etiqueta</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadEletrodosPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Eletrodos</h1>
            <p class="page-description">Catálogo de eletrodos para soldagem</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Especificações</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Diâmetro</label>
                    <select class="form-select">
                        <option>Todos</option>
                        <option>2.5mm</option>
                        <option>3.2mm</option>
                        <option>4.0mm</option>
                        <option>5.0mm</option>
                    </select>
                </div>
                <button class="btn">Filtrar</button>
            </div>
            
            <div class="card" style="grid-column: span 2;">
                <div class="card-header">
                    <h3 class="card-title">Eletrodos Disponíveis</h3>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Tipo</th>
                                <th>Diâmetro</th>
                                <th>Aplicação</th>
                                <th>Estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ELE001</td>
                                <td>E6013</td>
                                <td>3.2mm</td>
                                <td>Geral</td>
                                <td>50 kg</td>
                                <td>
                                    <button class="btn btn-secondary">Ver</button>
                                    <button class="btn">Etiqueta</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadEquipamentosPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Equipamentos</h1>
            <p class="page-description">Gestão de equipamentos e ferramentas</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Adicionar Equipamento</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-input" placeholder="Nome do equipamento">
                </div>
                <div class="form-group">
                    <label class="form-label">Categoria</label>
                    <select class="form-select">
                        <option>Ferramenta Manual</option>
                        <option>Máquina</option>
                        <option>Equipamento de Medição</option>
                    </select>
                </div>
                <button class="btn">Cadastrar</button>
            </div>
            
            <div class="card" style="grid-column: span 2;">
                <div class="card-header">
                    <h3 class="card-title">Equipamentos Cadastrados</h3>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EQP001</td>
                                <td>Furadeira Bosch</td>
                                <td>Ferramenta</td>
                                <td>Disponível</td>
                                <td>
                                    <button class="btn btn-secondary">Ver</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function loadCatalogoPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Catálogo</h1>
            <p class="page-description">Catálogo completo de peças organizadas por categoria</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Parafusos</h3>
                </div>
                <p class="card-description">156 itens cadastrados</p>
                <button class="btn" onclick="loadPage('parafusos')">Ver Catálogo</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Porcas</h3>
                </div>
                <p class="card-description">89 itens cadastrados</p>
                <button class="btn" onclick="loadPage('porcas')">Ver Catálogo</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Arruelas</h3>
                </div>
                <p class="card-description">67 itens cadastrados</p>
                <button class="btn" onclick="loadPage('arruelas')">Ver Catálogo</button>
            </div>
        </div>
    `;
}

function loadFinanceiroPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Financeiro</h1>
            <p class="page-description">Controle de contas a pagar e receber</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Resumo Mensal</h3>
                </div>
                <div style="padding: 20px; text-align: center;">
                    <div style="margin-bottom: 16px;">
                        <h4 style="color: #059669; font-size: 24px;">R$ 15.450,00</h4>
                        <p style="color: #6b7280;">Receitas</p>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <h4 style="color: #dc2626; font-size: 24px;">R$ 8.230,00</h4>
                        <p style="color: #6b7280;">Despesas</p>
                    </div>
                    <div>
                        <h4 style="color: #1f2937; font-size: 28px;">R$ 7.220,00</h4>
                        <p style="color: #6b7280;">Saldo</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Nova Transação</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Tipo</label>
                    <select class="form-select">
                        <option>Receita</option>
                        <option>Despesa</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Descrição</label>
                    <input type="text" class="form-input" placeholder="Descrição da transação">
                </div>
                <div class="form-group">
                    <label class="form-label">Valor (R$)</label>
                    <input type="number" class="form-input" placeholder="0,00" step="0.01">
                </div>
                <button class="btn">Adicionar</button>
            </div>
        </div>
    `;
}

function loadNotasFiscaisPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Notas Fiscais</h1>
            <p class="page-description">Gestão de notas fiscais com IA</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Upload de Nota Fiscal</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Arquivo (PDF/XML)</label>
                    <input type="file" class="form-input" accept=".pdf,.xml">
                </div>
                <div class="form-group">
                    <label class="form-label">Número da Nota</label>
                    <input type="text" class="form-input" placeholder="Número da NF">
                </div>
                <button class="btn">Processar com IA</button>
            </div>
        </div>
    `;
}

function loadEtiquetasPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Emissão de Etiquetas</h1>
            <p class="page-description">Gere etiquetas com QR Code</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Configurar Etiqueta</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Tipo de Peça</label>
                    <select class="form-select">
                        <option>Parafuso</option>
                        <option>Porca</option>
                        <option>Arruela</option>
                        <option>Eletrodo</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Nome da Peça</label>
                    <input type="text" class="form-input" placeholder="Ex: Parafuso Sextavado M8x25">
                </div>
                <div class="form-group">
                    <label class="form-label">Código</label>
                    <input type="text" class="form-input" placeholder="Ex: PAR001">
                </div>
                <button class="btn">Gerar Etiqueta</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Preview da Etiqueta</h3>
                </div>
                <div style="border: 2px dashed #e5e7eb; padding: 20px; text-align: center;">
                    <div style="border: 1px solid #d1d5db; padding: 16px; background: white; display: inline-block;">
                        <h4>Parafuso Sextavado</h4>
                        <p>M8x25mm</p>
                        <p><strong>PAR001</strong></p>
                        <div style="width: 60px; height: 60px; background: #f3f4f6; margin: 0 auto;">QR</div>
                    </div>
                </div>
                <button class="btn">Imprimir</button>
            </div>
        </div>
    `;
}

function loadManutencaoPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Manutenção</h1>
            <p class="page-description">Sistema de manutenção com compatibilidade de peças</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Buscar Máquina</h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Marca</label>
                    <input type="text" class="form-input" placeholder="Ex: Caterpillar">
                </div>
                <div class="form-group">
                    <label class="form-label">Modelo</label>
                    <input type="text" class="form-input" placeholder="Ex: 320D">
                </div>
                <div class="form-group">
                    <label class="form-label">Ano</label>
                    <input type="number" class="form-input" placeholder="Ex: 2018">
                </div>
                <button class="btn">Buscar Peças</button>
            </div>
            
            <div class="card" style="grid-column: span 2;">
                <div class="card-header">
                    <h3 class="card-title">Peças Compatíveis</h3>
                </div>
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Peça</th>
                                <th>Aplicação</th>
                                <th>Quando Trocar</th>
                                <th>Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PAR045</td>
                                <td>Parafuso M12x40</td>
                                <td>Fixação do chassi</td>
                                <td>A cada 500h</td>
                                <td>25 un</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
