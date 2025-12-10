# Guía de Despliegue en Firebase Hosting

Sigue estos pasos para subir tu aplicación "Gran Vuelta al Sur" a internet gratis usando Google Firebase.

## 1. Preparación en la Web
1. Ve a [Firebase Console](https://console.firebase.google.com/).
2. Haz clic en **"Agregar proyecto"**.
3. Ponle nombre (ej: `gran-vuelta-sur`).
4. Desactiva Google Analytics (no hace falta para este prototipo) y crea el proyecto.

## 2. Preparación en tu Ordenador (Terminal)

Abre la terminal en la carpeta de este proyecto y sigue estos comandos:

### Paso A: Instalar herramientas de Firebase
Si no las tienes instaladas, ejecuta:
```bash
npm install -g firebase-tools
```

### Paso B: Iniciar sesión
```bash
firebase login
```
*Se abrirá una ventana del navegador para que entres con tu cuenta de Google.*

### Paso C: Conectar el proyecto
Ejecuta:
```bash
firebase init hosting
```

**Responde a las preguntas así:**

1. **Are you ready to proceed?** -> `Yes` (Y)
2. **Please select an option:** -> Selecciona `Use an existing project` (Usa las flechas y Enter).
3. **Select a default Firebase project:** -> Busca y selecciona el proyecto que creaste en el paso 1.
4. **What do you want to use as your public directory?** -> Escribe: `dist` (y pulsa Enter).
5. **Configure as a single-page app (rewrite all urls to /index.html)?** -> `Yes` (Y).
6. **Set up automatic builds and deploys with GitHub?** -> `No` (N).
7. **File dist/index.html already exists. Overwrite?** -> `No` (N) (¡Importante no sobrescribir si ya hiciste build, pero si te pregunta por `firebase.json`, dile que NO para usar el que ya he creado).

## 3. Construir y Desplegar

Cada vez que quieras subir cambios, solo necesitas ejecutar estos dos comandos:

1. **Generar la versión final (Build):**
   ```bash
   npm run build
   ```
   *Esto creará la carpeta `dist` con tu web optimizada.*

2. **Subir a internet (Deploy):**
   ```bash
   firebase deploy
   ```

¡Listo! La terminal te dará una URL (ej: `https://gran-vuelta-sur.web.app`) donde tu web ya es visible para todo el mundo.