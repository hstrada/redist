import React from 'react';

interface IValue {
  value: string;
}

export const Value = ({ value }: IValue) => {
  return <div>{value}</div>;
};
