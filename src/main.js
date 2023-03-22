import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

/**
 * Returns the URL for an image corresponding to the given icon code.
 *
 * @param {string} iconCode - The icon code in the format "type:name".
 * @returns {string} The URL of the image.
 * @throws {Error} If the icon code is null, undefined, or not in the expected format.
 */
export function getImageFromIconCode(iconCode) {
    if (!iconCode) {
        throw new Error("Icon code is required");
    }

    const [type, name] = iconCode.split(":");
    if (!type || !name) {
        throw new Error("Icon code is not in valid format");
    }

    return `/imgs/${type}/${name.toLowerCase().replace(" ", "_")}.png`;
}

function replaceIcons(string) {
    return string.replace(/(\w+:\w+)/g, (match) => {
      return `<img src="${getImageFromIconCode(match)}" alt="${match}">`;
    });
}

const app = createApp(App)

// Register global functions
app.config.globalProperties.$replaceIcons = replaceIcons
app.config.globalProperties.$getImageFromIconCode = getImageFromIconCode

app.mount('#app')
