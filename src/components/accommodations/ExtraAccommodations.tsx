import React, { ReactChild } from 'react';

interface ExtraAccommodationsProps {
  children: ReactChild[]
}

const ExtraAccommodations = ({ children }: ExtraAccommodationsProps) => {
  return (
    <ul>{children}</ul>
  );
};

export default ExtraAccommodations;
