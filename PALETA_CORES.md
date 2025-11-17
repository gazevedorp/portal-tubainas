# Paleta de Cores - Portal Tubaínas

## 🎨 Cores Principais

### Primária - Verde-limão suave
- **DEFAULT**: `#8FD14F` - `primary`
- **Light**: `#a8dc71` - `primary-light`
- **Dark**: `#76b83d` - `primary-dark`
- **Uso**: Botões principais, destaques sutis, elementos de frescor

### Secundária - Laranja dourado
- **DEFAULT**: `#F4A22C` - `secondary`
- **Light**: `#f7b555` - `secondary-light`
- **Dark**: `#d18a1e` - `secondary-dark`
- **Uso**: Hovers, ícones, títulos, energia e otimismo

### Realce/Ação - Coral quente
- **DEFAULT**: `#E85B4A` - `accent`
- **Light**: `#ed7a6d` - `accent-light`
- **Dark**: `#d13d2a` - `accent-dark`
- **Uso**: CTAs ("Anuncie aqui", "Saiba mais"), botões de ação

### Complementar - Roxo-azulado
- **DEFAULT**: `#7B5DE3` - `complement`
- **Light**: `#9479e8` - `complement-light`
- **Dark**: `#6345d0` - `complement-dark`
- **Uso**: Contraste elegante, links, áreas de fundo especiais

### Neutras
- **Light**: `#F6F6F6` - `neutral-light` (off-white)
- **DEFAULT**: `#6B7280` - `neutral` (cinza médio)
- **Dark**: `#1F1F1F` - `neutral-dark` (cinza antracito)

## 💡 Guia de Uso

### Cabeçalho/Header
- Fundo: `neutral-dark` (#1F1F1F)
- Logo colorido em destaque
- Links do menu: `neutral-light` com hover `primary`
- Botão "Para Anunciantes": gradiente `accent` → `accent-dark`
- Busca: hover `primary`

### Footer
- Fundo: gradiente `neutral-dark` → `black`
- Título: `secondary`
- Links: `neutral` com hover `secondary`
- Botão newsletter: `primary`

### Conteúdo
- Fundos de seção: alternar `neutral-light` (#F6F6F6) e branco
- Badges de categoria: usar cores variadas para diferenciação visual
  - Destaque principal: `primary` (verde-limão)
  - Notícias secundárias: `accent` (coral)
  - Seções especiais: `complement` (roxo)
- Botões CTA comerciais: `accent`
- Links: `complement`
- Carrosséis/controles: `secondary`

### Elementos Especiais

#### Placeholders de Publicidade
- Gradientes vibrantes usando 3 cores da paleta
- Banner topo: `primary` → `secondary` → `accent`
- Banner lateral: `complement` → `primary` → `secondary`

#### Headers de Seções
- "Mais Lidas": gradiente `accent` → `accent-dark`
- "Novidades": gradiente `complement` → `complement-dark`

#### Dots de Navegação
- Ativo: `primary` com sombra verde
- Inativo: branco translúcido com hover `primary`

#### Badges Numerados
- Gradiente `accent` → `accent-dark` para destaque

## 🔄 Migração das Cores Antigas

| Cor Antiga | Cor Nova | Classe Tailwind |
|------------|----------|-----------------|
| `#d4761a` | `#F4A22C` | `secondary` |
| `#d4a574` | `#F4A22C` | `secondary` |
| `#c89666` | `#d18a1e` | `secondary-dark` |
| `#2c1810` | `#1F1F1F` | `neutral-dark` |
| `#faf0e6` | `#F6F6F6` | `neutral-light` |
| `#5a4a42` | `#6B7280` | `neutral` |
| `#8b7355` | `#6B7280` | `neutral` |

## 📝 Exemplos de Código

```tsx
// Botão principal (ação primária)
<button className="bg-primary hover:bg-primary-dark">

// Botão de destaque/CTA comercial
<button className="bg-accent hover:bg-accent-dark">

// Header escuro
<header className="bg-neutral-dark">

// Link com hover
<a className="text-neutral hover:text-secondary">

// Badge de categoria
<span className="bg-secondary text-white">

// Fundo de seção
<section className="bg-neutral-light">
```
