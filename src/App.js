import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/login_page";
import MenuPage from "./pages/menu_page"

let task = [
            {
                "text": "Persönliche Informationen aktualisieren",
                "checked": true
            },
            {
                "text": "Vertrag/Erklärungen unterschreiben",
                "checked": true
            },
            {
                "text": "Ablauf erste Tage betrachten",
                "checked": false
            },
            {
                "text": "Erhaltene Nachrichten lesen",
                "checked": false
            },
            {
                "text": "Kontakte betrachten",
                "checked": true
            },
            {
                "text": "Notfallkontakt hinterlegen",
                "checked": false
            }
        ]

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home/:username" element={<MenuPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;