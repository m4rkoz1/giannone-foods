# Guia de Deploy para EasyPanel

Este projeto está configurado para deployment no EasyPanel usando Nixpacks. Siga as instruções abaixo para fazer o deploy da sua aplicação.

## Pré-requisitos

- Conta no EasyPanel
- Repositório GitHub com o projeto
- PostgreSQL database (opcional - usa MemStorage por padrão)

## Arquivos de Configuração

Os seguintes arquivos foram criados para o deployment:

- `nixpacks.toml` - Configuração para build com Nixpacks
- `Dockerfile` - Container Docker para deployment  
- `.dockerignore` - Otimização do contexto de build

## Variáveis de Ambiente Necessárias

Configure as seguintes variáveis no EasyPanel:

### Obrigatórias
```
NODE_ENV=production
PORT=5000
```

### Opcionais (se usar PostgreSQL)
```
DATABASE_URL=postgresql://usuario:senha@host:porta/database
```

## Configuração no EasyPanel

1. **Crie uma nova aplicação**:
   - Vá para seu painel EasyPanel
   - Clique em "New Service" → "App"

2. **Configure o repositório**:
   - Source Type: Github
   - Repositório: `seu-usuario/seu-repositorio`
   - Branch: `main` (ou sua branch principal)

3. **Configure as variáveis de ambiente**:
   - Adicione as variáveis listadas acima
   - O PORT deve ser 5000 (obrigatório)

4. **Configure o domínio**:
   - EasyPanel irá gerar um domínio automaticamente
   - Ou configure seu domínio customizado

## Estrutura do Projeto

```
projeto/
├── client/              # Frontend React
├── server/              # Backend Express
├── shared/              # Tipos compartilhados
├── nixpacks.toml        # Configuração Nixpacks
├── Dockerfile           # Container Docker
├── .dockerignore        # Arquivos ignorados no build
└── package.json         # Dependências e scripts
```

## Scripts de Build

- `npm run build`: Constrói frontend (Vite) e backend (esbuild)
- `npm start`: Inicia servidor de produção
- `npm run dev`: Desenvolvimento local

## Portas e Configuração

- **Porta da aplicação**: 5000 (obrigatório)
- **Bind address**: 0.0.0.0 (configurado automaticamente)
- **Arquivos estáticos**: Servidos pelo Express em produção

## Banco de Dados

**Por padrão, a aplicação usa `MemStorage` (armazenamento em memória)** - todos os dados são perdidos quando a aplicação reinicia.

Para usar PostgreSQL (requer implementação):
1. Configure a variável `DATABASE_URL` 
2. Implemente o PostgreSQL storage em `server/storage.ts` (atualmente só tem MemStorage)
3. Execute `npm run db:push` para aplicar migrações
4. A aplicação NÃO detecta automaticamente - você deve modificar o código para usar PostgreSQL storage

## Troubleshooting

### Build falha
- Verifique se todas as dependências estão no package.json
- Certifique-se que `npm run build` funciona localmente

### Aplicação não inicia
- Verifique se PORT=5000 está configurado
- Verifique os logs do EasyPanel para erros

### Problemas de conexão com DB
- Verifique se DATABASE_URL está correto
- Teste conexão com banco de dados externamente

## Comandos Úteis

```bash
# Testar build localmente
npm run build
npm start

# Verificar tipos
npm run check

# Aplicar migrações do banco
npm run db:push
```

## Estrutura de Deployment

1. **Build Phase**: Nixpacks executa `npm run build`
   - Frontend: Vite constrói assets para `dist/public/`
   - Backend: esbuild empacota servidor para `dist/index.js`

2. **Runtime**: Inicia com `npm start`
   - Express serve frontend estático em produção
   - APIs disponíveis em `/api/*`
   - Aplicação roda na porta 5000

## URLs da Aplicação

Após deploy:
- **Frontend**: `https://seu-app.easypanel.host/`
- **API**: `https://seu-app.easypanel.host/api/*`

---

Qualquer dúvida sobre o deployment, consulte a documentação do EasyPanel ou verifique os logs da aplicação no painel.