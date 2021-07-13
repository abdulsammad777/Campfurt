// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();



$(function() {








 
      debugger;

      
      var token = localStorage.getItem("jwt_token");

      var queryString = window.location.search;
      urlParams = new URLSearchParams(queryString);

      var campid = urlParams.get('campid')

      var idval = $(this).val();

     

      var data = {id:campid};
       header_token = "Bearer "+ token


      
      $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'http://127.0.0.1:8080/getcamp',
         headers:{
                "Authorization":  header_token,"Content-Type": "application/json"
            },
        data:  JSON.stringify(data),
        dataType: "json",
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
        "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
       
        }

        }).done(function(response) {
          debugger;

        
        

          for(var key in response) {
          
            debugger;

          // Do something with the list.
        
            // Do something with each key.
          
          
            // multiply value times 2

            if(key == "d_image_1" || key == "d_image_2"||key == "d_image_4"||key == "d_image_3")
            {
              markup = ` <tr>         
              <td>`+key+`</td>
              <td><img src=`+response[key]+`" alt="" border=3 height=100 width=100></img></td>
              </tr>`;

            }
            else
            {
              markup = ` <tr>         
              <td>`+key+`</td>
              <td>`+response[key]+`</td>
              </tr>`;
            }
  
            tableBody = $("table tbody") ;


            tableBody.append(markup) ;


          }

          debugger;

        
     

      


            debugger;
            console.log(response);
            event.preventDefault();
            
            setTimeout(function() {}, 3000);
        }).fail(function(response) {
            debugger;
            console.log(response);
        });



         

              debugger;


});
