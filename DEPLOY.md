# Publicar o site no GitHub Pages

## 1. Ativar o GitHub Pages no repositório

1. Abra o repositório **Neveskai/Neveskai** no GitHub.
2. Vá em **Settings** (Configurações).
3. No menu lateral, clique em **Pages** (em "Code and automation").
4. Em **Build and deployment** → **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione **gh-pages** e a pasta **/ (root)**.
6. Clique em **Save**.

Não é preciso ativar nada na conta do GitHub; só essa configuração no repositório.

---

## 2. Publicar o site

No seu computador, na pasta do projeto:

```bash
npm install
npm run deploy
```

O script `deploy` faz o build (`npm run build`) e envia a pasta `dist/` para a branch `gh-pages`. Na primeira vez o GitHub pode pedir autenticação (token ou SSH).

---

## 3. Ver o site no ar

Depois de alguns minutos, o site fica disponível em:

**https://neveskai.github.io/Neveskai/**

(Importante: a URL termina com `/Neveskai/` porque o repositório não é `neveskai.github.io`.)

---

## Atualizar o site

Sempre que fizer mudanças, rode de novo:

```bash
npm run deploy
```
