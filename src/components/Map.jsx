// src/components/Map.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Map.css'; 


const Map = () => {
  const navigate = useNavigate();

  const handleStateClick = (state) => {
    navigate(`/estado/${state}`);
  };

  return (
    <div className="map-container">
      <h1>Mapa do Brasil</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 1000" width="800">
        {/* Região Norte */}
        <g className="norte" onClick={() => handleStateClick('Acre')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="50" y="100">Acre</text>
        </g>
        <g className="norte" onClick={() => handleStateClick('Amazonas')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="100" y="80">Amazonas</text>
        </g>
        <g className="norte" onClick={() => handleStateClick('Rondônia')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="100" y="200">Rondônia</text>
        </g>
        <g className="norte" onClick={() => handleStateClick('Roraima')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="100" y="50">Roraima</text>
        </g>
        <g className="norte" onClick={() => handleStateClick('Pará')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="150" y="150">Pará</text>
        </g>
        <g className="norte" onClick={() => handleStateClick('Tocantins')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="250" y="300">Tocantins</text>
        </g>
        <g className="norte" onClick={() => handleStateClick('Amapá')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="190" y="50">Amapá</text>
        </g>
        
        {/* Região Nordeste */}
        <g className="nordeste" onClick={() => handleStateClick('Maranhão')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="300" y="200">Maranhão</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Bahia')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="200" y="300">Bahia</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Ceará')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="350" y="220">Ceará</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Piauí')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="350" y="270">Piauí</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Pernambuco')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="450" y="240">Pernambuco</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Paraíba')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="400" y="230">Paraíba</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Rio Grande do Norte')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="450" y="200">Rio Grande do Norte</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Alagoas')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="150" y="200">Alagoas</text>
        </g>
        <g className="nordeste" onClick={() => handleStateClick('Sergipe')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="450" y="300">Sergipe</text>
        </g>

        {/* Região Centro-Oeste */}
        <g className="centro-oeste" onClick={() => handleStateClick('Goiás')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="300" y="400">Goiás</text>
        </g>
        <g className="centro-oeste" onClick={() => handleStateClick('Mato Grosso')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="200" y="350">Mato Grosso</text>
        </g>
        <g className="centro-oeste" onClick={() => handleStateClick('Mato Grosso do Sul')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="250" y="450">Mato Grosso do Sul</text>
        </g>
        <g className="centro-oeste" onClick={() => handleStateClick('Distrito Federal')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="400" y="400">Distrito Federal</text>
        </g>

        {/* Região Sudeste */}
        <g className="sudeste" onClick={() => handleStateClick('Minas Gerais')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="400" y="500">Minas Gerais</text>
        </g>
        <g className="sudeste" onClick={() => handleStateClick('São Paulo')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="400" y="550">São Paulo</text>
        </g>
        <g className="sudeste" onClick={() => handleStateClick('Espírito Santo')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="450" y="450">Espírito Santo</text>
        </g>
        <g className="sudeste" onClick={() => handleStateClick('Rio de Janeiro')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="450" y="600">Rio de Janeiro</text>
        </g>

        {/* Região Sul */}
        <g className="sul" onClick={() => handleStateClick('Paraná')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="400" y="600">Paraná</text>
        </g>
        <g className="sul" onClick={() => handleStateClick('Santa Catarina')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="300" y="650">Santa Catarina</text>
        </g>
        <g className="sul" onClick={() => handleStateClick('Rio Grande do Sul')} style={{ cursor: 'pointer' }}>
          <path d="M..." />
          <text x="350" y="700">Rio Grande do Sul</text>
        </g>
      </svg>
    </div>
  );
};

export default Map;
