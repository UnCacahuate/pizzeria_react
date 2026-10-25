# 🍕 Cacahuate's Pizzeria

Aplicación web de una pizzería hecha con **React + Vite + Bootstrap**. Muestra el catálogo de pizzas consumido desde una API local, permite ver el detalle de cada una, armar un carrito de compras con estado global y simula una sesión de usuario con rutas protegidas.

> Proyecto desarrollado a lo largo de los hitos de **Desafío Latam** (Hito 1 al Hito 7).

## 🌐 Demo

https://uncacahuate.github.io/pizzeria_react/

> ⚠️ La demo publicada no puede cargar las pizzas, porque la API corre en `localhost:5000`. Para ver el catálogo completo, ejecuta el proyecto junto con el backend en tu equipo.

## ✨ Features

- 🍕 Catálogo de pizzas con componentes reutilizables (`CardPizza`) y datos desde la API (`useEffect` + `fetch`)
- 🔎 Vista de detalle por pizza usando `useParams` (`/detalle/:id`)
- 🛒 Carrito global con **Context API**: añadir, sumar y restar productos, con total e ítems en el Navbar
- 🔐 Sesión simulada con `UserContext` (token + `logout`)
- 🧭 Navbar con `NavLink` que resalta la ruta activa y muestra botones según el estado de sesión
- 🚧 Rutas protegidas: `/profile` exige sesión; `/login` y `/register` redirigen al inicio si ya hay sesión
- 💳 Botón "Pagar" deshabilitado cuando no hay sesión
- ❓ Página 404 para rutas inexistentes
- 📱 Layout responsive (Bootstrap) con footer siempre pegado al fondo

## 🗺️ Rutas

| Ruta | Vista | Acceso |
|---|---|---|
| `/` | Home | Público |
| `/detalle/:id` | Detalle de pizza | Público |
| `/cart` | Carrito | Público (pago solo con sesión) |
| `/login` | Login | Solo sin sesión |
| `/register` | Registro | Solo sin sesión |
| `/profile` | Perfil | Solo con sesión |
| `/404` y cualquier otra | Página no encontrada | Público |

## 🛠️ Stack

React 19 · Vite · React Router · Bootstrap 5 · React-Bootstrap · Context API

## 🧩 Estructura

```
src/
├── components/   Navbar · Header · CardPizza · Footer
├── views/        Home · DetailView · Cart · LoginPage · RegisterPage · Profile · NotFound
├── contexts/     CartContext · UserContext
└── utilitarios/  formatearMoneda
```

## 🚀 Uso

```bash
npm install
npm run dev
```

La aplicación espera una API de pizzas en `http://localhost:5000`:

- `GET /api/pizzas` — lista de pizzas
- `GET /api/pizzas/:id` — una pizza por id

## 📦 Despliegue

```bash
npm run deploy
```

Publica la carpeta `dist` en GitHub Pages (rama `gh-pages`).

## 👤 Autor

Eliseo — [GitHub](https://github.com/UnCacahuate)
