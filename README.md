# Calculadora de IRPF Mensal

Aplicação web que calcula o Imposto de Renda de Pessoa Física (IRPF) mensal a partir do salário informado, usando a tabela progressiva vigente em Janeiro/2024. Mostra o imposto devido e a alíquota efetiva.

🔗 **Aplicação online:** COLE_AQUI_O_LINK_DA_VERCEL
📁 **Repositório:** COLE_AQUI_O_LINK_DO_GITHUB

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (puro, sem frameworks)
- Git e GitHub (versionamento e colaboração)
- Vercel (hospedagem em nuvem e CI/CD)

## Estrutura do projeto

```
├── index.html   # estrutura da página
├── style.css    # estilos
├── script.js    # lógica de cálculo do IRPF
└── README.md
```

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone URL_DO_REPOSITORIO
   ```
2. Entre na pasta do projeto:
   ```bash
   cd NOME_DO_REPOSITORIO
   ```
3. Abra o arquivo `index.html` no navegador (duplo clique ou "Abrir com" > navegador).

Não é necessário instalar dependências nem rodar build.

## Como fazer o deploy (Vercel + GitHub)

1. Acesse [vercel.com](https://vercel.com) e entre com **Continue with GitHub**.
2. Clique em **Add New > Project**.
3. Importe este repositório.
4. Em *Framework Preset*, deixe **Other** (site estático). Não precisa de Build Command nem de Output Directory.
5. Clique em **Deploy**.
6. A Vercel gera uma URL pública (`https://nome-do-projeto.vercel.app`).

## CI/CD

A Vercel fica conectada ao repositório do GitHub:

- **Push na branch `main`** → deploy automático em produção.
- **Pull Request / outras branches** → deploy de preview com URL própria.

Ou seja, qualquer commit enviado para a `main` gera uma nova versão online sem deploy manual.

## Integrantes

- Nome 1
- Nome 2
- Nome 3
