'use client'


import Link from "next/link";
import './header.css';
import Image from "next/image";
import Squid from '../../../public/logoRecortadoCerto.png';
import {useState} from 'react';

import FacebookPixel from "../FacebookPixel/FacebookPixel";

import GooglePixel from "../googlePixel/pixelGoogle";

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
        <head className="header" >

            

<GooglePixel />

<FacebookPixel />



            <Link className="header__logo" href='/' >
                <Image
                    src={Squid}
                    alt="Squid DIgital Solutions"
                    width={200}
                /> 
            </Link>

            <ul className={active} >
                <li className="header__item"><Link className="header__link"  href='/' onClick={headerToggle}>Home</Link> </li>
                <li className="header__item"><Link className="header__link"  href='/quemsomos' onClick={headerToggle}>Quem Somos</Link></li>
                <li className="header__item"><Link className="header__link"  href="/servicos" onClick={headerToggle} >Serviços</Link></li>
                <li className="header__item"><Link className="header__link"  href="/orcamento" onClick={headerToggle}>Solitar Orçamento</Link> </li>
            </ul>s/squid
            

            <button type="button" id="button" onClick={headerToggle} className={toggleIcon} >
            <span></span>
            <span></span>
            <span></span>
            </button>

            
        </head>
    )
}