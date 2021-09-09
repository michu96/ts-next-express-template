import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
