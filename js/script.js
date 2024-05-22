document.addEventListener("DOMContentLoaded", () => {
    populateStateSelect();
    populateParkTypeSelect();
    populateMountainSelect();
  });
  
  function populateStateSelect() {
    const stateSelect = document.getElementById("state-select");
    locations.forEach(location => {
      const option = document.createElement("option");
      option.value = location.code;
      option.textContent = location.name;
      stateSelect.appendChild(option);
    });
  }
  
  function populateParkTypeSelect() {
    const typeSelect = document.getElementById("type-select");
    parkTypes.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    });
  }
  
  function populateMountainSelect() {
    const mountainSelect = document.getElementById("mountain-select");
    mountains.forEach(mountain => {
      const option = document.createElement("option");
      option.value = mountain.name;
      option.textContent = mountain.name;
      mountainSelect.appendChild(option);
    });
  }
  
  function searchParks() {
    const state = document.getElementById("state-select").value;
    const type = document.getElementById("type-select").value;
    const resultsDiv = document.getElementById("results");
  
    const results = nationalParks.filter(park => 
      (state === "" || park.state === state) &&
      (type === "" || park.type === type)
    );
  
    resultsDiv.innerHTML = "";
    if (results.length > 0) {
      results.forEach(park =>
  