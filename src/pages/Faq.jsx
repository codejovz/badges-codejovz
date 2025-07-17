import {Sidebar} from '../components/Sidebar.jsx';

export default function Faq() {
    return(
        <div class="centro">

            <Sidebar/>
            <article class="faq">
                <h1>Frequently Asqued Questions</h1>
                <section>
                    <h2>What is an SVG?</h2>
                    <p>SVG stands for Scalable Vectorial Graphics.</p>
                    <p>As the drawing is made from calculations over points, width and colors, it can be re-scaled or zoomed-in/out, without loosing quality</p>
                </section>
                <section>
                    <h2>Why should I use this Badges in my README or at my Markup document??</h2>
                    <p>Their purpose is to give the document more readability, and to use ready and easy images instead of boring text or hard-to-code divs.</p>
                    <p>As the logos are often joined whith the companies, not only their name.</p>
                    <p>So, if you read the word, with a mathing color and a logo, you may not even finish to read that word at the time you understood it.</p>
                </section>
            </article>
        </div>

    );
}