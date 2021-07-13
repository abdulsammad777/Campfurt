// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();


function viewcamp(id)
  {
  
  
    debugger;
    
    var url = "file:///D:/01PythonMUL/Flask/Campfurt%20project/saif_project_tent/fixed-table-header/get_camp_data.html?campid=" +id;
  
    window.location.href =url;
  }

$(function() {


    debugger;
    var idval = $(this).val();
    var token = localStorage.getItem("jwt_token");
    header_token = "Bearer "+ token
   
  
    var data = {}
  
  
    
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://127.0.0.1:8080/getfulfilledcamps',
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
  
  
        for (var i=1, len=response.length; i<len; i++) {
          // multiply value times 2
          markup = ` <tr>         
          <td>`+response[i][0]+`</td>
          <td>`+response[i][2]+`</td>
          <td>`+response[i][10]+`</td>
          <td>`+response[i][11]+`</td>
          <td>`+response[i][12]+`</td>
          <td>`+response[i][51]+`</td>
          <td><button type="button" id="see-details" value="`+response[i][0]+`" onclick="viewcamp(`+response[i][0]+`)">See details</button></td>
          </tr>`;
  
          tableBody = $("table tbody") ;
  
  
          tableBody.append(markup) ;
  
  
        }
  
        debugger;
  
      
   
  
    
  
  
          debugger;
          console.log(response);
          event.preventDefault();
          
          //setTimeout(function() {}, 3000);
      }).fail(function(response) {
          debugger;
          console.log(response);
      });
  
  
  
       
  
            debugger;
  
    });