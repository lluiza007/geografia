// src/components/StateInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';

const stateData = {
  Acre: {
    capital: 'Rio Branco',
    populacao: '894.470 habitantes',
    descricao: 'Acre é um estado localizado na região Norte do Brasil, conhecido por sua biodiversidade e pela floresta amazônica.',
  },
  Alagoas: {
    capital: 'Maceió',
    populacao: '3.351.543 habitantes',
    descricao: 'Alagoas é um estado no Nordeste do Brasil, famoso por suas praias e lagoas.',
  },
  Amazonas: {
    capital: 'Manaus',
    populacao: '4.207.714 habitantes',
    descricao: 'Amazonas é o maior estado brasileiro em extensão territorial, abrigando grande parte da floresta amazônica.',
  },
  Bahia: {
    capital: 'Salvador',
    populacao: '14.930.634 habitantes',
    descricao: 'Bahia é conhecida por sua rica cultura, belas praias e por ser o berço do samba e da capoeira.',
  },
  Ceará: {
    capital: 'Fortaleza',
    populacao: '9.240.580 habitantes',
    descricao: 'Ceará é um estado do Nordeste famoso por suas praias e pelo artesanato local.',
  },
  'Distrito Federal': {
    capital: 'Brasília',
    populacao: '3.094.325 habitantes',
    descricao: 'O Distrito Federal abriga a capital do Brasil, Brasília, e é um centro político e administrativo do país.',
  },
  'Espírito Santo': {
    capital: 'Vitória',
    populacao: '4.064.052 habitantes',
    descricao: 'O Espírito Santo é um estado do Sudeste do Brasil, conhecido por suas praias e pela produção de café.',
  },
  Goiás: {
    capital: 'Goiânia',
    populacao: '7.206.589 habitantes',
    descricao: 'Goiás está localizado na região Centro-Oeste e é conhecido pela produção agrícola e suas belas paisagens naturais.',
  },
  Maranhão: {
    capital: 'São Luís',
    populacao: '7.153.262 habitantes',
    descricao: 'Maranhão, localizado no Nordeste, é conhecido por seus Lençóis Maranhenses e pela rica cultura folclórica.',
  },
  'Mato Grosso': {
    capital: 'Cuiabá',
    populacao: '3.567.234 habitantes',
    descricao: 'Mato Grosso é famoso pelo Pantanal e pela Chapada dos Guimarães, além da produção agrícola.',
  },
  'Mato Grosso do Sul': {
    capital: 'Campo Grande',
    populacao: '2.839.188 habitantes',
    descricao: 'Mato Grosso do Sul é conhecido por suas belezas naturais, como o Pantanal e Bonito.',
  },
  'Minas Gerais': {
    capital: 'Belo Horizonte',
    populacao: '21.411.923 habitantes',
    descricao: 'Minas Gerais é famoso por sua história colonial, culinária e produção de café e minério.',
  },
  Pará: {
    capital: 'Belém',
    populacao: '8.690.745 habitantes',
    descricao: 'Pará abriga parte da Floresta Amazônica e o rio Amazonas, sendo um dos estados mais biodiversos do Brasil.',
  },
  Paraíba: {
    capital: 'João Pessoa',
    populacao: '4.059.905 habitantes',
    descricao: 'Paraíba é conhecida por suas praias paradisíacas e pelo pôr do sol ao som do Bolero de Ravel em João Pessoa.',
  },
  Paraná: {
    capital: 'Curitiba',
    populacao: '11.597.484 habitantes',
    descricao: 'Paraná, localizado no Sul do Brasil, é conhecido pelas Cataratas do Iguaçu e pelo Parque Nacional de Vila Velha.',
  },
  Pernambuco: {
    capital: 'Recife',
    populacao: '9.616.621 habitantes',
    descricao: 'Pernambuco é famoso pelo frevo, pelo maracatu e por suas praias, como Porto de Galinhas.',
  },
  Piauí: {
    capital: 'Teresina',
    populacao: '3.289.290 habitantes',
    descricao: 'Piauí, no Nordeste, é conhecido pelo Parque Nacional da Serra da Capivara e pelas paisagens arqueológicas.',
  },
  'Rio de Janeiro': {
    capital: 'Rio de Janeiro',
    populacao: '17.463.349 habitantes',
    descricao: 'Rio de Janeiro é um dos estados mais icônicos do Brasil, famoso pelo Cristo Redentor, Pão de Açúcar e pelo carnaval.',
  },
  'Rio Grande do Norte': {
    capital: 'Natal',
    populacao: '3.560.903 habitantes',
    descricao: 'Rio Grande do Norte é conhecido por suas belas praias e pelo turismo de aventura, como os passeios de buggy nas dunas.',
  },
  'Rio Grande do Sul': {
    capital: 'Porto Alegre',
    populacao: '11.422.973 habitantes',
    descricao: 'Rio Grande do Sul é conhecido por sua tradição gaúcha, vinícolas e pelas Serras Gaúchas.',
  },
  Rondônia: {
    capital: 'Porto Velho',
    populacao: '1.815.278 habitantes',
    descricao: 'Rondônia está localizado na região Norte do Brasil e é um estado com vastas áreas de floresta amazônica.',
  },
  Roraima: {
    capital: 'Boa Vista',
    populacao: '652.713 habitantes',
    descricao: 'Roraima é o estado menos populoso do Brasil, localizado no extremo norte, e conhecido por suas paisagens naturais intocadas.',
  },
  'Santa Catarina': {
    capital: 'Florianópolis',
    populacao: '7.727.466 habitantes',
    descricao: 'Santa Catarina é famoso por suas praias e pelas festas tradicionais, como a Oktoberfest em Blumenau.',
  },
  'São Paulo': {
    capital: 'São Paulo',
    populacao: '46.289.333 habitantes',
    descricao: 'São Paulo é o estado mais populoso e economicamente desenvolvido do Brasil, com destaque para a capital homônima.',
  },
  Sergipe: {
    capital: 'Aracaju',
    populacao: '2.338.474 habitantes',
    descricao: 'Sergipe é o menor estado do Brasil em área, localizado no Nordeste, com belas praias e rica história cultural.',
  },
  Tocantins: {
    capital: 'Palmas',
    populacao: '1.607.363 habitantes',
    descricao: 'Tocantins é o mais novo estado do Brasil, conhecido por suas belezas naturais, como o Jalapão.',
  },
};

const StateInfo = () => {
  const { stateName } = useParams();
  const info = stateData[stateName];

  if (!info) return <p>Estado não encontrado.</p>;

  return (
    <div>
      <h1>{stateName}</h1>
      <p><strong>Capital:</strong> {info.capital}</p>
      <p><strong>População:</strong> {info.populacao}</p>
      <p>{info.descricao}</p>
    </div>
  );
};

export default StateInfo;
