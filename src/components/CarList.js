import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './List.css'

const CarList = ({ searchTerm }) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const mockCars = [
        {
          id: 1,
          name: 'Dodge Challenger Hellcat 2023',
          price: '$69,995.00 USD',
          description: 'The Dodge Challenger Hellcat is a high-performance muscle car, distinguished by its powerful 6.2-liter supercharged V8 engine producing 717 horsepower and 656 lb-ft of torque. Known for its aggressive styling, including a distinctive hood scoop and flared fenders, it epitomizes American muscle car heritage designed to dominate the streets.'
        },
        {
          id: 2,
          name: 'Chevrolet Corvette Stingray 2024',
          price: '$59,995.00 USD',
          description: 'The Chevrolet Corvette Stingray is a sleek sports car designed for exceptional performance and handling. It features a 6.2-liter V8 engine that delivers 460 horsepower and 465 lb-ft of torque. With its aerodynamic design, removable roof panel, and luxurious interior, it is a true American icon perfect for track days and weekend getaways.'
        },
        {
          id: 3,
          name: 'Rolls Royce Phantom 2024',
          price: '$450,000.00 USD',
          description: 'The Rolls Royce Phantom is the pinnacle of luxury sedans, offering unparalleled comfort and sophistication. Powered by a 6.75-liter V12 engine producing 563 horsepower and 664 lb-ft of torque, it combines a sleek, elegant design with a spacious, technologically advanced interior. It is the ultimate choice for those who demand the very best in automotive luxury.'
        },
        {
          id: 4,
          name: 'Ram TRX Limited Edition 2024',
          price: '$89,995.00 USD',
          description: 'The Ram TRX Limited Edition is a high-performance pickup truck designed to dominate off-road terrain. Equipped with a 6.2-liter supercharged V8 engine that generates 702 horsepower and 650 lb-ft of torque, it boasts aggressive styling with a distinctive hood scoop and flared fenders. It is the ultimate American beast for off-road enthusiasts.'
        },
        {
          id: 5,
          name: 'Ford Mustang Dark Horse 2024',
          price: '$53,400.00 USD',
          description: 'The Ford Mustang Dark Horse is a high-performance variant of the Mustang sports car, powered by a 5.0-liter V8 engine producing 470 horsepower and 410 lb-ft of torque. With its sleek, aggressive design, distinctive spoiler, and 19-inch wheels, it is a quintessential American muscle car designed for exceptional performance and handling.'
        },
        {
          id: 6,
          name: 'Toyota Supra 2024',
          price: '$43,540.00 USD',
          description: 'The Toyota Supra is a renowned sports car known for its exceptional performance and handling. It features a 3.0-liter inline-6 engine that produces 382 horsepower and 369 lb-ft of torque. With its sleek, aerodynamic design, removable roof panel, and luxurious interior, it is a true Japanese icon ideal for track days and weekend getaways.'
        },
        {
          id: 7,
          name: 'Nissan GT-R 2024',
          price: '$113,540.00 USD',
          description: 'The Nissan GT-R is a high-performance sports car famed for its exceptional acceleration and handling. It is powered by a 3.8-liter twin-turbo V6 engine that generates 565 horsepower and 467 lb-ft of torque. Featuring a sleek, aggressive design with a distinctive spoiler and 20-inch wheels, it is a true Japanese beast perfect for track days and high-speed adventures.'
        },
        {
          id: 8,
          name: 'BMW M4 2024',
          price: '$71,800.00 USD',
          description: 'The BMW M4 is a luxury sports coupe with a reputation for powerful performance and advanced technology. It combines a refined interior with cutting-edge features and a robust engine, offering a perfect blend of comfort and speed.'
        },
        {
          id: 9,
          name: 'Mercedes-AMG C63 2024',
          price: '$76,200.00 USD',
          description: 'The Mercedes-AMG C63 is a luxury sedan known for its high-performance capabilities and sophisticated design. Powered by a potent engine, it delivers an exhilarating driving experience while maintaining the elegance and comfort characteristic of Mercedes-Benz.'
        },
        {
          id: 10,
          name: 'Audi R8 2024',
          price: '$169,900.00 USD',
          description: 'The Audi R8 is a high-performance supercar that blends striking aesthetics with cutting-edge technology. With its powerful engine and advanced features, it offers an unparalleled driving experience and represents the pinnacle of Audi engineering.'
        },
        {
          id: 11,
          name: 'Porsche 911 2024',
          price: '$97,400.00 USD',
          description: 'The Porsche 911 is an iconic luxury sports car celebrated for its performance and timeless design. Featuring a powerful engine and advanced driving technologies, it continues to be a symbol of automotive excellence and innovation.'
        },
        {
          id: 12,
          name: 'Lamborghini Huracan 2024',
          price: '$261,274.00 USD',
          description: 'The Lamborghini Huracan is a high-performance supercar renowned for its aggressive styling and exceptional speed. Equipped with a powerful engine and advanced technology, it offers an exhilarating driving experience and embodies the essence of Italian automotive craftsmanship.'
        },
        {
          id: 13,
          name: 'Ferrari F8 Tributo 2024',
          price: '$293,480.00 USD',
          description: 'The Ferrari F8 Tributo is a high-performance supercar that represents the pinnacle of Ferrari engineering. With its powerful engine and state-of-the-art technology, it offers a breathtaking driving experience and continues Ferrari\'s legacy of creating some of the world\'s most desirable cars.'
        }
    ];

    setCars(mockCars);
  }, []);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredCars(filtered);
  }, [searchTerm, cars]);

  return (
    <div>
      <h2>Cars for Sale</h2>
      <div className="list">
        {filteredCars.map((car) => (
          <div key={car.id} className="item">
            <div className="image-page">
              <img src={`/images/${car.id}.png`} className="imagepage" alt={car.name} />
            </div>
            <Link to={`/cars/${car.id}`} state={{ car }}>
              {car.name} - {car.price}
            </Link>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default CarList;