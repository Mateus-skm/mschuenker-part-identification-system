document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    
    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Basic validation
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Simulate login process
        const loginBtn = document.querySelector('.login-btn');
        const originalText = loginBtn.innerHTML;
        
        loginBtn.innerHTML = 'Entrando...';
        loginBtn.disabled = true;
        
        setTimeout(() => {
            // Hide login section and show dashboard
            loginSection.style.display = 'none';
            dashboardSection.style.display = 'grid';
            
            // Load dashboard content
            loadDashboardContent();
            
            loginBtn.innerHTML = originalText;
            loginBtn.disabled = false;
        }, 1500);
    });
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add focus effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Handle forgot password link
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha em desenvolvimento.');
    });
    
    // Handle no account link
    document.querySelector('.no-account').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de cadastro em desenvolvimento.');
    });

    // Handle logout functionality
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'logoutBtn') {
            e.preventDefault();
            
            // Hide dashboard and show login section
            dashboardSection.style.display = 'none';
            loginSection.style.display = 'flex';
            
            // Reset form
            loginForm.reset();
        }
    });

    // Load dashboard content
    function loadDashboardContent() {
        const pageContent = document.getElementById('pageContent');
        pageContent.innerHTML = `
            <div class="page-header">
                <h1 class="page-title">Dashboard</h1>
                <p class="page-description">Bem-vindo ao Sistema de Identificação de Peças M.Schuenker</p>
            </div>
            
            <div class="content-grid">
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Parafusos</h3>
                    </div>
                    <p class="card-description">Gerencie e identifique parafusos por tipo, tamanho e rosca.</p>
                    <button class="btn" onclick="loadPage('parafusos')">Acessar</button>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" stroke-width="2" fill="none"/>
                                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Porcas</h3>
                    </div>
                    <p class="card-description">Catálogo completo de porcas com especificações técnicas.</p>
                    <button class="btn" onclick="loadPage('porcas')">Acessar</button>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Arruelas</h3>
                    </div>
                    <p class="card-description">Arruelas organizadas por diâmetro interno e externo.</p>
                    <button class="btn" onclick="loadPage('arruelas')">Acessar</button>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Financeiro</h3>
                    </div>
                    <p class="card-description">Controle de contas a pagar e receber com gráficos.</p>
                    <button class="btn" onclick="loadPage('financeiro')">Acessar</button>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" stroke="currentColor" stroke-width="2"/>
                                <circle cx="7" cy="7" r="1" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Etiquetas</h3>
                    </div>
                    <p class="card-description">Gere etiquetas com QR Code para identificação de peças.</p>
                    <button class="btn" onclick="loadPage('etiquetas')">Acessar</button>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.7 6.3C16.2 7.8 16.2 10.2 14.7 11.7L11.7 14.7C10.2 16.2 7.8 16.2 6.3 14.7C4.8 13.2 4.8 10.8 6.3 9.3L9.3 6.3C10.8 4.8 13.2 4.8 14.7 6.3Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M9.3 17.7C7.8 16.2 7.8 13.8 9.3 12.3L12.3 9.3C13.8 7.8 16.2 7.8 17.7 9.3C19.2 10.8 19.2 13.2 17.7 14.7L14.7 17.7C13.2 19.2 10.8 19.2 9.3 17.7Z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Manutenção</h3>
                    </div>
                    <p class="card-description">Sistema de manutenção com compatibilidade de peças.</p>
                    <button class="btn" onclick="loadPage('manutencao')">Acessar</button>
                </div>
            </div>
        `;
    }
});

// Global function to load pages
function loadPage(page) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Load page content
    const pageContent = document.getElementById('pageContent');
    
    switch(page) {
        case 'dashboard':
            loadDashboardContent();
            break;
        case 'parafusos':
            loadParafusosPage();
            break;
        case 'porcas':
            loadPorcasPage();
            break;
        case 'arruelas':
            loadArruelasPage();
            break;
        case 'eletrodos':
            loadEletrodosPage();
            break;
        case 'equipamentos':
            loadEquipamentosPage();
            break;
        case 'catalogo':
            loadCatalogoPage();
            break;
        case 'financeiro':
            loadFinanceiroPage();
            break;
        case 'notas-fiscais':
            loadNotasFiscaisPage();
            break;
        case 'etiquetas':
            loadEtiquetasPage();
            break;
        case 'manutencao':
            loadManutencaoPage();
            break;
        default:
            loadDashboardContent();
    }
}

// Load dashboard content function
function loadDashboardContent() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Dashboard</h1>
            <p class="page-description">Bem-vindo ao Sistema de Identificação de Peças M.Schuenker</p>
        </div>
        
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3 class="card-title">Parafusos</h3>
                </div>
                <p class="card-description">Gerencie e identifique parafusos por tipo, tamanho e rosca.</p>
                <button class="btn" onclick="loadPage('parafusos')">Acessar</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" stroke-width="2" fill="none"/>
                            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3 class="card-title">Porcas</h3>
                </div>
                <p class="card-description">Catálogo completo de porcas com especificações técnicas.</p>
                <button class="btn" onclick="loadPage('porcas')">Acessar</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3 class="card-title">Arruelas</h3>
                </div>
                <p class="card-description">Arruelas organizadas por diâmetro interno e externo.</p>
                <button class="btn" onclick="loadPage('arruelas')">Acessar</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3 class="card-title">Financeiro</h3>
                </div>
                <p class="card-description">Controle de contas a pagar e receber com gráficos.</p>
                <button class="btn" onclick="loadPage('financeiro')">Acessar</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" stroke="currentColor" stroke-width="2"/>
                            <circle cx="7" cy="7" r="1" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3 class="card-title">Etiquetas</h3>
                </div>
                <p class="card-description">Gere etiquetas com QR Code para identificação de peças.</p>
                <button class="btn" onclick="loadPage('etiquetas')">Acessar</button>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.7 6.3C16.2 7.8 16.2 10.2 14.7 11.7L11.7 14.7C10.2 16.2 7.8 16.2 6.3 14.7C4.8 13.2 4.8 10.8 6.3 9.3L9.3 6.3C10.8 4.8 13.2 4.8 14.7 6.3Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M9.3 17.7C7.8 16.2 7.8 13.8 9.3 12.3L12.3 9.3C13.8 7.8 16.2 7.8 17.7 9.3C19.2 10.8 19.2 13.2 17.7 14.7L14.7 17.7C13.2 19.2 10.8 19.2 9.3 17.7Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3 class="card-title">Manutenção</h3>
                </div>
                <p class="card-description">Sistema de manutenção com compatibilidade de peças.</p>
                <button class="btn" onclick="loadPage('manutencao')">Acessar</button>
            </div>
        </div>
    `;
}
