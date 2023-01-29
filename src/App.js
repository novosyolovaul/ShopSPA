import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from './App.module.scss';
import Catalog from "./Pages/Catalog/Catalog";
const Product = lazy(() => import("./Pages/Product/Product"))

let App = (props) => {
    return (
        <BrowserRouter >
            <div className={s.wrapper}>
                <Suspense>
                    <Routes >
                        <Route path='/' element={<Catalog store={props.store} state={props.state} />} />
                        <Route path='/product' element={<Product store={props.store} />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Routes>
                </Suspense>

            </div>
        </BrowserRouter>

    )
};

export default App;