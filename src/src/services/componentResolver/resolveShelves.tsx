import React from 'react';
// import dynamic from 'next/dynamic';
import { IShelf } from '@models/content';

const ShelfType = {
  DEFAULT: 1,
  CAROUSEL: 2
};

export const resolveShelves = (shelves: IShelf[]) => {
  // const Shelf = dynamic(() => import('@/components/Shelf'));

  return shelves.map((shelf) => {
    switch (shelf.type) {
      case ShelfType.DEFAULT:
        // return <Shelf key={shelf.shelfId} {...shelf} />;
        return <div />;

      default:
        console.warn(
          `Component não encontrado para o shelf id ${shelf.shelfId}`
        );
        return <div key={shelf.shelfId}></div>;
    }
  });
};
