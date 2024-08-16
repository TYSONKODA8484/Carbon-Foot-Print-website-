import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cardImage from '../../assets/card.jpg'; // Make sure the path is correct

const FullInfo = () => {
  const { state } = useLocation();
  const location = state ? state.location : {};
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 min-h-screen dark:bg-slate-800 dark:text-white mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={cardImage}
          className="max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0 lg:mr-6"
          alt="Location"
        />
        <div>
          <h1 className="text-5xl font-bold">{location.name}</h1>
          <p className="py-6">{location.description}</p>
          <div className="mb-4">
            <h2 className="text-2xl mb-2">Details</h2>
            <p><strong>Location:</strong> {location.location}</p>
            <p><strong>Latitude:</strong> {location.latitude}</p>
            <p><strong>Longitude:</strong> {location.longitude}</p>
            <p><strong>Solar:</strong> {location.solar}</p>
            <p><strong>Biogas:</strong> {location.biogas}</p>
            <p><strong>Vermiculture:</strong> {location.vermiculture}</p>
            <p><strong>Structure Stability:</strong> {location.structureStability}</p>
            <p><strong>Address:</strong> {location.address}</p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default FullInfo;
