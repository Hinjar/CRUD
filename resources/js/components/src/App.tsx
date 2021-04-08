import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import './index.css'
import {AddCategory_c} from "./containers/AddCategory_c";
import {AddProduct_c} from "./containers/AddProduct_c";
import Search_c from "./containers/Search_c";
import ItemList_c from "./containers/ItemList_c";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={ItemList_c}></Route>
                    <Route path={'/search'} exact component={Search_c}></Route>
                    <Route path={'/add/product/:id'} exact component={AddProduct_c}></Route>
                    <Route path={'/add/product'} exact component={AddProduct_c}></Route>
                    <Route path={'/add/category'} exact component={AddCategory_c}></Route>
                    <Route path={'/add/category/:id'} exact component={AddCategory_c}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
