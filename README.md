# 🚀 Global Supply — Website

Loja de sneakers e streetwear premium para Portugal e Espanha.

## 📁 Estrutura do Projeto

```
global-supply/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← Estilos (Dark & Bold theme)
├── js/
│   └── main.js             ← Produtos, carrinho e lógica JS
├── pages/
│   ├── shop.html           ← Catálogo completo com filtros
│   ├── about.html          ← Sobre nós
│   ├── faq.html            ← Perguntas frequentes
│   ├── shipping.html       ← Envios & devoluções
│   └── contact.html        ← Contacto + formulário
└── README.md
```

## 🌐 Deploy no GitHub Pages

### Passo 1 — Criar repositório no GitHub
1. Vai a [github.com/new](https://github.com/new)
2. Nome do repositório: `global-supply` (ou `global-supply-store`)
3. Marca como **Public**
4. Clica **Create repository**

### Passo 2 — Fazer upload dos ficheiros
**Opção A (drag & drop):**
1. Abre o repositório criado
2. Clica em "uploading an existing file"
3. Arrasta **todos os ficheiros e pastas** desta pasta para o browser
4. Clica "Commit changes"

**Opção B (via terminal):**
```bash
cd /Users/macbook/Desktop/global-supply
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SEU_USERNAME/global-supply.git
git push -u origin main
```

### Passo 3 — Ativar GitHub Pages
1. Vai ao repositório no GitHub
2. Clica em **Settings** (separador)
3. No menu lateral clica **Pages**
4. Em "Source" seleciona: **Deploy from a branch**
5. Branch: **main** | Folder: **/ (root)**
6. Clica **Save**

### Passo 4 — Aceder ao site
Após 1-2 minutos, o teu site estará disponível em:
```
https://SEU_USERNAME.github.io/global-supply/
```

---

## ⚙️ Personalizar os Preços

Todos os produtos têm `price: null` por ora. Para adicionar preços:

1. Abre `js/main.js`
2. Procura o produto pelo nome (ex: `"Air Force 1 White"`)
3. Muda `price: null` para `price: 89.99` (em euros)

Exemplo:
```javascript
{
  id: 1,
  name: "Air Force 1 White",
  price: 89.99,   // ← adiciona aqui
  ...
}
```

## 📱 Personalizar Instagram

Substitui `https://instagram.com` pelos links reais do teu Instagram em todos os ficheiros HTML.

Troca `@globalsupplyPT` pelo teu @ real.

## 📞 Personalizar Contactos

Nos ficheiros HTML, substitui:
- `+351 910 000 000` → teu número real
- `info@globalsupply.pt` → teu email real
- `https://wa.me/351910000000` → `https://wa.me/351SEUNUMERO`

## 🎨 Tecnologias

- HTML5, CSS3, JavaScript (vanilla)
- Google Fonts: Oswald + Inter
- Font Awesome 6.5 (ícones)
- Unsplash CDN (imagens)
- LocalStorage (carrinho)

## 📦 Features

- ✅ 42 produtos em catálogo (Nike, Jordan, Adidas, New Balance, LV, Dior, ASICS)
- ✅ Filtros por marca e categoria
- ✅ Carrinho com localStorage
- ✅ Modal de seleção de tamanho
- ✅ Release Wall com 6 drops
- ✅ Dark & Bold theme (#C8FF00 accent)
- ✅ 100% responsivo (mobile, tablet, desktop)
- ✅ FAQ com accordion
- ✅ Formulário de contacto
- ✅ Tabela de envios por país
- ✅ Barra de marcas animada

---

**Global Supply © 2026**
