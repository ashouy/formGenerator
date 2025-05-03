import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { CustomHeader } from './template/CustomHeader';
import { CreateForm } from './components/create-form/CreateForm';
import { Examples } from './components/examples/Examples';
import { Home } from './components/home/Home';

const App = () => {
  return (
    <>
      <CustomHeader/>
      <div className="content">
        <BrowserRouter>
            <Routes>
              <Route path="/"  Component={Home} />
              <Route path="/create-form"  Component={CreateForm}  />
              <Route path="/examples" Component={Examples} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
