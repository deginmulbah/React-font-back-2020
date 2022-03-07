import Header from "./compoents/Header";
import FeedbackList from "./compoents/FeedbackList";
import FeedbackStats from "./compoents/FeedbackStats";
import FeedbackForm from "./compoents/FeedbackForm";
import Aboutlink from "./compoents/Aboutlink";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                <Aboutlink />
                            </>
                        }>
                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}
export default App