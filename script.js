    var tabledata = [
    {id:1, name:"Via Carota", restaurant_url:"https://viacarota.com", area:"West Village", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/via-carota", available_at:"30 days in advance at 10 AM", days:"30", time: new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:2, name:"The Four Horsemen", restaurant_url:"https://fourhorsemenbk.com", area:"Williamsburg", cuisine:"Wine Bar", platform:"Resy", platform_url:"https://resy.com/cities/ny/the-four-horsemen", available_at:"30 days in advance at 7 AM", days:"30", time:  new Date("1970-01-01T07:00:00-05:00"), time_2:"07:00 AM"},
  {id:3, name:"Carbone", restaurant_url:"https://carbonenewyork.com", area:"Greenwich Village", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/carbone", available_at:"30 days in advance at 10 AM", days:"30", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:4, name:"Lilia", restaurant_url:"https://www.lilianewyork.com", area:"Williamsburg", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/lilia", available_at:"28 days in advance at 10 AM", days:"28", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:5, name:"L'Artusi", restaurant_url:"https://www.lartusi.com", area:"West Village", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/lartusi-ny", available_at:"14 days in advance at 9 AM", days:"14", time:  new Date("1970-01-01T09:00:00-05:00"), time_2:"09:00 AM"},
  {id:6, name:"Zou Zou's", restaurant_url:"https://www.zouzousnyc.com", area:"Hudson Yards", cuisine:"Mediterranean", platform:"Open Table", platform_url:"https://opentable.com/restaurant/profile/1197907", available_at:"21 days in advance at 9 AM", days:"21", time: new Date("1970-01-01T09:00:00-05:00"), time_2:"09:00 AM"},
  {id:7, name:"Laser Wolf", restaurant_url:"https://www.laserwolfbrooklyn.com/", area:"Williamsburg", cuisine:"Israeli", platform:"Resy", platform_url:"https://resy.com/cities/ny/laser-wolf-brooklyn", available_at:"21 days in advance at 10 AM", days:"21", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:8, name:"Semma", restaurant_url:"https://www.semma.nyc", area:"Greenwich Village", cuisine:"South Indian", platform:"Resy", platform_url:"https://resy.com/cities/ny/semma", available_at:"29 days in advance at 12 AM", days:"29", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:9, name:"Au Cheval", restaurant_url:"https://auchevalnyc.com/", area:"Tribeca", cuisine:"American", platform:"Resy", platform_url:"https://resy.com/cities/ny/au-cheval-nyc", available_at:"14 days in advance at 9 AM", days:"14", time: new Date("1970-01-01T09:00:00-05:00"), time_2:"09:00 AM"},
  {id:10, name:"4 Charles Prime Rib", restaurant_url:"https://nycprimerib.com/", area:"West Village", cuisine:"Steakhouse", platform:"Resy", platform_url:"https://resy.com/cities/ny/4-charles-prime-rib", available_at:"21 days in advance at 9 AM", days:"21", time: new Date("1970-01-01T09:00:00-05:00"), time_2:"09:00 AM"},
  {id:11, name:"Buvette", restaurant_url:"https://ilovebuvette.com/", area:"West Village", cuisine:"French", platform:"Resy", platform_url:"https://resy.com/cities/ny/buvette-nyc", available_at:"14 days in advance at 9 AM", days:"14", time: new Date("1970-01-01T09:00:00-05:00"), time_2:"09:00 AM"},
  {id:12, name:"Sadelle's", restaurant_url:"https://www.sadelles.com/", area:"Soho", cuisine:"Brunch", platform:"Resy", platform_url:"https://resy.com/cities/ny/sadelles?date=2023-02-01&seats=2", available_at:"30 days in advance at 10 AM", days:"30", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:13, name:"Gramercy Tavern", restaurant_url:"https://www.gramercytavern.com/", area:"Gramercy Park", cuisine:"American", platform:"Resy", platform_url:"https://resy.com/cities/ny/gramercy-tavern", available_at:"28 days in advance at 12 PM", days:"28", time: new Date("1970-01-01T12:00:00-05:00"), time_2:"12:00 PM"},
  {id:14, name:"I Sodi", restaurant_url:"https://www.isodinyc.com/", area:"West Village", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/i-sodi", available_at:"14 days in advance at 12 AM", days:"14", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:15, name:"Shuka", restaurant_url:"https://www.shukanewyork.com/", area:"Soho", cuisine:"Mediterranean", platform:"Resy", platform_url:"https://resy.com/cities/ny/shuka", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:16, name:"Shukette", restaurant_url:"https://www.shukettenyc.com/", area:"Chelsea", cuisine:"Middle Eastern", platform:"Resy", platform_url:"https://resy.com/cities/ny/shukette", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:17, name:"Dhamaka", restaurant_url:"https://www.dhamaka.nyc/", area:"Lower East Side", cuisine:"Indian", platform:"Resy", platform_url:"https://resy.com/cities/ny/dhamaka", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:18, name:"Rubirosa", restaurant_url:"http://www.rubirosanyc.com/", area:"Nolita", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/rubirosa", available_at:"7 days in advance at 12 AM", days:"7", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:19, name:"Llama San", restaurant_url:"https://www.llamasannyc.com/", area:"West Village", cuisine:"Peruvian", platform:"Resy", platform_url:"https://resy.com/cities/ny/llama-san", available_at:"28 days in advance at 12 AM", days:"28", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:20, name:"Balthazar", restaurant_url:"https://balthazarny.com/", area:"Soho", cuisine:"French", platform:"Resy", platform_url:"https://resy.com/cities/ny/balthazar-nyc", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:21, name:"Adda", restaurant_url:"https://www.addanyc.com/", area:"Long Island City", cuisine:"Indian", platform:"Resy", platform_url:"https://resy.com/cities/ny/adda", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:22, name:"Masalawala & Sons", restaurant_url:"http://www.masalawala.com/", area:"Park Slope", cuisine:"Indian", platform:"Resy", platform_url:"https://resy.com/cities/ny/masalawala", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:23, name:"Tatiana", restaurant_url:"https://www.tatiananyc.com/", area:"Upper West Side", cuisine:"Afro-Caribbean", platform:"Resy", platform_url:"https://resy.com/cities/ny/tatiana", available_at:"28 days in advance at 12 PM", days:"28", time: new Date("1970-01-01T12:00:00-05:00"), time_2:"12:00 PM"},
  {id:24, name:"Torrisi Bar & Restaurant", restaurant_url:"https://www.torrisinyc.com/", area:"Nolita", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/torrisi", available_at:"30 days in advance at 10 AM", days:"30", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:25, name:"Claud", restaurant_url:"https://www.claudnyc.com/", area:"East Village", cuisine:"European", platform:"Resy", platform_url:"https://resy.com/cities/ny/claud", available_at:"14 days in advance at 12 AM", days:"14", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:26, name:"Thai Diner", restaurant_url:"https://www.thaidiner.com/", area:"Nolita", cuisine:"Thai", platform:"Tock", platform_url:"https://www.exploretock.com/thaidiner", available_at:"6 days in advance at 12 AM", days:"6", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:27, name:"Rezdora", restaurant_url:"https://rezdora.nyc/", area:"Flatiron", cuisine:"Pasta", platform:"Resy", platform_url:"https://resy.com/cities/ny/rezdora", available_at:"21 days in advance at 12 AM", days:"21", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"},
  {id:28, name:"Don Angie", restaurant_url:"https://www.donangie.com/", area:"West Village", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/don-angie", available_at:"7 days in advance at 9 AM", days:"7", time: new Date("1970-01-01T09:00:00-05:00"), time_2:"09:00 AM"},
  {id:29, name:"Gage & Tollner", restaurant_url:"https://www.gageandtollner.com/", area:"Brooklyn", cuisine:"American", platform:"Resy", platform_url:"https://resy.com/cities/ny/gage-and-tollner", available_at:"28 days in advance at 10 AM", days:"28", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:30, name:"Ci Siamo", restaurant_url:"https://www.cisiamonyc.com/", area:"Hudson Yards", cuisine:"Italian", platform:"Resy", platform_url:"https://resy.com/cities/ny/ci-siamo", available_at:"28 days in advance at 12 PM", days:"28", time: new Date("1970-01-01T12:00:00-05:00"), time_2:"12:00 PM"},
  {id:31, name:"Cote", restaurant_url:"http://cotenyc.com/", area:"Chelsea", cuisine:"Korean", platform:"Resy", platform_url:"https://resy.com/cities/ny/cote", available_at:"30 days in advance at 10 AM", days:"30", time: new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"},
  {id:32, name:"Bonnie's", restaurant_url:"https://www.bonniesbrooklyn.com/", area:"Cantonese", cuisine:"Williamsburg", platform:"Resy", platform_url:"https://resy.com/cities/ny/bonnies", available_at:"13 days in advance at 10 AM", days:"13", time:  new Date("1970-01-01T10:00:00-05:00"), time_2:"10:00 AM"}, 
  {id:33, name:"Raoul's", restaurant_url:"http://www.raouls.com/", area:"Soho", cuisine:"French", platform:"Resy", platform_url:"https://resy.com/cities/ny/raoulsrestaurant", available_at:"30 days in advance at 12 AM", days:"30", time: new Date("1970-01-01T00:00:00-05:00"), time_2:"12:00 AM"}
  ]; 


    var customMutator = function(value, data, type, params, component){
    //value - original value of the cell
    //data - the data for the row
    //type - the type of mutation occurring  (data|edit)
    //params - the mutatorParams object from the column definition
    //component - when the "type" argument is "edit", this contains the cell component for the edited cell, otherwise it is the column component for the column
    date = new Date();

    // Add time to base date 
    var reservationDate = new Date(date);
    reservationDate.setHours(data.time.getHours());
    reservationDate.setMinutes(data.time.getMinutes());
  
    var newDate = new Date(reservationDate);
    newDate.setDate(newDate.getDate() + parseInt(data.days));
   return newDate.toLocaleDateString('en-US');

};

  

    var table = new Tabulator("#restaurant-data", {
      data:tabledata, //load initial data into table
      layout:"fitDataStretch",
      responsiveLayout:"collapse",
      columns:[ //Define Table Columns
        {title:"Restaurant", field:"name", formatter:"link", sorter:"string", width:"200", formatterParams:{
                labelField:"name",
                urlField:"restaurant_url",
                target:"_blank",
            }},
        {title:"Neighborhood", field:"area", sorter:"string", hozAlign:"left"},
        {title:"Cuisine", field:"cuisine", sorter:"string"},
        {title:"Platform", field:"platform", formatter:"link", sorter:"string", hozAlign:"center", formatterParams:{
                labelField:"platform",
                urlField:"platform_url",
                target:"_blank",
            }},
        {title:"Reservation Details", field:"available_at", sorter:"string", hozAlign:"center", width:"250"},
        {title:"Days in Advance", field:"days", sorter:"number", hozAlign:"center"},
        {title:"Time (EST)", field:"time_2", hozAlign:"center", sorter:"string"},
  /*{title: "Time (Formatted)", field: "time", sorter: "datetime", hozAlign: "center", formatter: "datetime", formatterParams: {
    outputFormat: "HH:mm A",
    timezone: "America/New_York",
}}, */
        {title:"Reservations Open Through", field:"openres", sorter:"string", hozAlign:"center", width:"300", mutator:customMutator},
      ],
    });

    tabledata.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

// Populate restaurant select options
const select = document.getElementById("restaurantSelect");
tabledata.forEach(r => {
  const option = document.createElement("option");
  option.value = r.name;
  option.text = r.name;
  select.appendChild(option);
});

// Handle form submit
const form = document.querySelector("form");
const result = document.getElementById("result");

document.getElementById("submit").addEventListener("click", () => {
  
  const restaurant = form.restaurantSelect.value;
  const desiredReservationDate = new Date(form.dateInput.value);
  desiredReservationDate.setHours(desiredReservationDate.getHours() + 5); // adjust for NYC time zone

  const restaurantData = tabledata.find(r => r.name === restaurant);
  
  if (!restaurantData) {
    result.textContent = "Restaurant not found.";
    return;
  }

  if (!Date.parse(desiredReservationDate)){
    result.textContent = "Please enter a valid date.";
    return;
  }

  const bookingDate = getBookingDate(desiredReservationDate, restaurantData);
  const today = new Date();

  if (today > bookingDate) {
    result.innerText = `>> Reservations at ${restaurantData.name} are already open for your desired date!`;
  } else {
    result.innerText = `>> Reservations for ${restaurantData.name} will open on ${bookingDate.toDateString()} at ${restaurantData.time_2} Eastern`; 
  }

});

function getBookingDate(desiredReservationDate, restaurant) {
  const bookingDate = new Date(desiredReservationDate);

  bookingDate.setDate(desiredReservationDate.getDate() - restaurant.days);

  return bookingDate; 
}