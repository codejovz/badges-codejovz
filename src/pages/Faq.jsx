import {Sidebar} from '../components/Sidebar.jsx';
import {Footer} from '../components/Footer.jsx';
import {Section} from '../components/Section.jsx';
export function Faq() {
    return(
        <div className="centro">
            <Sidebar/>
            <div className="faq">
                <article>
                <h1>Frequently Asqued Questions</h1>
                <Section 
                    title="What is an SVG?"
                    content={[
                        "SVG stands for Scalable Vectorial Graphics.",
                        "As the drawing is made from calculations over points, width and colors, it can be re-scaled or zoomed-in/out, without loosing quality."
                    ]}
                    imgSrc="/assets/fotoempresabadges.png"
                    altImg="Workers designing badges"
                />
                <Section
                    title="Why should I use this Badges in my README or at my Markup document?"
                    content={[
                        "Their purpose is to give the document more readability, and to use ready and easy images instead of boring text or hard-to-code divs.",
                        "Also, the logos are often joined whith the companies, not only their name.",
                        "At last, but not least, if you read the word, with a matching color and a logo, you may not even finish to read that word at the time you understood it."
                    ]}
                    imgSrc="/assets/SVGoverCode_chatgptIMG.png"
                    altImg="Why use Badges over other images or text?"
                />
                </article>
                <Footer/>
            </div>
        </div>
    );
}