import React from 'react';

let val = Math.floor(4000 + Math.random() * 1500);
let stardate = `${val}${(Math.random() * 10).toFixed(1)}`;

const StarDate = () => {
  return <span>{stardate}</span>;
};

export default StarDate;
