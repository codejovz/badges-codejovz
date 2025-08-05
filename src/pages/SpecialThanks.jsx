import {Sidebar} from '../components/Sidebar.jsx';
import {Footer} from '../components/Footer.jsx';
export function SpecialThanks() {
    return (
        <div class="centro">
            <Sidebar />
            <div class="specialThanks">
                <h1>Special thanks to:</h1>
                <ul class="specialThanksList">
                    <li><a href="https://gemini.google.com/app?hl=es-ES">gemini</a> for generating the logo.</li>
                    <li><a href="https://bigimage.11zon.com/es/crop-circle-image/convert-square-image-to-circle.php">11zon</a> for converting the logo to round.</li>
                    <li><a href="https://convertio.co/">convertio.co</a> for converting the logo to SVG.</li>
                    <li><a href="https://chatgpt.com/">chatgpt</a> for generating images about svgs and markdown.</li>
                </ul>
                <Footer/>
            </div>
        </div>
    );
}