import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import s from './App.module.scss';
import Catalog from "./Pages/Catalog/Catalog";
const Product = lazy(() => import("./Pages/Product/Product"))

let App = (props) => {
    return (
        <HashRouter >
            <div className={s.wrapper}>
                <Suspense>
                    <Routes >
                        <Route path='/' element={<Catalog store={props.store} state={props.state} />} />
                        <Route path='/product' element={<Product store={props.store} />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Routes>
                </Suspense>

            </div>
        </HashRouter>

    )
};

export default App;