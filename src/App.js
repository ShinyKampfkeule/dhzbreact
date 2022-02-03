import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginPage from "./pages/login_page";
import MenuPage from "./pages/menu_page";
import TaskPage from "./pages/task_page";
import ProfilPage from "./pages/profil_page";
import SchedulePage from "./pages/schedule_page";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<MenuPage />} />
                <Route path="/tasks" element={<TaskPage/>} />
                <Route path="/profil" element={<ProfilPage/>} />
                <Route path="/schedule" element={<SchedulePage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;