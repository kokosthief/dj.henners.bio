export interface PhotoItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
  className?: string;
}

export const photos: PhotoItem[] = [
  {
    src: '/images/rijksmuseum-dj-booth.jpg',
    alt: 'Henners DJing for Ambrosia at Rijksmuseum Amsterdam',
    title: 'Rijksmuseum · Amsterdam',
    caption: 'Ambrosia special at one of a kind location.',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/rijksmuseum-dancefloor.jpg',
    alt: 'Ambrosia dance floor at Rijksmuseum Amsterdam',
    title: 'Ambrosia floor',
    caption: 'Phones away. People in the room.',
  },
  {
    src: '/images/gallery/edfh-basement-bw.jpg',
    alt: 'Henners DJing at Ecstatic Dance Festival Holland',
    title: 'In the mix at EDFH',
    caption: 'Black and white floor moment at Ecstatic Dance Festival Holland.',
    className: 'md:col-span-2',
  },
  {
    src: '/images/gallery/ambrosia-het-sieraad-floor.jpg',
    alt: 'Ambrosia dance floor at Het Sieraad in Amsterdam',
    title: 'Ambrosia at Het Sieraad',
    caption: 'Hands up in the old courtyard.',
    className: 'md:col-span-2',
  },
  {
    src: '/images/gallery/ambrosia-het-sieraad-dj.jpg',
    alt: 'Henners DJing for Ambrosia at Het Sieraad',
    title: 'Ambrosia · Het Sieraad',
    caption: 'Close to the dancers, tucked into the room.',
  },
  {
    src: '/images/gallery/under-the-sun-dj.jpg',
    alt: 'Henners DJing outdoors at Under the Sun',
    title: 'Under the Sun',
    caption: 'Outdoor floor, warm light, steady rhythm.',
    className: 'md:col-span-2',
  },
  {
    src: '/images/gallery/silent-dance-water.jpg',
    alt: 'Silent dance by the water',
    title: 'Silent dance by the water',
    caption: 'Headphones on. City quiet around the edges.',
  },
  {
    src: '/images/henners-ceremony.jpg',
    alt: 'Opening ceremony at Ecstatic Dance Festival Holland',
    title: 'Ceremony',
    caption: 'Opening ceremony at Ecstatic Dance Festival Holland.',
  },
  {
    src: '/images/gallery/forest-listening.jpg',
    alt: 'Henners listening outside in the forest',
    title: 'Listening',
    caption: 'The quiet parts matter too.',
  },
  {
    src: '/images/gallery/forest-sitting.jpg',
    alt: 'Henners sitting outside between events',
    title: 'Between floors',
    caption: 'A softer part of the same work.',
  },
  {
    src: '/images/henners-spaceholding.jpg',
    alt: 'Henners holding space during an ecstatic dance journey',
    title: 'Holding space',
    caption: 'Feeling into, holding space.',
    className: 'md:col-span-2',
  },
];
