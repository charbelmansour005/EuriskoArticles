import {z} from 'zod';

const AuthorSchema = z.object({
  Katherine: z.string(),
  Frank: z.string(),
  Jennifer: z.string(),
  Floyd: z.string(),
  NY: z.string(),
  Tom: z.string(),
  Unknown: z.string(),
  Anahad: z.string(),
  RNS: z.string(),
});

type Author = z.infer<typeof AuthorSchema>;

export const Authors: Author = {
  Katherine: 'By Katherine Schulten',
  Frank: 'By Frank Bruni',
  Jennifer: 'By Jennifer Medina',
  Floyd: 'By Floyd Norris',
  NY: 'By The New York Times',
  Tom: 'By Tom Wicker',
  Unknown: 'Unknown author',
  Anahad: "By ANAHAD O'CONNOR",
  RNS: 'By RELIGION NEWS SERVICE',
};

const urlValid = z.string().url();

const AuthorImagesSchema = z.object({
  Katherine_Pic: urlValid,
  Frank_Pic: urlValid,
  Jennifer_Pic: urlValid,
  Floyd_Pic: urlValid,
  NY_Pic: urlValid,
  Tom_Pic: urlValid,
  Unknown_Pic: urlValid,
  Anahad_Pic: urlValid,
  RNS_Pic: urlValid,
});

type AuthorImage = z.infer<typeof AuthorImagesSchema>;

export const AuthorImages: AuthorImage = {
  Katherine_Pic: `https://i.ibb.co/1mzcbKG/katherine.jpg`,
  Frank_Pic: `https://i.ibb.co/vYdSjq2/frank.png`,
  Jennifer_Pic: `https://i.ibb.co/kgd3Jv8/jennifer.png`,
  Floyd_Pic: `https://i.ibb.co/8Ddx9PQ/floyd.jpg`,
  NY_Pic: `https://i.ibb.co/thGVgxv/unknown.jpg`,
  Tom_Pic: `https://i.ibb.co/k4g2PD7/Screen-Shot-2022-12-18-at-11-04-48-PM.png`,
  Unknown_Pic: `https://i.ibb.co/thGVgxv/unknown.jpg`,
  Anahad_Pic: `https://i.ibb.co/YX9WJkw/anahad.png`,
  RNS_Pic: `https://religionnews.com/wp-content/uploads/2015/11/featuregiftguide.jpg`,
};
