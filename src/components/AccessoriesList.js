import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './List.css'

const AccesoriesList = ({ searchTerm }) => {
  const [accesories, setAccesories] = useState([]);
  const [filteredAccesories, setFilteredAccesories] = useState([]);

  useEffect(() => {
    const mockAccesories = [
        {
          id: 111,
          name: 'CubreCubreasiento MOMO Negro y Rojo',
          price: '$50.00 USD',
          description: 'MOMO Seat Cover PRO 018 Black-Red with Steering Wheel Cover & Gift Included \n 100% Universal \n Made of durable and comfortable materials for the seat and backrest.\n Contains a seat cover to complement the design of the seat cover.'
        },
        {
          id: 22,
          name: 'Michelin Universal Rubber Floor Mat Black',
          price: '$30.00 USD',
          description: 'High quality car mats: high quality mats and rubber are naturally dirt and stain resistant and offer superior durability. Protects against spills or debris. \nAnti-skid rear: front, rear and trunk liner set for complete protection.'
        },
        {
          id: 33,
          name: 'Adhesive Magnetic Holder',
          price: '$15.00 USD',
          description: 'Adhesive Magnetic Holder'
        },
        {
          id: 44,
          name: 'Type C Car Charger',
          price: '$40.00 USD',
          description: 'Charge any device with USB and Type-C input at the same time with the Energizer Type-C car charger with USB port.'
        },
        {
          id: 55,
          name: 'Windshield Cover',
          price: '$53,400.00 USD',
          description: 'Front windshield sunshade is constructed with a heat-reflective aluminum film and an inner layer of bubbles that efficiently reflects sunlight and heat. It protects your cars interior from the sun during hot, sunny days. Accordion style design allows for easy installation and storage.'
        },
        {
          id: 66,
          name: 'Plastic Steering Wheel Cover Black with Red',
          price: '$43,540.00 USD',
          description: 'steering wheel\nNo slipping and stays in the same original position\nWith details on the sides for a better grip'
        },
        {
          id: 77,
          name: 'Stereo Speaker System 400 Watts',
          price: '$120.00 USD',
          description: 'Stereo Speaker System 400 Watts'
        },
        {
          id: 88,
          name: '4-Way Audio Speaker with LED 6 inches x 9 inches',
          price: '$60.00 USD',
          description: '4-Way Audio Speaker with LED 6 inches x 9 inches'
        },
        {
          id: 99,
          name: 'Accident Sign Kit',
          price: '$50.00 USD',
          description: 'Accident Sign Kit'
        },
        {
          id: 100,
          name: 'Fog Lights Kit',
          price: '$200.00 USD',
          description: 'Fog Lights Kit'
        }
      ];
      
    setAccesories(mockAccesories);
  }, []);
  useEffect(() => {
    const filtered = accesories.filter((accesorie) => {
      return accesorie.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredAccesories(filtered);
  }, [searchTerm, accesories]);

  return (
    <div>
      <h2>Accesories for Sale</h2>
      <div className="list">
        {filteredAccesories.map((accesorie) => (
          <div key={accesorie.id} className="item">
            <div className="image-page">
              <img src={`/images/${accesorie.id}.png`} className="imagepage" alt={accesorie.name} />
            </div>
            <Link to={`/accessories/${accesorie.id}`} state={{ accesorie }}>{accesorie.name} - {accesorie.price} </Link>
          </div>
        ))}
      </div>
      ))
      <Link to="/cart">Go to Cart</Link> {/* Añadir enlace al carrito */}
    </div>
  );
};

export default AccesoriesList;
