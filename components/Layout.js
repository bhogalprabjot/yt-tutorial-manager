import React from 'react'
import tw from "tailwind-styled-components"
import FooterComp from './FooterComp';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useState } from 'react'



const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => {
        toggleSidebar(!sidebar);
    };
    return (
        <>
            <head>
                <title>YT Tutorial Manager</title>
            </head>
            <LayoutWrapper>
                {/* <header>
                    <NavBar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer> */}
                <Header>
                    <NavBar handleToggleSidebar={handleToggleSidebar} />
                </Header>

                <Main>
                    {
                        sidebar ? <SideBar handleToggleSidebar={handleToggleSidebar} /> :
                            children
                    }
                </Main>
                {/* <Footer ><FooterComp /></Footer> */}
            </LayoutWrapper>
        </>

    )
}

export default Layout;

const LayoutWrapper = tw.div`
    h-screen  w-screen flex flex-col overflow-x-hidden scrollbar scrollbar-thumb-black-light

 `

const Header = tw.header`
 `

const Main = tw.main`
    flex flex-1 bg-black-dark text-white 
`
const Footer = tw.footer`
`