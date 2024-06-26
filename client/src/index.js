import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './translations/i18n';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ShopPage } from './pages/ProductCategory/ShopPage';
import { PageNotFound } from './pages/PageNotFound';
import { ThemeProvider } from '@mui/material';
import { theme } from './style/theme';
import { CartProvider } from './contexts/CartContext';
import { ContactPage } from './pages/ContactPage';
import { ProductsManagementPage } from './pages/ProductCategory/ProductsManagementPage';
import { ProductEditPage } from './pages/ProductCategory/ProductEditPage';
import { AuthPage } from './pages/AuthPage';
import { SnackbarProvider } from 'notistack';
import ProfilePage from './pages/ProfilePage';
import { ProfileProvider } from './contexts/ProfileContext';
import { CreateProductPage } from './pages/ProductCategory/CreateProductPage';
import AdminRoute from './routes/AdminRoute';
import OrderPage from './pages/OrderCategory/OrderPage';
import { ParametersPage } from './pages/ParametersPage';
import { CurrencyProvider } from './contexts/CurrencyContext';
import OrdersPage from './pages/OrderCategory/OrdersPage';
import OrdersManagementPage from './pages/OrderCategory/OrdersManagementPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={2} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <ProfileProvider>
          <CurrencyProvider>
            <CartProvider>
              <Router>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/auth" component={AuthPage} />
                  <Route exact path="/shop" component={ShopPage} />
                  <Route exact path="/shop/order" component={OrderPage} />
                  <Route exact path="/shop/orders" component={OrdersPage} />
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/profile" component={ProfilePage} />
                  <Route exact path="/parameters" component={ParametersPage} />
                  <AdminRoute exact path="/admin" component={ProductsManagementPage} />
                  <AdminRoute exact path="/admin/product/:id" component={ProductEditPage} />
                  <AdminRoute exact path="/admin/create" component={CreateProductPage} />
                  <AdminRoute exact path="/admin/orders" component={OrdersManagementPage} />
                  <Route component={PageNotFound} />
                </Switch>
              </Router>
            </CartProvider>
          </CurrencyProvider>
        </ProfileProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
