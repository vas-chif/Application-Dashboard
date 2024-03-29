import html from "../html.js";

export function TwoColumns({ children }) {
  return html` <div class="two-columns">${children}</div>
    ;`;
}
