import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Login } from './pages/login';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
   )
  );

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div className='navbar'>
        <Link to='/'> Home </Link>
        <Link to='./login'> Login </Link>
        <Link to='/contact'> Contact</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
