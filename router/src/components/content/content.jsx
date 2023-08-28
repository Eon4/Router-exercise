import style from './content.module.scss'

export const ContentSection = ({children, title}) => {

    return (
        <>
        <div className={style.contentStyle} >
            <h1>{title}</h1>
            <section>
                {children}
            </section>
        </div>
        </>
    )
}