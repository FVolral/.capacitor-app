import { SplashScreen } from "@capacitor/splash-screen";
import { FilePicker } from '@capawesome/capacitor-file-picker';
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
        <main></main>
      `;
    }

    async readBarcodeFromImage () {
      const { files } = await FilePicker.pickImages({ multiple: false });
      const path = files[0].path

      if (!path) {
        console.error('no path')
        return
      }

      const { barcodes } = await BarcodeScanner.readBarcodesFromImage({
        path,
        formats: ['CODE_128']
      });
      alert(`barcodes: ${JSON.stringify(barcodes)}`)
    }

    async connectedCallback() {
      document.getElementById('open-image').addEventListener('click', async () => {
        await this.readBarcodeFromImage()
      })
    }
  },
);
