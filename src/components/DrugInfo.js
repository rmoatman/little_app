import React from 'react';

// called from withListLoading.js

const getRxcuiInfo = (props) => {
  const { drugs } = props;
  if (!drugs) return <p>No drugs by that name, sorry</p>;
  return (
    <div>
        <p> {drugs.drugGroup.name} </p>
        <p> {drugs.drugGroup.conceptGroup[1].conceptProperties[0].rxcui} </p>

    </div>
  );
};
export default getRxcuiInfo;





