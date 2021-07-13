$(function() {





    var sendBtn = document.getElementById('See details');
    debugger;

    //$("#exampleModal").modal('hide');
    
    $( "#see-details" ).click(function(event) {


       
       
        debugger;
        var idval = $(this).val();

        window.location.href = "get_camp_data.html?id="+idval;
    })

   
        
})


//     var sendBtn = document.getElementById('Cancel order');
//     debugger;

   
    
//     $( "#cancel-camp" ).click(function(event) {


       
   
//         debugger;
//         var idval = $(this).val();

//         //$("#exampleModal").modal('show');

//         var data = {id:228}
    

//             $.ajax({
//                 type: 'POST',
//                 contentType: 'application/json',
//                 url: 'http://127.0.0.1:8080/cancelcamp',
//                 data:  JSON.stringify(data),
//                 dataType: "json",
//                 headers: {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin" : "*",
//                 "Access-Control-Allow-Methods": 'PUT, GET, POST, DELETE, OPTIONS',
//                 "Access-Control-Allow-Headers": 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
               
//                 }

//                 }).done(function(response) {

//                 debugger;

                

//                     debugger;
//                     console.log(response);
//                     event.preventDefault();
                    
//                     setTimeout(function() {}, 3000);
//                 }).fail(function(response) {
//                     debugger;
//                     console.log(response);
//                 });

//                 debugger;
//     });

// });
        
