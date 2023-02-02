### Making a request with Curl:

```bash
    curl -X POST http://localhost:3000/{endpoint}(ex: user)
```

### Sending data in json format with Curl:

```bash
    curl -X POST http://localhost:3000/user 
	    -H "Content-Type: application/json" 
	    -d '{"name": user}'
```

### Checking status code in requests responses:
```bash
    curl -X POST http://localhost:3000/user 
	    -H "Content-Type: application/json" 
	    -d '{"name": user}'
        -v
```

### Searching all users with Curl:
```bash
    curl -X GET http://localhost:3000/user
```

### Searching user by ID with Curl:
```bash
    curl -X GET http://localhost:3000/user/id
```

### Updating user information via PATCH route with Curl:
```bash
    curl -X PATCH http://localhost:3000/user/63d206cdebfaf080848dd278 
        -H "Content-Type: application/json" 
        -d '{"username": "pedromoreira49"}'
```

### Logging in with Curl:
```bash
    curl -X POST http://localhost:3000/login
        -H "Content-Type: application/json" 
        -d '{"email": "email@example.com", "password": "examplepassword"}'
```

### Creating a news with Curl:
```bash
    curl -X POST http://localhost:3000/news 
        -H "Content-Type: application/json" 
        -d '{"title": "Example Tittle", "text": "Example content", "banner": "exampleImage.jpg"}'
```

### Passing user token to create news with Curl:
```bash
    curl -X POST http://localhost:3000/news 
        -H "Content-Type: application/json"
        -H "Authorization: Bearer {token}" 
        -d '{"title": "Example Tittle", "text": "Example content", "banner": "exampleImage.jpg"}'
```

### Searching top news with Curl:
```bash
    curl -X GET http://localhost:3000/news/top
```

### Searching news by ID with Curl:
```bash
    curl -X GET http://localhost:3000/news/:id
```

### Searching news by Title with Curl:
```bash
    curl -X GET http://localhost:3000/news/search?title={post title}
```