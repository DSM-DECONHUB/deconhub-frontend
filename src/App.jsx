import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateContestPage from "./pages/CreateContestPage";
import ContestListPage from "./pages/ContestListPage";
import QnA from "./pages/QnAPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ContestListPage/>}/>
                <Route path='/create' element={<CreateContestPage/>}/>
                <Route path='/qna' element={<QnA/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;