// import style from './ContentSection.module.scss'

export const ContentSection = ({children, title}) => {

    return (
        <>
        <div >
            <h1>{title}</h1>
            <section>
                {children}
            </section>
        </div>
        </>
    )
}