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
            // nextBtn.setAttribute("type", "submit")
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
        steper.forEach((c, index) => {
            if (index <= currentStep) {
                c.classList.add("bg-blue-600", "text-white");
                c.classList.remove("bg-gray-300", "text-gray-700");
            } else {
                c.classList.add("bg-gray-300", "text-gray-700");
                c.classList.remove("bg-blue-600", "text-white");
            }
        });
        const progresspercent = ((currentStep + 1) / (steps.length)) * 100;
        progress.style.width = progresspercent + "%";
    }
    //Regex
    const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const regexPhone = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
    const regexPostal = /^\d{4,8}$/;
    const regexName = /^[a-zA-Z\s]+$/;



    function validatstep1() {
        if (currentStep === 0) {
            const firstName = document.getElementById("firstName").value.trim();
            const familyName = document.getElementById("familyName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const postalcode = document.getElementById("postalCode").value.trim();

            if (!firstName || !familyName || !email || !phone) {
                alert("fill the required fieldthanks");
                return false;
            }
            if (!regexName.test(firstName)) {
                alert("first name invalid");
                return false;
            }
            if (!regexName.test(familyName)) {
                alert("Invalid family name");
                return false;
            }

            if (!regexEmail.test(email)) {
                alert("Invalid email address");
                return false;
            }

            if (!regexPhone.test(phone)) {
                alert("Invalid phone number ");
                return false;
            }
            if (!regexPostal.test(postalcode)) {
                alert("Invalid postal codee. ");
                return false;
            }
            return true;
        }
    }

    function validatstep2() {
        if (currentStep === 1) {
            const schoolName = document.getElementById("schoolName").value.trim();
            const schollocation = document.getElementById("schoolLocation").value.trim();
            const datestart = document.getElementById("startdate").value.trim();
            const degree = document.getElementById("degree").value.trim();

            if (!schoolName || !schollocation || !datestart || !degree) {
                alert("fill the required fieldthanks");
                return false;
            }
            if (!regexName.test(schoolName)) {
                alert("school name name invalid");
                return false;
            }
            if (!regexName.test(schollocation)) {
                alert("Invalid school location");
                return false;
            }


            if (!regexName.test(degree)) {
                alert("Invalid degree ");
                return false;
            }

            return true;
        }

    }

    function validatstep3() {
        if (currentStep === 1) {
            const schoolName = document.getElementById("schoolName").value.trim();
            const schollocation = document.getElementById("schoolLocation").value.trim();
            const datestart = document.getElementById("startdate").value.trim();
            const degree = document.getElementById("degree").value.trim();

            if (!schoolName || !schollocation || !datestart || !degree) {
                alert("fill the required fieldthanks");
                return false;
            }
            if (!regexName.test(schoolName)) {
                alert("school name name invalid");
                return false;
            }

            return true;
        }

    }
    // Next bton click
    nextBtn.addEventListener("click", () => {
        if (currentStep === 0) {
            if (!validatstep1()) return;
        }
        if (currentStep === 1) {
            if (!validatstep2()) return;
        }
        //next btn
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep();
        } else {
            alert("Form submited");
        }
    });

    // -------------
    // nextBtn.addEventListener("click", () => {
    //     const emailI = document.getElementById("email").value.trim()
    //     if (emailI == "") {
    //         alert("camp vide")
    //         return
    //     } else if (!regexemail.test(emailI)) {
    //         alert("invalid email")
    //         return
    //     }
    //     if (currentStep < steps.length - 1) {
    //         currentStep++;
    //         showStep();
    //     } else {
    //         alert("Form submited");
    //     }
    // });

    // Previous bton click
    prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep();
        }
    });


    const quill = new Quill('#jobdescription', {
        theme: 'snow',
        placeholder: 'Write the job description...',
        modules: {
            toolbar: [
                [{
                    header: [1, 2, false]
                }],
                ['bold', 'italic', 'underline'],
                [{
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }],
                ['link', 'clean']
            ]
        }
    });



    showStep();


    addFieldBtn.addEventListener("click", () => {
        optionalFields.classList.remove("hidden");
        addFieldBtn.disabled = true;
    })
    removeFieldBtn.addEventListener("click", () => {
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