# Proyecto Multicontenedor Fintech App

## Descripción
Aplicación web para gestión financiera desplegada en un entorno **multi-contenedor** utilizando **Docker Compose**.  
Incluye tres servicios principales:
- **Frontend:** Interfaz en React.
- **Backend:** API en Node.js y Express.
- **Base de datos:** MySQL 8.0.

---

## Estructura del proyecto
```
fintech-app/
├── frontend/        # Aplicación React
│   ├── Dockerfile
│   └── src/App.js
├── backend/         # API Node.js
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── docker-compose.yml
└── README.md
```

---

## Servicios

### Frontend
- **Framework:** React  
- **Puerto:** 3000  
- **Descripción:** Consume la API del backend para mostrar la información financiera.  

### Backend
- **Lenguaje:** Node.js con Express  
- **Puerto interno:** 5000  
- **Puerto externo:** 5001  
- **Conexión a la BD:** MySQL mediante variables de entorno definidas en `docker-compose.yml`.  

### Base de datos
- **Imagen:** MySQL:8.0  
- **Puerto interno:** 3306  
- **Base de datos:** `fintechdb`  
- **Usuario:** `finuser`  
- **Contraseña:** `finpass`  
- **Volumen persistente:** `db_data`  

---

## Ejecución

1. Clonar el repositorio:
   ```bash
   git clone git@github.com:yuniela/Multicontenedor-tarea.git
   cd Multicontenedor-tarea
   ```

2. Construir y ejecutar los contenedores:
   ```bash
   docker-compose up --build
   ```

3. Acceder a los servicios:
   - Frontend → [http://localhost:3000](http://localhost:3000)  
   - Backend → [http://localhost:5001](http://localhost:5001)

---

## Persistencia y Red
- **Volumen:**  
  Los datos de MySQL se guardan en `db_data`, garantizando persistencia entre ejecuciones.  
- **Red interna:**  
  Todos los contenedores se comunican mediante `fintech_net`.

---

## Comandos útiles
```bash
# Detener contenedores
docker-compose down

# Ver logs
docker-compose logs -f

# Reiniciar un servicio
docker-compose restart backend
```

---

## Autor
**Yuniela Solorzano Burgos**  
Proyecto de despliegue en multi-contenedor para TechOps Solutions — FinTech S.A.
