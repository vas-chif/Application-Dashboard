import html from "../html.js";

export function StatsCard({ title, count }) {
  return html`<article class="stats-card">
    <h3 class="stats-card-title">${title}</h3>
    <div class="stats-card-count">${count}</div>
  </article>`;
}
