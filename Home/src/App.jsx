import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { RevisarCita } from './Pages/revisar_cita'
import { SolicitarCita } from './Pages/solicitar_cita'

function App() {
    
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<SolicitarCita/>}/>
                <Route path="/page1" element={<RevisarCita/>}/>
            </Routes>
        </HashRouter>
    )
}