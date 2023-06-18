/** @format */

import { Provider } from "react-redux";
import "./App.css";
import { Contact } from "./Components/Contact";
import { Navbar } from "./Components/Navbar";
import store from "./Redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Addcontact } from "./Components/Addcontact";
import { Editcontact } from "./Components/Editcontact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar></Navbar>
          <div className='container'>
            <div className='py-3'>
              <Routes>
                <Route path='/' element={<Contact />} />
                <Route path='/contacts/add' element={<Addcontact />} />
                <Route path='/contacts/edit/:id' element={<Editcontact />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
