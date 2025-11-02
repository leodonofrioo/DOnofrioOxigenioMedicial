#!/usr/bin/env node

/**
 * Script de validação de variáveis de ambiente
 * Garante que todas as variáveis necessárias estejam configuradas
 */

require('dotenv').config({ path: '.env.local' });

const REQUIRED_VARS = [
    'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
];

const OPTIONAL_VARS = [
    'NEXT_PUBLIC_APP_URL',
    'NODE_ENV'
];

function validateEnvironment() {
    console.log('🔍 Validando variáveis de ambiente...');
    
    let hasErrors = false;
    const warnings = [];
    
    // Verifica variáveis obrigatórias
    for (const varName of REQUIRED_VARS) {
        const value = process.env[varName];
        
        if (!value) {
            console.error(`❌ Variável obrigatória não encontrada: ${varName}`);
            hasErrors = true;
        } else if (value.includes('your_') || value.includes('_here')) {
            console.error(`❌ Variável ${varName} contém valor de exemplo: ${value}`);
            hasErrors = true;
        } else {
            console.log(`✅ ${varName}: configurada`);
        }
    }
    
    // Verifica variáveis opcionais
    for (const varName of OPTIONAL_VARS) {
        const value = process.env[varName];
        
        if (!value) {
            warnings.push(`⚠️  Variável opcional não configurada: ${varName}`);
        } else {
            console.log(`✅ ${varName}: ${value}`);
        }
    }
    
    // Exibe warnings
    if (warnings.length > 0) {
        console.log('\n📋 Avisos:');
        warnings.forEach(warning => console.log(warning));
    }
    
    // Validações específicas
    const googleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (googleMapsKey && !googleMapsKey.startsWith('AIza')) {
        console.warn('⚠️  Google Maps API Key pode estar em formato incorreto (deve começar com "AIza")');
    }
    
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv && !['development', 'staging', 'production'].includes(nodeEnv)) {
        console.warn(`⚠️  NODE_ENV tem valor não padrão: ${nodeEnv}`);
    }
    
    if (hasErrors) {
        console.error('\n❌ Validação falhou! Corrija as variáveis de ambiente antes de continuar.');
        console.error('💡 Dica: Copie .env.example para .env.local e configure os valores corretos.');
        process.exit(1);
    }
    
    console.log('\n✅ Todas as variáveis obrigatórias estão configuradas corretamente!');
}

// Executa validação se chamado diretamente
if (require.main === module) {
    validateEnvironment();
}

module.exports = { validateEnvironment };