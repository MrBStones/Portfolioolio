import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Triangles from "./Triangles.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <Triangles/>
    </StrictMode>,
)
