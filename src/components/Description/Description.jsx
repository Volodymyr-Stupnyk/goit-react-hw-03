import css from './Description.module.css'

const Description = () => {
    return (
        <div className={css.descr}>
            <h1 className={css.titleDescr}>Sip Happens Café</h1>
            <p className={css.textDescr}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
};

export default Description;