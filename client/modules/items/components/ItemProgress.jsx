import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ItemProgress = ({percentage}) => (
    <ProgressBar now={70} label="70%"></ProgressBar>
);

export default ItemProgress;
