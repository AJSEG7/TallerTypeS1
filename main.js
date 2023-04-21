"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const seriesTbody = document.getElementById('series_data');
renderSeriesInTable(data_js_1.series);
function renderSeriesInTable(series) {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td>${s.name}</td>
                               <td>${s.platform}</td>
                               <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
