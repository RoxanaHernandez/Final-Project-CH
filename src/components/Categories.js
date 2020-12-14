import React from 'react';
import ItemListContainer from './ItemListContainer';
import {useParams } from 'react-router-dom';

export default function Categories(){
    const { categoryId } = useParams();
    return (
        <ItemListContainer categoryId={parseInt(categoryId, 10)} />
    ) 
};