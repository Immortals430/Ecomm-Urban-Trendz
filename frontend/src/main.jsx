import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import Account from './Pages/UserAccount.jsx'
import SearchResultpage from './Pages/SearchResultpage.jsx'
import Productpage from './Pages/Productpage.jsx'
import Cartpage from './Pages/Cartpage.jsx'
import Wishlistpage from './Pages/Wishlistpage.jsx'
import MyOrderspage from './Pages/MyOrderspage.jsx'
import Checkoutpage from './Pages/Checkoutpage.jsx'

const routes = createBrowserRouter([{
  path:"/", element: <App />, children:[
    { index: true, element: <Homepage /> },
    { path: "/user-account", element: <Account /> },
    { path: "/search-result", element: <SearchResultpage /> },
    { path: "/product/:id", element: <Productpage /> },
    { path: "/cart", element: <Cartpage /> },
    { path: "/wishlist", element: <Wishlistpage /> },
    { path: "/orders", element: <MyOrderspage />},
    { path: "/checkout", element: <Checkoutpage /> }
  ] 
}])

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>

)
