### Fazendo requisição com Curl:

```bash
    curl -X POST http://localhost:3000/{endpoint}(ex: user)
```

### Enviando dados em formato json com Curl:

```bash
    curl -X POST http://localhost:3000/user 
	    -H "Content-Type: application/json" 
	    -d '{"name": user}'
```

### Verificando status code nas respostas das requisições:
```bash
    curl -X POST http://localhost:3000/user 
	    -H "Content-Type: application/json" 
	    -d '{"name": user}'
        -v
```

### Buscando todos usuários com Curl:
```bash
    curl -X GET http://localhost:3000/user
```

### Buscando usuário pelo ID com Curl:
```bash
    curl -X GET http://localhost:3000/user/id
```

### Atualizando informações do usuário pela rota PATCH com Curl:
```bash
    curl -X PATCH http://localhost:3000/user/63d206cdebfaf080848dd278 
        -H "Content-Type: application/json" 
        -d '{"username": "pedromoreira49"}'
```

### Fazendo login com Curl:
```bash
    curl -X POST http://localhost:3000/login
        -H "Content-Type: application/json" 
        -d '{"email": "email@example.com", "password": "examplepassword"}'
```
