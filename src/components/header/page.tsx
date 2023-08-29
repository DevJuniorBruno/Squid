'use client'


import Link from "next/link";
import './header.css';
import Image from "next/image";
import Squid from '../../../public/logoRecortadoCerto.png';
import {useState} from 'react';

export default function Header(){

    const[active, setActive]=useState("header__menu");
    const[toggleIcon, setToggleIcon]=useState("header__toggler")


    const headerToggle = ()=>{
        active === "header__menu"
        ? setActive("header__menu header__active")
        :setActive("header__menu");


        toggleIcon === "header__toggler"
        ? setToggleIcon("header__toggler toggle")
        : setToggleIcon("header__toggler") ;
    }

    //TogglerIcon
    return(
        <header className="header" >
            <Link className="header__logo" href='/dashboard' >
                <Image
                    src={Squid}
                    alt="Squid DIgital Solutions"
                    width={200}
                /> 
            </Link>

            <ul className={active} >
                <li className="header__item"><Link className="header__link"  href='/' >Home</Link> </li>
                <li className="header__item"><Link className="header__link"  href='/quemsomos'>Quem Somos</Link></li>
                <li className="header__item"><Link className="header__link"  href="/servicos" >Serviços</Link></li>
                <li className="header__item"><Link className="header__link"  href="/solicitarorcamento">Solitar Orçamento</Link> </li>
            </ul>

            <button type="button" id="button" onClick={headerToggle} className={toggleIcon} >
            <span></span>
            <span></span>
            <span></span>
            </button>
        </header>
    )
}