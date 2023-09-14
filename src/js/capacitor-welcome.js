import { SplashScreen } from "@capacitor/splash-screen";

import {
  BarcodeScanner,
} from '@capacitor-mlkit/barcode-scanning';


window.customElements.define(
  "capacitor-welcome",
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
    <main>
      <h1>Capacitor Reproduction</h1>
      <div class="barCode1">
      </div>
      <div class="barCode2">
      </div>
      <button id="open-browser">Open Browser</button>
    </main>
    `;
    }

    async connectedCallback() {
      const imgBarCode1 = document.querySelector("img.barCode1");
      const imgBarCode2 = document.querySelector("img.barCode2");
      const imagePath1 = imgBarCode1.getAttribute("src");
      const imagePath2 = imgBarCode2.getAttribute("src");

      // File Does Not exists:
      const barCode1 = await BarcodeScanner.readBarcodesFromImage({path: imagePath1, formats: 'CODE_128'})
      const barCode2 = await BarcodeScanner.readBarcodesFromImage({path: imagePath2, formats: 'CODE_128'})

      console.assert(barCode1 === '50912735')
      console.assert(barCode2 === '61795020')
    }
  },
);
