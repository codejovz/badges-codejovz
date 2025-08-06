import {Sidebar} from '../components/Sidebar.jsx';
import {Footer} from '../components/Footer.jsx';

export function NotFound() {
    return(
    <div className="notFound">
        <Sidebar />
        <section className="notFound-message">
            <div className="notFound-center">
                <h1>404 - Page not found.</h1>
                <h2>Oops! It looks like you are lost.</h2>
                <p>Check the menu for an available page!</p>
            </div>
            <Footer />
        </section>
    </div>
    )
}