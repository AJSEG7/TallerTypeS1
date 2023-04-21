import { Serie } from './serie.js'
import { series } from './data.js'

const seriesTbody: HTMLElement = document.getElementById('series_data')!;

renderSeriesInTable(series);


function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td>${s.name}</td>
                               <td>${s.platform}</td>
                               <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
  });
}
