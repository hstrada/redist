import React from 'react';
import { useState } from 'react';
import { createConnection } from '../services/createConnection';

export const Value = ({ value }: { value: string }) => {
  return <div>{value}</div>;
};
