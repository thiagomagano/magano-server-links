import "./style.css";

import services from "./data";
import type { Service } from "./types/services.ts";

const links = document.querySelector<HTMLDivElement>("#server-links");

const SERVER_NAME = "magano-server";

const component = ({ name, port, description, logoUrl, type }: Service) => {
  return `
  
  <article class="card"> 
   
  <a href="http://${SERVER_NAME}:${port}" target="_blank">
    <div class="flex-group">
    
    <img class='logo' src=/service-icons/${logoUrl}>${name}
    
    </div>
    <p>${description}</p>
    </a> 
   
  </article>
  
 
  `;
};

for (let service of services) {
  links.innerHTML += component(service);
}
