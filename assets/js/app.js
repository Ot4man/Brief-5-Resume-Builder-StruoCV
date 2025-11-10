const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const steper = document.querySelectorAll("[id^='step']");
const progress = document.getElementById("progress");
const optionalFields = document.getElementById("optionalFields");
const addFieldBtn = document.getElementById("addFieldBtn");
const removeFieldBtn = document.getElementById("removeFieldBtn");
// fisrt step
let currentStep = 0;

// Function of shhowing current step
function showStep() {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.remove("hidden"); // show the step
    } else {
      step.classList.add("hidden"); // hide other stepps
    }
  });

  // Disable the pre boton on first step
  prevBtn.disabled = currentStep === 0;

  // Change next btn to  sumbit btn on last step
  if (currentStep === steps.length - 1) {
    nextBtn.textContent = "Submit";
  } else {
    nextBtn.textContent = "Next";
  }
 if (currentStep === 0) {
    // optionalFields.classList.remove("hidden");
    addFieldBtn.classList.remove("hidden");
    removeFieldBtn.classList.remove("hidden");
  } else {
    optionalFields.classList.add("hidden");
    addFieldBtn.classList.add("hidden");
    removeFieldBtn.classList.add("hidden");
  }

//progress bar update just the rounded
// steper.forEach((c, i) => {
//   if (i <= currentStep) {
//     c.classList.add("bg-blue-600", "text-white");
//     c.classList.remove("bg-gray-300", "text-gray-700");
//   } else {
//     c.classList.add("bg-gray-300", "text-gray-700");
//     c.classList.remove("bg-blue-600", "text-white");
//   }
// });
//const progressPercent = ((currentStep + 1) / steps.length) * 100;
  //progress.style.width = progressPercent + "%";
}


// Next bton click
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    alert("Form submited"); 
  }
});

// Previous bton click
prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});


showStep();


addFieldBtn.addEventListener("click",() =>{
  optionalFields.classList.remove("hidden");
  addFieldBtn.disabled = true;
})
removeFieldBtn.addEventListener("click",() =>{
  optionalFields.classList.add("hidden");
  removeFieldBtn.disabled = false;
  addFieldBtn.disabled = false;
})

// additionalinfo();

// function progress (){
//   let currentStep =1;
//   let totalstep =5 ;
  
//     if( currentStep < totalstep){
//       currentStep += 1;
//     }
//     let progresspercent = (currentStep/totalstep) * 100;
//     progress.style.w = progresspercent + "%" ;
//   }
  

