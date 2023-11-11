import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import { RouterProvider } from 'react-router-dom';
import App from './App';
// import Home from './page/Home';
// import App from './App';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         // errorElement: <Home />,
//     },
//     {
//         path: "/courses",
//         element: <Home />,
//         // loader: 
//     },
// ]);

// <RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
