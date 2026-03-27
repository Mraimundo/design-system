# Design System — Documentação Geral

## 1. Visão geral

- Propósito: Fornecer um conjunto reutilizável de componentes UI, padrões e utilitários para aplicações frontend do projeto. Inclui um styleguide (páginas sob `src/app/styleguide`) para visualizar componentes e exemplos.
- Tecnologias: Next.js (app router), TypeScript, React. Estilos via `globals.css` e PostCSS (`postcss.config.mjs`). Estrutura modular com componentes compartilhados em `src/shared/components/ui` e módulos específicos em `src/modules`.

## 2. Estrutura do repositório (resumo)

- `src/`
  - `app/`
    - `styleguide/`: páginas do styleguide para visualizar componentes e exemplos de uso
      - `components/`
        - `bar-chart/page.tsx` — página do styleguide para o componente BarChart
        - `table/page.tsx` — página do styleguide para o componente Table
      - `page.tsx` — index do styleguide
      - `layout.tsx` — layout do styleguide (provavelmente para navegação e shell)
    - `layout.tsx`, `page.tsx`, `globals.css`, `favicon.ico` — arquivos globais da aplicação
  - `modules/`
    - `bar-chart/`
      - `components/bar-chart-header.tsx` — header específico do módulo Bar Chart
    - `components-module/`
      - `components/table-page-header.tsx` — header para página de tabela
    - `style-guide/`
      - `components/radio-group-component.tsx`
      - `components/style-guide-header.tsx`
  - `shared/`
    - `components/`
      - `ui/` — componentes base / primitives do design system
        - `alert.tsx`
        - `badge.tsx`
        - `button.tsx`
        - `card.tsx`
        - `chart.tsx`
        - `label.tsx`
        - `radio-group.tsx`
        - `table.tsx`
      - `custom-bar-chart.tsx` — composição do chart UI
      - `custom-table.tsx`
      - `sidebar.tsx`
    - `lib/`
      - `utils.ts` — utilitários compartilhados
- `public/` — assets estáticos (svgs)
- `prompts/` — notas e guias (ex.: `1-design-system-foundation.md`, `2-new-component.md`, `3-new-page.md`)
- `AGENTS.md`, `CLAUDE.md` — documentação adicional / regras

## 3. Componentes principais (localização + propósito)

- Button — `src/shared/components/ui/button.tsx`
  - Uso: botão primário/variantes para ações em UIs.
- Badge — `src/shared/components/ui/badge.tsx`
  - Uso: indicadores pequenos, contadores.
- Card — `src/shared/components/ui/card.tsx`
  - Uso: contêineres de conteúdo.
- Alert — `src/shared/components/ui/alert.tsx`
  - Uso: mensagens de estado (erro, sucesso, aviso).
- Label — `src/shared/components/ui/label.tsx`
  - Uso: rótulos de campos/formulários.
- RadioGroup — `src/shared/components/ui/radio-group.tsx`
  - Uso: grupo de opções mutuamente exclusivas.
- Table — `src/shared/components/ui/table.tsx`
  - Uso: exibição tabular de dados; há também `custom-table.tsx` e um styleguide: `src/app/styleguide/components/table/page.tsx`
- Chart — `src/shared/components/ui/chart.tsx`
  - Uso: componentes gráficos; `custom-bar-chart.tsx` e módulo bar-chart com header e styleguide disponível: `src/app/styleguide/components/bar-chart/page.tsx` e `src/modules/bar-chart/components/bar-chart-header.tsx`
- Sidebar — `src/shared/components/sidebar.tsx`
  - Uso: navegação lateral da aplicação/styleguide.

## 4. Páginas do styleguide e como visualizar

- Páginas:
  - `/styleguide` — `src/app/styleguide/page.tsx`
  - `/styleguide/components/bar-chart` — `src/app/styleguide/components/bar-chart/page.tsx`
  - `/styleguide/components/table` — `src/app/styleguide/components/table/page.tsx`
- Executar localmente:
  - Instalar dependências: `npm install`
  - Rodar dev server: `npm run dev`
  - Abrir no navegador: normalmente `http://localhost:3000/styleguide`
  - Observação: projeto usa Next.js (ver `AGENTS.md` sobre breaking changes). Antes de desenvolver, leia `node_modules/next/dist/docs/` se houver diferenças relevantes.

## 5. Como adicionar um novo componente (passo a passo)

1. Criar componente em `src/shared/components/ui/<nome>.tsx`
   - Export default do componente.
   - Seguir convenções de props TypeScript e doc comments.
2. Criar um componente "custom" se precisar de composição: `src/shared/components/<custom-...>.tsx`
3. Adicionar uma página de styleguide:
   - Criar `src/app/styleguide/components/<nome>/page.tsx`
   - Importar o componente e fornecer exemplos de props/variantes.
4. Registrar na navegação do styleguide:
   - Verifique `src/app/styleguide/layout.tsx` ou `src/app/styleguide/page.tsx` para ver como a navegação é construída; adicionar link para a nova página.
5. Atualizar `prompts/` ou documentação interna (ex.: `prompts/2-new-component.md`) com instruções e checklist.
6. Testar localmente: `npm run dev` e conferir `/styleguide/components/<nome>`

## 6. Padrões e convenções recomendadas

- Componentes em `src/shared/components/ui` são primitives reutilizáveis.
- Modules (`src/modules`) contêm composições específicas de domínio (ex.: bar-chart module) e seus headers/helpers.
- Styleguide vive sob `src/app/styleguide` e deve demonstrar variantes e uso de cada componente.
- Tipagem: usar TypeScript para props com interfaces claras.
- Styling: centralizar estilos globais em `src/app/globals.css`; componentes preferem classes utilitárias ou CSS Modules conforme padrão atual (rever código existente para confirmar).
- Nomes de arquivos: kebab-case para pastas e arquivos de página; camelCase ou kebab-case consistente para componentes (rever arquivos atuais para consistência).
- Documentar props e exemplos no próprio arquivo do componente com JSDoc ou comentário curto.

## 7. Utilities e helpers

- `src/shared/lib/utils.ts` — funções utilitárias compartilhadas; usar para lógica comum e evitar duplicação.
- Prompts na pasta `prompts/` — templates e guias (`1-design-system-foundation.md`, `2-new-component.md`, `3-new-page.md`) que devem ser seguidos ao criar novos itens do design system.

## 8. Sugestões de melhoria (prioritárias)

- Adicionar um README detalhado em `src/shared/components/ui/` com lista de componentes e exemplos mínimos.
- Padronizar documentação de props com JSDoc + gerar documentação automatizada (Storybook, ou um gerador estático de docs).
- Criar stories (Storybook) ou testes visuais para prevenir regressões visuais.
- Consolidar tokens de design (cores, espaçamentos, tipografia) em um arquivo central (ex.: `src/shared/design-tokens.ts` / CSS variables) se ainda não existir.
- Adicionar scripts de linting/formatting (ESLint/Prettier já parcialmente presentes) e CI que verifique build do styleguide.

## 9. Comandos úteis (assumindo package.json padrão Next)

- Instalar dependências: `npm install`
- Rodar dev server: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint` (se configurado)

## 10. Onde salvar a documentação

- Arquivo criado: `docs/DESIGN_SYSTEM.md`
- Sugestão alternativa: atualizar `README.md` principal com um sumário e link para `docs/`.

---

Arquivo criado automaticamente com base na estrutura do repositório visível. Ajustes finos podem ser aplicados posteriormente conforme preferir.
