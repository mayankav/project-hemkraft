import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Bathroom from "./routes/bathroom";
import Error from "./routes/error";
import Home from "./routes/home";
import Household from "./routes/household";
import Email from "./routes/household/email";
import Phone from "./routes/household/phone";
import MoreInfo from "./routes/household/moreInfo";
import PostalCode from "./routes/household/postalCode";
import BathroomListing from "./routes/bathroom/bathroomListing";
import AddBathroom from "./routes/bathroom/addBathroom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="household" element={<Household />}>
          <Route path="email" element={<Email />} />
          <Route path="postal" element={<PostalCode />} />
          <Route path="phone" element={<Phone />} />
          <Route path="moreinfo" element={<MoreInfo />} />
        </Route>
        <Route path="bathroom" element={<Bathroom />}>
          <Route path="add_bathroom" element={<AddBathroom />} />
          <Route path="bathroom_listing" element={<BathroomListing />} />
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
