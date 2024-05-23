
const mountains = [
    {
      name: "Denali",
      state: "AK",
      elevation: "20,310 feet",
      description: "The highest mountain peak in North America.",
    },
    {
      name: "Humphreys Peak",
      state: "AZ",
      elevation: "12,633 feet",
      description: "Highest peak in Arizona, part of the San Francisco Peaks.",
    },
    {
      name: "Mount Whitney",
      state: "CA",
      elevation: "14,505 feet",
      description: "The highest summit in the contiguous United States.",
    },
    {
      name: "Pikes Peak",
      state: "CO",
      elevation: "14,115 feet",
      description: "A prominent mountain in the Front Range of the Rocky Mountains.",
    },
    {
      name: "Mount Elbert",
      state: "CO",
      elevation: "14,440 feet",
      description: "The highest summit of the Rocky Mountains of North America.",
    },
    {
      name: "Mount Katahdin",
      state: "ME",
      elevation: "5,269 feet",
      description: "The highest mountain in Maine and the northern terminus of the Appalachian Trail.",
    },
    {
      name: "Mount Hood",
      state: "OR",
      elevation: "11,240 feet",
      description: "A potentially active stratovolcano in the Cascade Range.",
    },
    {
      name: "Mount Rainier",
      state: "WA",
      elevation: "14,411 feet",
      description: "The highest mountain in Washington and the Cascade Range.",
    },
    {
      name: "Mount Marcy",
      state: "NY",
      elevation: "5,343 feet",
      description: "The highest point in New York State.",
    },
    {
      name: "Mount Mitchell",
      state: "NC",
      elevation: "6,684 feet",
      description: "The highest peak of the Appalachian Mountains.",
    },
    {
      name: "Guadalupe Peak",
      state: "TX",
      elevation: "8,751 feet",
      description: "The highest natural point in Texas.",
    },
    {
      name: "Gannett Peak",
      state: "WY",
      elevation: "13,809 feet",
      description: "The highest peak in Wyoming.",
    },
    {
      name: "Mount Washington",
      state: "NH",
      elevation: "6,288 feet",
      description: "The highest peak in the Northeastern United States.",
    },
    {
      name: "Mauna Kea",
      state: "HI",
      elevation: "13,803 feet",
      description: "A dormant volcano on the island of Hawaii.",
    },
    // Add more mountain data if needed...
];

document.addEventListener("DOMContentLoaded", () => {
  const mountainSelect = document.getElementById("mountain-select");

  mountains.forEach(mountain => {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainSelect.appendChild(option);
  });

  mountainSelect.addEventListener("change", () => {
    const selectedMountain = mountains.find(mountain => mountain.name === mountainSelect.value);
    displayMountainDetails(selectedMountain);
  });
});

function displayMountainDetails(mountain) {
  const mountainDetails = document.getElementById("mountain-details");
  mountainDetails.innerHTML = `
    <h3>${mountain.name}</h3>
    <p><strong>State:</strong> ${mountain.state}</p>
    <p><strong>Elevation:</strong> ${mountain.elevation}</p>
    <p><strong>Description:</strong> ${mountain.description}</p>
  `;
}