import type { Service } from "./types/services";

const SERVER_NAME = "magano-server";

const services: Array<Service> = [
  {
    name: "Pi-Hole",
    port: 80,
    url: `http://${SERVER_NAME}:80/admin`,
    description: "DNS Server, anti AD's",
    logoUrl: "pihole.svg",
    type: "Nativo",
  },
  {
    name: "Me Pesei App",
    port: 3000,
    url: `http://${SERVER_NAME}:3000`,
    description: "Controlar o peso diariamente",
    logoUrl: "mepesei.svg",
    type: "App",
  },
  {
    name: "Flex",
    port: 32400,
    url: `http://${SERVER_NAME}:32400`,
    description: "Private Netflix App",
    logoUrl: "plex.svg",
    type: "Docker",
  },
  {
    name: "Sonarr",
    port: 8787,
    url: `http://${SERVER_NAME}:8787`,
    description: "Catalogo de Séries",
    logoUrl: "sonarr.svg",
    type: "Docker",
  },

  {
    name: "Qbittorrent",
    port: 8080,
    url: `http://${SERVER_NAME}:8080`,
    description: "Baixa as coisa",
    logoUrl: "qbittorrent.svg",
    type: "Docker",
  },
  {
    name: "Calibre",
    port: 8081,
    url: `http://${SERVER_NAME}:8081`,
    description: "Bliblioteca de Livros",
    logoUrl: "calibre.svg",
    type: "Docker",
  },
  {
    name: "Radarr",
    port: 7878,
    url: `http://${SERVER_NAME}:7878`,
    description: "Catalogo de Filmes",
    logoUrl: "radarr.svg",
    type: "Docker",
  },
  {
    name: "Overseerr",
    port: 5055,
    url: `http://${SERVER_NAME}:5055`,
    description: "Achar Filmes e Series",
    logoUrl: "overseerr.svg",
    type: "Docker",
  },
  {
    name: "Prowlarr",
    port: 9696,
    url: `http://${SERVER_NAME}:9696`,
    description: "Indexador de Torrents",
    logoUrl: "prowlarr.svg",
    type: "Docker",
  },
  {
    name: "Bazarr",
    port: 6767,
    url: `http://${SERVER_NAME}:6767`,
    description: "Legendas",
    logoUrl: "bazarr.svg",
    type: "Docker",
  },
  {
    name: "Jackett",
    port: 9117,
    url: `http://${SERVER_NAME}:9117`,
    description: "Indexador Manual de Torrents",
    logoUrl: "jackett.svg",
    type: "Docker",
  },
  {
    name: "Portainer",
    port: 9443,
    url: `https://${SERVER_NAME}:9443`,
    description: "Visualizador de Containers",
    logoUrl: "portainer.svg",
    type: "Docker",
  },
  {
    name: "Syncthing",
    port: 8384,
    url: `http://${SERVER_NAME}:8384`,
    description: "Sincronizador de Pastas",
    logoUrl: "syncthing.svg",
    type: "Docker",
  },
];

export default services;
