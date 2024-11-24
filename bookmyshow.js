
function enterApp() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 1: Entered BookMyShow App.");
        resolve("Date Selected");
      }, 1000);
    });
  }
  

  function selectDate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 2: Date selected.");
        resolve("Theatre Selected");
      }, 1000);
    });
  }
  

  function selectTheatre() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 3: Theatre selected.");
        resolve("Movie Selected");
      }, 1000);
    });
  }
  

  function selectMovie() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 4: Movie selected.");
        resolve("Seat Selected");
      }, 1000);
    });
  }
  

  function selectSeat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 5: Seat selected.");
        resolve("Redirect to Payment");
      }, 1000);
    });
  }
  
  function goToPhonePe() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 6: Redirecting to PhonePe...");
        resolve("Payment Initiated");
      }, 1000);
    });
  }
  
  function makePayment() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 7: Payment Successful through PhonePe.");
        resolve("Ticket Booked");
      }, 1000);
    });
  }
  
  enterApp()
    .then(result => {
      alert(result); 
      return selectDate();
    })
    .then(result => {
      alert(result); 
      return selectTheatre();
    })
    .then(result => {
      alert(result); 
      return selectMovie();
    })
    .then(result => {
      alert(result); 
      return selectSeat();
    })
    .then(result => {
      alert(result); 
      return goToPhonePe();
    })
    .then(result => {
      alert(result); 
      return makePayment();
    })
    .then(result => {
      alert(result); 
    })
    .catch(error => {
      console.error("Error during booking process:", error);
    });
  