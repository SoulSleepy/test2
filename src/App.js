import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllServices } from './components/AllServices'
import { ServiceItem } from './components/AllServices/ServiceItem';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllServices />} />
                <Route path="/:id/details" element={<ServiceItem />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
