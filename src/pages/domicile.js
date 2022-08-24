import React from 'react'
import '../styles/saulieu.css'
import Navbar from '../comps/Navbar';
import { NavLink } from "react-router-dom";

export default function marche() {
  return (
    <>
     <div className=" gauche">
      <Navbar />
      <h1>Domicile</h1>
    </div>
    <div className="item droite">
      <div className='main2'>
      <p className='description'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat blanditiis 
        ut doloribus animi 
        ullam obcaecati quis, 
        deserunt optio ipsum quo modi ab consectetur perferendis labore totam autem iure numquam! Magni?
      </p>
      <NavLink to="/#" className='ensavoirplus'> En savoir plus </NavLink>
      </div>
    </div>
  </>
   
  )
}