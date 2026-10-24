import { galleryImages } from './galleryImages';

// Category-specific project photographs.
export const productGallery = {
  "construction-materials": [
    "/gallery/project-05.jpeg",
    "/gallery/project-12.jpeg",
    "/gallery/project-15.jpeg"
  ],
  "steel-rebar": [
    "/gallery/project-12.jpeg",
    "/gallery/project-15.jpeg"
  ],
  "cement-concrete": [
    "/gallery/project-04.jpeg",
    "/gallery/project-16.jpeg",
    "/gallery/project-17.jpeg"
  ],
  "crusher-asphalt": [
    "/gallery/project-16.jpeg",
    "/gallery/project-17.jpeg"
  ],
  "electrical-materials": [
    "/gallery/project-06.jpeg",
    "/gallery/project-07.jpeg",
    "/gallery/project-13.jpeg",
    "/gallery/project-14.jpeg",
    "/gallery/project-17.jpeg"
  ],
  "plumbing-materials": [
    "/gallery/project-01.jpeg",
    "/gallery/project-02.jpeg",
    "/gallery/project-03.jpeg",
    "/gallery/project-08.jpeg",
    "/gallery/project-09.jpeg",
    "/gallery/project-10.jpeg",
    "/gallery/project-11.jpeg",
    "/gallery/project-16.jpeg",
    "/gallery/project-18.jpeg"
  ],
  "ceramics-tiles": [],
  "paints-coatings": [],
  "wood-timber": [],
  "office-facilities": [
    "/gallery/project-04.jpeg",
    "/gallery/project-12.jpeg"
  ],
  "heavy-equipment-parts": [
    "/gallery/project-01.jpeg",
    "/gallery/project-03.jpeg"
  ],
  "chemicals-scientific": [
    "/gallery/project-02.jpeg",
    "/gallery/project-08.jpeg",
    "/gallery/project-18.jpeg"
  ],
  "food-beverage": [],
  "oil-gas-energy": [
    "/gallery/project-07.jpeg",
    "/gallery/project-09.jpeg",
    "/gallery/project-15.jpeg",
    "/gallery/project-16.jpeg"
  ],
  "heavy-rental": [
    "/gallery/project-03.jpeg",
    "/gallery/project-15.jpeg",
    "/gallery/project-16.jpeg"
  ],
  "scrap-waste": [],
  "industrial-spare-parts": [
    "/gallery/project-01.jpeg",
    "/gallery/project-06.jpeg",
    "/gallery/project-09.jpeg",
    "/gallery/project-13.jpeg"
  ],
  "site-facilities": [
    "/gallery/project-04.jpeg",
    "/gallery/project-12.jpeg"
  ]
};

export const galleryPhotos = new Set(galleryImages.map((image) => image.src));
