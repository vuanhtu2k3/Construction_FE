import Protypes from "prop-types";

const Hero = ({ preHeading, heading, text }) => {
    return (
        <section className='section-7 py-3'>
            <div className='container'>
                <div className='text-left col-md-6'>
                    <span>{preHeading}</span>
                    <h2>
                        {heading}
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </section>
    )
};
Hero.propTypes = {
    preHeading: Protypes.string.isRequired,
    heading: Protypes.string.isRequired,
    text: Protypes.string.isRequired
}

export default Hero