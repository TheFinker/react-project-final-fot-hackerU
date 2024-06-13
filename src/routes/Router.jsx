import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCardPage from "../cards/pages/AddCardPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPage from "../cards/pages/CardsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavoriteCardsPage from "../cards/pages/FavoriteCardsPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ParentComponentPage from "../sandbox/context/ParentComponentPage";
import Counter from "../sandbox/Counter";
import Counter1 from "../sandbox/Counter1";
import Countries from "../sandbox/Countries";
import FormExample from "../sandbox/FormExample";
import LifeCycle from "../sandbox/LifeCycle";
import ParentComponent from "../sandbox/optimization/ParentComponent";
import SandBox from "../sandbox/SandBox";
import EditUserPage from "../users/pages/EditUserPage";
import LoginPage from "../users/pages/LoginPage";
import ProfilePage from "../users/pages/ProfilePage";
import SignupPage from "../users/pages/SignupPage";
import ROUTES from "./routesModel";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoriteCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="counter1" element={<Counter1 />} />

        <Route path="lifecycle" element={<LifeCycle />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<FormExample />} />
        <Route path="optimization" element={<ParentComponent />} />
        <Route path="context" element={<ParentComponentPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
