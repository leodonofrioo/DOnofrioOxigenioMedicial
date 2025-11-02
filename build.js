#!/usr/bin/env node

/**
 * Script de build para injetar variáveis de ambiente no HTML
 * Este script substitui placeholders no HTML pelas variáveis de ambiente
 */

const fs = require('fs');
const path = require('path');

// Carrega variáveis de ambiente
require('dotenv').config({ path: '.env.local' });

const HTML_FILE = 'rota_pro_gps_fixo.html';
const OUTPUT_FILE = 'index.html';

function buildHtml() {
    try {
        console.log('🔧 Iniciando build do HTML...');
        
        // Lê o arquivo HTML original
        const htmlContent = fs.readFileSync(HTML_FILE, 'utf8');
        
        // Obtém as variáveis de ambiente
        const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || '';
        
        if (!googleMapsApiKey) {
            console.warn('⚠️  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY não encontrada nas variáveis de ambiente');
        }
        
        // Injeta as variáveis no HTML
        let processedHtml = htmlContent;
        
        // Adiciona script com variáveis de ambiente no início do body
        const envScript = `
    <script>
        // Variáveis de ambiente injetadas durante o build
        window.GOOGLE_MAPS_API_KEY = "${googleMapsApiKey}";
        window.APP_URL = "${appUrl}";
        window.NODE_ENV = "${process.env.NODE_ENV || 'production'}";
    </script>`;
        
        // Insere o script após a tag <body>
        processedHtml = processedHtml.replace('<body>', `<body>${envScript}`);
        
        // Escreve o arquivo processado
        fs.writeFileSync(OUTPUT_FILE, processedHtml);
        
        console.log('✅ Build concluído com sucesso!');
        console.log(`📄 Arquivo gerado: ${OUTPUT_FILE}`);
        
        if (googleMapsApiKey) {
            console.log('🗝️  Google Maps API Key configurada');
        }
        
    } catch (error) {
        console.error('❌ Erro durante o build:', error.message);
        process.exit(1);
    }
}

// Executa o build se chamado diretamente
if (require.main === module) {
    buildHtml();
}

module.exports = { buildHtml };