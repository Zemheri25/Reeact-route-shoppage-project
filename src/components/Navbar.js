import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link to={"/"}>Home Page</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
    </div>
  )
}

export default Navbar