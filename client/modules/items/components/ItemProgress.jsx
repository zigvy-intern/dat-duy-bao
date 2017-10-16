import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ItemProgress = ({percentage}) => (
    <ProgressBar now={70} label="to be continue"></ProgressBar>
);

export default ItemProgress;
