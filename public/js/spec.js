$(document).ready(function() {
    // 
    var makeInput = $("#car-name");
    var carContainer = $("#car-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    $(document).on("submit", "#car-form", handleCarrFormSubmit);
    

    function getCars(carData) {
        $.post("/api/cars", carData)
      }

    // Getting the initial list of Authors
    getCars();
  
    // A function for creating an author. Calls getAuthors upon completion
   
  
    // Function for creating a new list row for authors
    function createCarRow(carData) {
      console.log(carData);
      var newCar = $("#carDB");
      newCar.data("car", carData);
      newCar.append("<td>" + carData.id + "</td>");
      newCar.append("<td><a href='/blog?author_id=" + carData.id + "'>Go to Posts</a></td>");
      newCar.append("<td><a href='/cms?author_id=" + carData.id + "'>Create a Post</a></td>");
      return newCar;
    }
  
    // Function
    function getAuthors() {
      $.get("/api/cars", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createAuthorRow(data[i]));
        }
        renderAuthorList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderCarList(rows) {
      carList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        carList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  });
  