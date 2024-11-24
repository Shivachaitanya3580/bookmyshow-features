
function riderComing() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 1: Rider is coming to the pickup point.");
        resolve("Rider reached the pickup point");
      }, 2000);
    });
  }
  

  function riderReached() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 2: Rider reached the pickup point.");
        resolve("Rider picks you up");
      }, 2000); 
    });
  }
  
  function riderPicksUp() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 3: Rider picks you up.");
        resolve("Starting 15 minutes journey");
      }, 2000); 
    });
  }
  

  function journey() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 4: 15 minutes journey in progress.");
        resolve("Rider drops you off");
      }, 15000); 
    });
  }
  

  function riderDropsOff() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Step 5: Rider drops you off at the destination.");
        resolve("Trip completed");
      }, 2000);
    });
  }
  

  riderComing()
    .then(result => {
      alert(result); 
      return riderReached();
    })
    .then(result => {
      alert(result);
      return riderPicksUp();
    })
    .then(result => {
      alert(result);
      return journey();
    })
    .then(result => {
      alert(result); 
      return riderDropsOff();
    })
    .then(result => {
      alert(result); 
    })
    .catch(error => {
      console.error("Error during Uber booking process:", error);
    });
  