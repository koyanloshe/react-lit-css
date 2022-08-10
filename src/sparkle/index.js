import { LitElement, html } from "lit";
import { style } from "./style.js";

class SparkleElement extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    `;
  }
}

customElements.define("sparkle-element", SparkleElement);
