import React from 'react';
const List = (props) => {
  const { drugs } = props;
  if (!drugs || drugs.length === 0) return <p>No drugs by that name, sorry</p>;
  return (
    <div>
        <p> {drugs.drugGroup.name} </p>
        <p> {drugs.drugGroup.conceptGroup[1].conceptProperties[0].rxcui} </p>

    </div>

  );
};
export default List;


////////////////////////////////////////////
