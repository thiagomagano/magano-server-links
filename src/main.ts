import "./style.css";

import services from "./data";
import type { Service } from "./types/services.ts";

const links = document.querySelector<HTMLDivElement>("#server-links");

const component = ({
  name,
  port,
  url,
  description,
  logoUrl,
  type,
}: Service) => {
  return `
  
  <article class="card"> 
   
  
    
  
    <a href="${url}" target="_blank" class="flex-group">
      <img class='logo' src=/service-icons/${logoUrl}>
      <h3 class="header">${name}</h3>
    </a>
    
   

    <p>${description}</p>
    <p><a href="${url}" target="_blank">:${port} - ${type} </a></p> 
   
  </article>
  
 
  `;
};

if (links) {
  for (let service of services) {
    links.innerHTML += component(service);
  }
}
