import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Volunregister from './pages/Volunregister';
import Seekerreg from './pages/Seekerreg';
import Volunlist from './pages/Volunlist';
import Volunprofile from './pages/Volunprofile';
import Seekerneeds from './pages/Seekerneeds';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', element: <Home />,
      children:[
        {path: '/register', element: <Register />},
        {path: '/login', element: <Login />},
        {path: '/register/volreg', element: <Volunregister />},
        {path: '/register/seekreg', element: <Seekerreg />},
        {path: '/register/seekreg/seekerneeds', element: <Seekerneeds />},
        {path: '/register/seekreg/voluntlist', element: <Volunlist />},
        {path: '/register/seekreg/voluntlist/voluntprofile', element: <Volunprofile />},
      ]


    },


  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;