import {BadgeGallery} from './BadgeGallery.jsx';
import {Footer} from '../components/Footer.jsx';
export function Landing() {
    return (
            <div className="landing">
                <section className = "welcome">
                    <h1>BADGES</h1>
                    <h2>More badges, at one website</h2>
                    <p>Use them wherever you want!</p>
                </section>
                <BadgeGallery/>
                <Footer/>
            </div>
    );
}