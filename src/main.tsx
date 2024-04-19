import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import MainPage from "./pages/MainPage/MainPage";
import './assets/main.css';
import {Provider} from "react-redux";
import store from "./store/store";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <MainPage/>,
            },
            {
                path: '/statistics',
                element: <StatisticsPage/>,
            },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
