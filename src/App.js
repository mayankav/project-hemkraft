import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Bathroom from "./routes/bathroom";
import Error from "./routes/error";
import Home from "./routes/home";
import Household from "./routes/household";
import Email from "./routes/household/email";
import Phone from "./routes/household/phone";
import PostalCode from "./routes/household/postalCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="household" element={<Household />}>
          <Route path="email" element={<Email />} />
          <Route path="postal" element={<PostalCode />} />
          <Route path="phone" element={<Phone />} />
        </Route>
        <Route path="bathroom" element={<Bathroom />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
