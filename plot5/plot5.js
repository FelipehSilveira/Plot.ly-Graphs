 var trace1 = {
        x: [1, 2, 3, 4],
        y: [0, 2, 3, 5],
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'none',
        name: 'Linha 1'
      };

      var trace2 = {
        x: [1, 2, 3, 4],
        y: [3, 5, 1, 7],
        fill: 'tonexty',
        type: 'scatter',
        mode: 'none',
        name: 'Linha 2'
      };

      var layout = {
        title: 'Gráfico sobreposto '
      };

      var data = [trace1, trace2];

      Plotly.newPlot('chart', data, layout);
