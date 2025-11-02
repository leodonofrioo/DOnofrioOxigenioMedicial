# 🚀 Rota Profissional GPS - D'Onofrio Oxigênio Medicinal

Sistema de rota profissional com GPS para organização e otimização de visitas médicas.

## 📱 Sobre o Projeto

Aplicação web mobile-first que permite:
- 📍 Rastreamento GPS em tempo real
- 🗺️ Cálculo automático de rotas e tempos
- 📋 Gestão de visitas e progresso
- 🔗 Integração com Google Maps, Waze e WhatsApp
- ⏰ Validação de horários de funcionamento
- 📊 Estatísticas de visitas concluídas

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Maps**: Google Maps Embed API
- **Deploy**: Vercel
- **Segurança**: Headers de segurança, CSP, HSTS

## 🚀 Deploy na Vercel

### 1. Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Conta no [Google Cloud Console](https://console.cloud.google.com)
- Node.js 18+ (para desenvolvimento local)

### 2. Configurar Google Maps API

1. Acesse o [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Ative as seguintes APIs:
   - Maps JavaScript API
   - Maps Embed API
   - Geocoding API
4. Crie uma API Key em "Credenciais"
5. Configure restrições de domínio para sua URL da Vercel

### 3. Deploy Automático via GitHub

1. **Fork/Clone o repositório**
   ```bash
   git clone https://github.com/leodonofrioo/DOnofrioOxigenioMedicial.git
   cd DOnofrioOxigenioMedicial
   ```

2. **Conecte com Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe o repositório do GitHub
   - Configure as variáveis de ambiente (próximo passo)

3. **Configure Variáveis de Ambiente na Vercel**
   
   No painel da Vercel, vá em Settings > Environment Variables:
   
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = sua_api_key_aqui
   NEXT_PUBLIC_APP_URL = https://seu-dominio.vercel.app
   NODE_ENV = production
   ```

4. **Deploy**
   - A Vercel fará o deploy automaticamente
   - Acesse a URL fornecida para testar

### 4. Deploy Manual via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Desenvolvimento Local

### 1. Configuração Inicial

```bash
# Clone o repositório
git clone https://github.com/leodonofrioo/DOnofrioOxigenioMedicial.git
cd DOnofrioOxigenioMedicial

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas configurações
```

### 2. Executar Localmente

```bash
# Validar variáveis de ambiente
npm run validate-env

# Build e servir
npm run dev

# Ou apenas servir (após build)
npm start
```

### 3. Scripts Disponíveis

- `npm run build` - Gera build de produção
- `npm run dev` - Build + servidor local
- `npm start` - Servidor local
- `npm run validate-env` - Valida configurações

## 🔒 Segurança

### Headers Implementados

- **HSTS**: Força HTTPS
- **CSP**: Content Security Policy restritiva
- **X-Frame-Options**: Previne clickjacking
- **X-Content-Type-Options**: Previne MIME sniffing
- **Referrer-Policy**: Controla informações de referrer

### Boas Práticas

- ✅ API Keys em variáveis de ambiente
- ✅ Headers de segurança configurados
- ✅ CSP restritiva para Google Maps
- ✅ Validação de entrada
- ✅ Sem dados sensíveis no código

## 📊 Monitoramento

### Métricas Recomendadas

- **Performance**: LCP < 2.5s, FID < 100ms
- **Disponibilidade**: Uptime > 99.9%
- **Erros**: Error rate < 0.5%

### Logs

- Erros de GPS são logados no console
- Falhas de API são reportadas ao usuário
- Validações de ambiente no build

## 🔧 Configurações Avançadas

### Customização de Domínio

1. Na Vercel, vá em Settings > Domains
2. Adicione seu domínio personalizado
3. Configure DNS conforme instruções
4. Atualize `NEXT_PUBLIC_APP_URL`

### Feature Flags (Futuro)

Preparado para implementação de feature flags:
- `NEXT_PUBLIC_ENABLE_GPS_FALLBACK`
- `NEXT_PUBLIC_ENABLE_OFFLINE_MODE`

## 🐛 Troubleshooting

### Problemas Comuns

**1. Mapa não carrega**
- Verifique se a API Key está configurada
- Confirme se as APIs estão ativadas no Google Cloud
- Verifique restrições de domínio

**2. GPS não funciona**
- Certifique-se que está usando HTTPS
- Verifique permissões do navegador
- Teste em dispositivo móvel real

**3. Build falha**
- Execute `npm run validate-env`
- Verifique se todas as variáveis estão configuradas
- Confirme versão do Node.js (18+)

### Logs de Debug

```javascript
// No console do navegador
console.log('API Key configurada:', !!window.GOOGLE_MAPS_API_KEY);
console.log('GPS disponível:', 'geolocation' in navigator);
```

## 📝 Changelog

### v0.1.0-beta (Atual)
- ✅ Sistema básico de rotas
- ✅ Integração GPS
- ✅ Google Maps, Waze, WhatsApp
- ✅ Configuração para Vercel
- ✅ Headers de segurança

### Próximas Versões
- 🔄 Migração para Next.js + TypeScript
- 🔄 Autenticação com Clerk
- 🔄 Banco de dados com Supabase
- 🔄 Testes automatizados
- 🔄 CI/CD com GitHub Actions

## 📞 Suporte

Para suporte técnico ou dúvidas:
- 📧 Email: [contato@donofrio.com.br](mailto:contato@donofrio.com.br)
- 📱 WhatsApp: Disponível na aplicação
- 🐛 Issues: [GitHub Issues](https://github.com/leodonofrioo/DOnofrioOxigenioMedicial/issues)

## 📄 Licença

Este projeto é propriedade privada da D'Onofrio Oxigênio Medicinal.
Todos os direitos reservados.

---

**D'Onofrio Oxigênio Medicinal** - Tecnologia a serviço da saúde 🏥