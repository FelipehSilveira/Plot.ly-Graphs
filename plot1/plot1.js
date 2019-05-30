function getData() {
                return Math.random();
            }  

            Plotly.plot('chart',[{
                //x:[getData()],
                y:[getData()],
                type:'line'
            

            }]);
            
            var cnt = 0;
            setInterval(function(){
                Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
                cnt++;
                if(cnt > 200) {
                    Plotly.relayout('chart',{
                        xaxis: {
                            range: [cnt-200,cnt]
                        }
                    });
                }
            },15);