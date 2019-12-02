import React from 'react';
import {IController} from './models';

export const ControllerContext = React.createContext<IController | undefined>(
  undefined,
);
