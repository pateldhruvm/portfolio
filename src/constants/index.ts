// src/constants/index.ts

export interface TechModel {
  name: string;
  path: string;
  scale: number;
  rotation: [number, number, number];
}

export const techStackIcons: TechModel[] = [
  {
    name: "React Developer",
    path: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    path: "/models/python-transformed.glb",
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    path: "/models/nodejs-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    path: "/models/webgl-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Master",
    path: "/models/git-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
];
