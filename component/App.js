import html from "../html.js";
import map from "../map.js";
import { LocationCard } from "./LocationCard.js";
import { PlaningCard } from "./PlanningCard.js";
import { TwoColumns } from "./TwoColumns.js";
import { StatsCard } from "./StatsCard.js";
import { WeeklyChart } from "./WeeklyChart.js";

//putting all in innerHTML, complet with the syle and add the 4 card
export function App({ loactionData, planningData, statsData, weeklyData }) {
  let locationCardChildren = map(loactionData, (item) => LocationCard(item));
  let planingCardChildren = map(planningData, (item) => PlaningCard(item));
  let statsDataChildren = map(statsData, (item) => StatsCard(item));

  return html`
    <div class="app">
      <main>
        <div class="margin-bottom: 20px;">
          ${TwoColumns({ children: locationCardChildren })}
        </div>
        ${TwoColumns({ children: planingCardChildren })}
      </main>
      <aside>
        <div class="margin-bottom: 20px;">
          ${TwoColumns({ children: statsDataChildren })}
        </div>
        ${WeeklyChart({ values: weeklyData })}
      </aside>
    </div>
  `;
}
