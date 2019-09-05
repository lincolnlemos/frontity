import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import { homeHandler, anunciantesHandler } from './handlers';

const before = ({ libraries }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);  
};


const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },
  actions: {    
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(homeHandler, anunciantesHandler)
      },
      beforeSSR: before,
      beforeCSR: before
    },    
  }
};

export default marsTheme;
