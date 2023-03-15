import React from 'react';
import { useState } from 'react';
import { createConnection } from '../services/createConnection';

export const Value = (props) => {
  return <div>{props.keyValue}</div>;
};
