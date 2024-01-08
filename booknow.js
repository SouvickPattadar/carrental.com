// JavaScript Document

(function($){
 "use strict";
  

    $(document).ready(function(){

      

     $("#Round-trip").on('click' , function(){

     if($(this).is(":checked")){
       $("#Roundtrip-form").css("display" , "block");
       $("#oneWay-form").css("display" , "none");
     }

     else{
       $("#Roundtrip-form").css("display" , "none");
       $("#oneWay-form").css("display" , "block");
     }

     });


      $("#One-way").on('click' , function(){

     if($(this).is(":checked")){
       $("#Roundtrip-form").css("display" , "none");
       $("#oneWay-form").css("display" , "block");
     }

     else{
       $("#Roundtrip-form").css("display" , "block");
       $("#oneWay-form").css("display" , "none");
     }

     });


      // top tour package   
    $('.tours-details .tour-type-name').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tours-details .tour-type-name').removeClass('current');
    $('.tours-details .tab-content1').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });


     });
  
})(jQuery); 


// Define the available tour packages for each destination
  const tourPackages = {
    DARJEELING: [
      "Best Of Darjeeling Tour",
      "Mayfair Darjeeling Tour",
      "Darjeeling and Sikkim Tour",
      "Discover Eastern Himalaya"
    ],
    SIKKIM: [
      "Blissfull Sikkim Pelling Tour",
      "Eastern Delight Sikkim",
      "Darjeeling and Sikkim Tour",
      "Discover Eastern Himalaya"
    ],
    BHUTAN: [
      "5Night/6Days Bhutan Tour",
      "Explore Bhutan Tour",
      "Best of Bhutan Tour"
    ],
    DOOARS: [
      "Explore Dooars",
      "Beautiful Dooars Tour",
      "Dooars Nature Tour"
    ]
  };
  


const destinationSelect = document.getElementById("TourPackageDestination");
  const packageSelect = document.getElementById("selectTourPackage");
  
  destinationSelect.addEventListener("change", function () {
    const selectedDestination = this.value;
    packageSelect.innerHTML = ""; // Clear previous options
  
    if (selectedDestination !== "") {
      const packages = tourPackages[selectedDestination];
      for (const package of packages) {
        const option = document.createElement("option");
        option.value = package;
        option.textContent = package;
        packageSelect.appendChild(option);
      }
    }
  });




