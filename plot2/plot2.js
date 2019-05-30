
function getData() {
                return Math.random();
            }  

            for(passo = 1; passo != 13; passo++)
            Plotly.plot('chart',[{
                x:[passo],
                y:[getData()],
                type:'bar',
                name: 'Mês ' +passo
            

            }]);