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
