
export function Section({title, content=[], imgSrc, altImg}){
    return(
        <section>
            <h2>{title}</h2>
            {content.map((text, i) => (
                <p key={i}>{text}</p>
            ))}
            <img className="faqIMG" src={imgSrc} alt={altImg}/>
        </section>
    );
}