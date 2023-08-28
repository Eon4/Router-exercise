import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navigation/navigation";
import style from './mainLayout.module.scss'
export const MainLayout = () => {

  return (
    <main className={style.layoutStyle}>
      <Navigation/>
        <Outlet/>
      <Footer />
    </main>
  );
};