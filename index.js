/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function

themeButton.addEventListener("click", toggleDarkMode)


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const submitRSVP = document.getElementById("rsvp-button");
let count = 3;

const addParticipant = (event, person) => {
  // Step 2: Write your code to manipulate the DOM here
  event.preventDefault();
  /*const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;*/

  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd`;

  const participantsContainer = document.querySelector(".rsvp-participants");
  participantsContainer.appendChild(newParticipant);

  const rsvpCount = document.getElementById("rsvp-count");
  rsvpCount.remove();

  count = count + 1;
  const newCount = document.createElement("p");
  newCount.id = "rsvp-count";
  newCount.textContent = "⭐ " + count + " people have RSVP'd to this event!";

  participantsContainer.appendChild(newCount);



}

// Step 3: Add a click event listener to the submit RSVP button here



/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  const person = {
    name: rsvpInputs[0].value,
    state: rsvpInputs[1].value,
    email: rsvpInputs[2].value,
    phone : rsvpInputs[3].value
  }

  // TODO: Loop through all inputs
  // TODO: Inside loop, validate the value of each input
  for (let i = 0; i < rsvpInputs.length; i++)
  {
    let input = rsvpInputs[i];
    if(input.value.length < 2)
    {
      containsErrors = true;
      input.classList.add("error");
    }
    else
    {
      input.classList.remove("error");
    }
  }

  /*let email = document.getElementById("email")*/
  if(!person.email.includes("@"))
  {
    containsErrors = true;
    email.classList.add("error");
  }
  else
  {
    email.classList.remove("error");
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors == false)
  {
    addParticipant(event, person);
    toggleModal(person);
    for(let i = 0; i < rsvpInputs.length; i++)
    {
      rsvpInputs[i].value = "";
    }

  }
  

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitRSVP.addEventListener("click", validateForm)
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/



/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  /*let modal = 0; // TODO*/
  let modal = document.getElementById("success-modal");
  let modalContent = document.getElementById("modal-text");
  
  // TODO: Update modal display to flex
  modal.style.display = "flex";
  

  // TODO: Update modal text to personalized message
  modalContent.textContent = `Thank's for RSVPing, ${person.name}! We can't wait to see you at the event!`

  let intervalId = setInterval(animateImage, 500)
  // Set modal timeout to 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000);

  
  
}

// TODO: animation variables and animateImage() function
rotateFactor = 0;
let modalImage = document.getElementById("modal-img");
const animateImage = () =>
{
  if(rotateFactor === 0){
    rotateFactor = -10;
  }
  else{
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}




