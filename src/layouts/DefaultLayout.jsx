import { Outlet } from "react-router-dom"

import MainNavbar from "../components/MainNavbar"

const DefaultLayout = () => {
  return (
    <>
        <header>
            <MainNavbar />
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default DefaultLayout