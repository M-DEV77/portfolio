# Estágio 1: Build da aplicação React + Vite
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências de forma limpa
RUN npm ci

# Copia todo o código fonte
COPY . .

# Executa o build da aplicação
RUN npm run build

# Estágio 2: Servidor Nginx para servir a aplicação estática
FROM nginx:1.25-alpine AS production

# Copia a configuração do Nginx otimizada para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o resultado do build do estágio anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 do container
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
