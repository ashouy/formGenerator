import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { CustomHeader } from './template/CustomHeader';
import { CreateForm } from './components/create-form/CreateForm';
import { Examples } from './components/examples/Examples';

const App = () => {
  return (
    <>
      <CustomHeader/>
      <div className="content">
        <BrowserRouter>
        <Routes>
          <Route path="/"  Component={() => <p>home</p>} />
          <Route path="/create-form"  Component={CreateForm}  />
          <Route path="/examples" Component={Examples} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
};

export default App;
