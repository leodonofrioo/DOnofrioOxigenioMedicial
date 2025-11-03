# ADR 0001: Organização do Projeto e CI

Data: 2025-11-03

## Contexto

O projeto estava centralizado em um único HTML (`rota_pro_gps_fixo.html`), com build simples que gera `index.html`. Faltavam padronizações de editor, formatação, convenções de commit e validações automatizadas (CI).

## Decisão

- Servir `index.html` na rota raiz no Vercel.
- Adicionar padronizações: EditorConfig, Prettier.
- Garantir Conventional Commits com Commitlint.
- Executar lint-staged em pre-commit via Husky.
- Adicionar workflow de CI (Node 18) validando env e build.
- Configurar ESLint (flat config v9) mínimo para JS/MJS com globais de Node.

## Alternativas Consideradas

- Migrar para Next.js ou Vite: descartado no momento para evitar grande refator e manter simplicidade.
- Incluir testes E2E agora: postergado; priorizado CI básico por enquanto.

## Impactos

- Maior qualidade e consistência nos commits e formatação.
- Build verificado automaticamente em PRs e na master.
- Pequeno overhead de ferramentas de dev.

## Riscos e Mitigação

- Hooks Husky falharem por lint-staged: ajustado para evitar ESLint em arquivos `.cjs` e usar Prettier.
- Divergência de EOL (CRLF/LF): padronizado com `.editorconfig`; pode exigir reformat em alguns ambientes.

## Owners

- Responsável: Dev Team D'Onofrio
