import {BadgeGallery} from './BadgeGallery.jsx';
import {Footer} from '../components/Footer.jsx';
export function Landing() {
    return (
            <div className="landing">
                <section className = "welcome">
                    <h1>BADGES</h1>
                    <h2>All the badges, at one website</h2>
                    <p>Click on the badges to copy them!</p>
                </section>
                <BadgeGallery/>
                <Footer/>
            </div>
    );
}