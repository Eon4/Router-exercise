import { useEffect } from 'react';
import style from './navigation.module.scss'
import { Link } from 'react-router-dom';

export const Navigation = () => {
 
    useEffect(() => {
        console.log("Navigation Component has Mounted")
        return (
            () => {
                console.log("Navigation Component has Un-Mounted")
            }
        )
    }, [])

    return (
        <nav className={style.NaviStyle}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/employees">Employees</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}