import { BrowserRouter, Route, Routes } from "react-router-dom";

//layout
import Layout from "./Layout/Layout";

//pages
import Index from "./pages/Index";

//context
import { ScrollProvider } from "./context/ScrollContext";
import DetailsInformation from "./pages/DetailsInformation";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollProvider>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Index />} />
                <Route path=":ContentType/:id" element={<DetailsInformation />} />
              
            </Route>
          </Routes>
        </ScrollProvider>

      </BrowserRouter>
    </>
  )
}

export default App
