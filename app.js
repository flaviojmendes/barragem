$(function(){

  level = [];
  index = [];

    var api = "https://api.import.io/store/connector/77901d68-0a77-41e2-8958-58b6256ed6fd/_query?input=webpage/url:http%3A%2F%2Fwww.adasa.df.gov.br%2Fmonitoramento%2Fniveis-de-reservatorios%2Fhistorico&&_apikey=b6da5c753cc645d29fe8ef428357e9820e923ce8c5a3b5f2644290e6ba3a89490edb7d1f53d728d887afff93e56927f11b0cdcc44dfa9fc776e0c5f21ce07ad4b43bf03aa838da1793c86893a399c674";
    $.getJSON( api, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
      })
        .done(function( data ) {
          $.each( data.results, function( i, item ) {
            if(i == 0) {
              $('.water').animate({
                  height: item.volumetil_number+'%'
              }, 1000);
              $('#qty').text(item.volumetil_number+"%");
              $('.date').html(item.data_value + " às " + item.horrioda_value);

            }
            if(i % 2 == 0) {
              level[i] = item.volumetil_number;
              index[i] = i;
            }
          });

          new Chartist.Line('#levelChart', {
            labels: index,
            series: [
              level
            ]
          }, {
            low: 0,
            high: 100,
            onlyInteger: false,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
              showLabel: false,
              showGrid: false
            }
          });

        });




});
