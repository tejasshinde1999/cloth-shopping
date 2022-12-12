import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: "https://www.lordsindia.com/image/cache/1/HAT/p-cap-1-500x500w.JPG",
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/05/15/04/leather-2584298_960_720.jpg",
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: "https://image.cnbcfm.com/api/v1/image/104724034-sneaks.jpg?v=1635165579",
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: "https://stat1.bollywoodhungama.in/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-20-at-4.15.48-PM.jpeg",
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: "https://images.indianexpress.com/2021/04/akshay-kumar-1200.jpg",
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
