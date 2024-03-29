import html from "../html.js";
import map from "../map.js";

let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function WeeklyChart({ values }) {
  return html` <section class="weekly-chart">
    ${map(values, (percentage, index) => {
      let opac = percentage === 100 ? "1" : "0.2";

      let dayOfWeek = days[index];

      return html`<div class="weekly-chart-item">
        <div class="weekly-chart-item-text">${dayOfWeek}</div>
        <!--  -->
        <div
          class="weekly-chart-item-bar"
          style="height: ${percentage}%; opacity: ${opac};"></div>
      </div>`;
    })}
  </section>`;
}
