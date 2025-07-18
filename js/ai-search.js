// AI Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const aiSearch = document.getElementById('aiSearch');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    if (!aiSearch || !searchSuggestions) return;
    
    let searchTimeout;
    
    // Sample parts database for AI suggestions
    const partsDatabase = [
        { code: 'PAR001', name: 'Parafuso Sextavado M8x25', type: 'parafuso', specs: 'M8x1.25, 25mm' },
        { code: 'PAR002', name: 'Parafuso Phillips M6x20', type: 'parafuso', specs: 'M6x1.0, 20mm' },
        { code: 'PAR003', name: 'Parafuso Allen M10x30', type: 'parafuso', specs: 'M10x1.5, 30mm' },
        { code: 'POR001', name: 'Porca Sextavada M8', type: 'porca', specs: 'M8x1.25, Aço Inox' },
        { code: 'POR002', name: 'Porca Borboleta M6', type: 'porca', specs: 'M6x1.0, Latão' },
        { code: 'ARR001', name: 'Arruela Lisa 8x16', type: 'arruela', specs: '8mm interno, 16mm externo' },
        { code: 'ARR002', name: 'Arruela Pressão 10x20', type: 'arruela', specs: '10mm interno, 20mm externo' },
        { code: 'ELE001', name: 'Eletrodo E6013 3.2mm', type: 'eletrodo', specs: '3.2mm, 350mm, Geral' },
        { code: 'ELE002', name: 'Eletrodo E7018 4.0mm', type: 'eletrodo', specs: '4.0mm, 350mm, Estrutural' }
    ];
    
    // AI search with suggestions
    aiSearch.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        clearTimeout(searchTimeout);
        
        if (query.length < 2) {
            hideSuggestions();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            const suggestions = generateAISuggestions(query);
            showSuggestions(suggestions);
        }, 300);
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!aiSearch.contains(e.target) && !searchSuggestions.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    // Generate AI-powered suggestions
    function generateAISuggestions(query) {
        const suggestions = [];
        
        // Smart search patterns
        const patterns = [
            // Thread pattern (rosca 8mm, M8, etc.)
            /(?:rosca|m|thread)\s*(\d+(?:\.\d+)?)/i,
            // Diameter pattern (8mm, diametro 8, etc.)
            /(?:diametro|diameter|ø|dia)\s*(\d+(?:\.\d+)?)/i,
            // Length pattern (25mm, comprimento 25, etc.)
            /(?:comprimento|length|comp)\s*(\d+(?:\.\d+)?)/i,
            // Type patterns
            /(?:parafuso|screw|bolt)/i,
            /(?:porca|nut)/i,
            /(?:arruela|washer)/i,
            /(?:eletrodo|electrode)/i
        ];
        
        // Search in parts database
        partsDatabase.forEach(part => {
            let score = 0;
            
            // Exact code match
            if (part.code.toLowerCase().includes(query)) {
                score += 100;
            }
            
            // Name match
            if (part.name.toLowerCase().includes(query)) {
                score += 50;
            }
            
            // Type match
            if (part.type.toLowerCase().includes(query)) {
                score += 30;
            }
            
            // Specs match
            if (part.specs.toLowerCase().includes(query)) {
                score += 40;
            }
            
            // Pattern matching for smart suggestions
            patterns.forEach(pattern => {
                if (pattern.test(query) && pattern.test(part.specs)) {
                    score += 60;
                }
            });
            
            if (score > 0) {
                suggestions.push({
                    ...part,
                    score,
                    highlight: highlightMatch(part.name, query)
                });
            }
        });
        
        // Sort by score and return top 5
        return suggestions
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
    }
    
    // Highlight matching text
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }
    
    // Show suggestions dropdown
    function showSuggestions(suggestions) {
        if (suggestions.length === 0) {
            hideSuggestions();
            return;
        }
        
        let html = '';
        
        suggestions.forEach(suggestion => {
            html += `
                <div class="suggestion-item" data-code="${suggestion.code}" data-type="${suggestion.type}">
                    <div style="font-weight: 500;">${suggestion.highlight}</div>
                    <div style="font-size: 12px; color: #6b7280;">${suggestion.code} - ${suggestion.specs}</div>
                </div>
            `;
        });
        
        // Add smart suggestions based on query patterns
        const smartSuggestions = generateSmartSuggestions(aiSearch.value);
        if (smartSuggestions.length > 0) {
            html += '<div style="border-top: 1px solid #e5e7eb; margin: 8px 0; padding-top: 8px;"></div>';
            smartSuggestions.forEach(smart => {
                html += `
                    <div class="suggestion-item" data-smart="true">
                        <div style="font-weight: 500; color: #3b82f6;">💡 ${smart.title}</div>
                        <div style="font-size: 12px; color: #6b7280;">${smart.description}</div>
                    </div>
                `;
            });
        }
        
        searchSuggestions.innerHTML = html;
        searchSuggestions.style.display = 'block';
        
        // Add click handlers to suggestions
        searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', function() {
                if (this.dataset.smart) {
                    // Handle smart suggestion click
                    aiSearch.value = this.querySelector('div').textContent.replace('💡 ', '');
                } else {
                    // Handle part suggestion click
                    const code = this.dataset.code;
                    const type = this.dataset.type;
                    aiSearch.value = this.querySelector('div').textContent;
                    
                    // Navigate to appropriate page
                    switch(type) {
                        case 'parafuso':
                            loadPage('parafusos');
                            break;
                        case 'porca':
                            loadPage('porcas');
                            break;
                        case 'arruela':
                            loadPage('arruelas');
                            break;
                        case 'eletrodo':
                            loadPage('eletrodos');
                            break;
                    }
                }
                hideSuggestions();
            });
        });
    }
    
    // Generate smart suggestions based on query patterns
    function generateSmartSuggestions(query) {
        const suggestions = [];
        const lowerQuery = query.toLowerCase();
        
        // Thread size suggestions
        const threadMatch = lowerQuery.match(/(?:rosca|m|thread)\s*(\d+(?:\.\d+)?)/i);
        if (threadMatch) {
            const size = threadMatch[1];
            suggestions.push({
                title: `Buscar todos os parafusos M${size}`,
                description: `Encontrar parafusos com rosca métrica ${size}mm`
            });
            suggestions.push({
                title: `Buscar porcas M${size}`,
                description: `Encontrar porcas compatíveis com rosca M${size}`
            });
        }
        
        // Diameter suggestions
        const diameterMatch = lowerQuery.match(/(?:diametro|diameter|ø|dia)\s*(\d+(?:\.\d+)?)/i);
        if (diameterMatch) {
            const diameter = diameterMatch[1];
            suggestions.push({
                title: `Buscar arruelas para ${diameter}mm`,
                description: `Encontrar arruelas com diâmetro interno ${diameter}mm`
            });
        }
        
        // Application suggestions
        if (lowerQuery.includes('chassi') || lowerQuery.includes('fixação')) {
            suggestions.push({
                title: 'Peças para fixação de chassi',
                description: 'Parafusos e porcas adequados para estruturas'
            });
        }
        
        if (lowerQuery.includes('solda') || lowerQuery.includes('soldagem')) {
            suggestions.push({
                title: 'Eletrodos para soldagem',
                description: 'Ver catálogo completo de eletrodos'
            });
        }
        
        return suggestions;
    }
    
    // Hide suggestions dropdown
    function hideSuggestions() {
        searchSuggestions.style.display = 'none';
        searchSuggestions.innerHTML = '';
    }
    
    // Handle search form submission
    aiSearch.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(this.value);
            hideSuggestions();
        }
    });
    
    // Perform actual search
    function performSearch(query) {
        if (!query.trim()) return;
        
        // Analyze query and determine best page to show
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('parafuso') || lowerQuery.includes('screw') || lowerQuery.includes('bolt')) {
            loadPage('parafusos');
        } else if (lowerQuery.includes('porca') || lowerQuery.includes('nut')) {
            loadPage('porcas');
        } else if (lowerQuery.includes('arruela') || lowerQuery.includes('washer')) {
            loadPage('arruelas');
        } else if (lowerQuery.includes('eletrodo') || lowerQuery.includes('electrode')) {
            loadPage('eletrodos');
        } else if (lowerQuery.includes('financeiro') || lowerQuery.includes('conta') || lowerQuery.includes('pagamento')) {
            loadPage('financeiro');
        } else if (lowerQuery.includes('etiqueta') || lowerQuery.includes('qr') || lowerQuery.includes('codigo')) {
            loadPage('etiquetas');
        } else if (lowerQuery.includes('nota') || lowerQuery.includes('fiscal') || lowerQuery.includes('nf')) {
            loadPage('notas-fiscais');
        } else if (lowerQuery.includes('manutenção') || lowerQuery.includes('maquina') || lowerQuery.includes('equipamento')) {
            loadPage('manutencao');
        } else {
            // Default to catalog for general searches
            loadPage('catalogo');
        }
        
        // Show search results notification
        showSearchNotification(query);
    }
    
    // Show search notification
    function showSearchNotification(query) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #1f2937;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            font-size: 14px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;
        notification.textContent = `Buscando por: "${query}"`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});

// Export functions for use in other modules
window.AISearch = {
    performSearch: function(query) {
        const event = new CustomEvent('ai-search', { detail: { query } });
        document.dispatchEvent(event);
    }
};
