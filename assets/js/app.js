    const steps = document.querySelectorAll(".step");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const steper = document.querySelectorAll("[id^='step']");
    const progress = document.getElementById("progress");
    const optionalFields = document.getElementById("optionalFields");
    const addFieldBtn = document.getElementById("addFieldBtn");
    const removeFieldBtn = document.getElementById("removeFieldBtn");
    // const dispal_education = document.getElementById("dispal_education");
    const dispal_education = document.getElementById("dispal_education");
    const saveeducation = document.getElementById("saveeducation");
    // const deleteeducation = document.getElementById("deleteeducation");
    ///skills
    const skillInput = document.getElementById("skillInput");
    const addSkillBtn = document.getElementById("addSkillBtn");
    const skillsList = document.getElementById("skillsList");
    //Cerftifecations
    const certName = document.getElementById("certName");
    const certOrg = document.getElementById("certOrg");
    const certDate = document.getElementById("certDate");
    const addCertBtn = document.getElementById("addCertBtn");
    const certList = document.getElementById("certList");
    //language
    const langname = document.getElementById("langName");
    const langlvl = document.getElementById("langLevel");
    const addlangbtn = document.getElementById("addLangBtn");
    const langlist = document.getElementById("langList");
    //Interest 
    const intersinput = document.getElementById("interestInput");
    const interstbtn = document.getElementById("addInterestBtn");
    const inteerslist = document.getElementById("interestList");

    //Save data objt
    let cvData = {
        personalInfo: {},
        education: [],
        skills: [],
        languages: [],
        certifications: [],
        interests: []
    };
    ///////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////
    //interest
    interstbtn.addEventListener("click", () => {
        const interest = intersinput.value.trim();
        if (!interest) return alert("Please enter an interest");

        const interestdiv = document.createElement("div");
        interestdiv.className = "flex items-center bg-green-100 px-3 py-1 rounded-lg gap-2";
        interestdiv.innerHTML = `
        <span>${interest}</span>
        <button class="text-red-500 font-bold">X</button>
    `;


        interestdiv.querySelector("button").addEventListener("click", () => {
            interestdiv.remove();
        });

        inteerslist.appendChild(interestdiv);

        // Clear input
        intersinput.value = "";
    });





    //Languages
    addlangbtn.addEventListener("click", () => {
        const languagename = langname.value.trim();
        const lvl = langlvl.value;
        if (!languagename)
            return alert("entere languag");
        const langdiv = document.createElement("div");
        langdiv.innerHTML = `
        <div>
        <p>${languagename}</p>
        <p>${lvl}</p>
        </div>
        <button class= "text-red-50 font-bold">X</button>
        `;
        langdiv.querySelector("button").addEventListener("click", () => {
            langdiv.remove();
        });
        langlist.appendChild(langdiv);
        langname.value = "";

    });








    /////////Certifecations 
    addCertBtn.addEventListener("click", () => {
        const name = certName.value.trim();
        const org = certOrg.value.trim();
        const date = certDate.value.trim();
        if (name === "")
            return alert("Please enter at least the certf");
        // msg.style.display = "block"
        const certfdiv = document.createElement("div");
        certfdiv.className = "flex justify-between items-center bg-gray-100 border border-gray-200 p-3 rounded-lg";
        certfdiv.innerHTML = `
        <div>
        <p style ="font-size :15px">${name}</p>
        <p style ="font-size :15px">${org}</p>
        <p style ="font-size :15px">${date}</p>
        </div>
        <button class="text-red-500 font-bold text-lg">X</button>
        `;
        certfdiv.querySelector("button").addEventListener("click", () => {
            certfdiv.remove();

        });
        certList.appendChild(certfdiv);
        certName.value = "";
        certDate.value = "";
        certOrg.value = "";

    })

    //skill btn and list
    addSkillBtn.addEventListener("click", () => {
        const skill = skillInput.value.trim();
        if (skill === "") return;

        // Create skill 
        const skillTag = document.createElement("div");
        skillTag.className = "flex items-center bg-blue-100 text-black px-3  text-lg";
        skillTag.innerHTML = `
        <span>${skill}</span>
        <button class="ml-2 text-red-500 hover:text-red-700 font-bold">⊖</button>
    `;

        // Remove skill on click
        skillTag.querySelector("button").addEventListener("click", () => {
            skillTag.remove();
        });

        skillsList.appendChild(skillTag);
        skillInput.value = "";
    });




    //save my data 
    function savePersonalInfo() {
        cvData.personalInfo = {
            firstName: document.getElementById("firstName").value.trim(),
            familyName: document.getElementById("familyName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            address: document.getElementById("address").value.trim(),
            postalCode: document.getElementById("postalCode").value.trim(),
            cityCountry: document.getElementById("cityCountry").value.trim(),
            placeofbirth: document.getElementById("placeofbirth").value.trim(),
            dateofbirth: document.getElementById("dateofbirth").value.trim(),
            LinkedIn: document.getElementById("LinkedIn").value.trim(),
            Portfolio: document.getElementById("Portfolio").value.trim(),
            social: document.getElementById("social").value.trim()
        };
    }

    function saveEducation() {
        const educationEntry = {
            schoolName: document.getElementById("schoolName").value.trim(),
            schoolLocation: document.getElementById("schoolLocation").value.trim(),
            startDate: document.getElementById("startdate").value.trim(),
            endDate: document.getElementById("endDate").value.trim(),
            degree: document.getElementById("degree").value.trim(),
            graduationYear: document.getElementById("graduationYear").value.trim()
        };

        cvData.education.push(educationEntry);
    }

    function saveExperience() {
        const experienceEntry = {
            companyName: document.getElementById("companyname").value.trim(),
            jobTitle: document.getElementById("jobtitle").value.trim(),
            startDate: document.getElementById("startdate").value.trim(),
            endDate: document.getElementById("endDate").value.trim(),
            jobDescription: quill.root.innerHTML
        };

        cvData.experience.push(experienceEntry);
    }

    function saveSkills() {
        cvData.skills = [];
        const skillElements = skillsList.querySelectorAll("span");
        skillElements.forEach(skill => {
            cvData.skills.push(skill.textContent);
        });
    }

    function saveCertifications() {
        cvData.certifications = [];
        const certElements = certList.querySelectorAll("div > div");
        certElements.forEach(cert => {
            const [name, org, date] = cert.querySelectorAll("p");
            cvData.certifications.push({
                name: name.textContent,
                org: org.textContent,
                date: date.textContent
            });
        });
    }

    function saveLanguages() {
        cvData.languages = [];
        const langElements = langlist.querySelectorAll("div > p");
        for (let i = 0; i < langElements.length; i += 2) {
            cvData.languages.push({
                name: langElements[i].textContent,
                level: langElements[i + 1].textContent
            });
        }
    }

    function saveInterests() {
        cvData.interests = [];
        const interestElements = inteerslist.querySelectorAll("span");
        interestElements.forEach(interest => {
            cvData.interests.push(interest.textContent);
        });
    }

    function saveAllData() {
        savePersonalInfo();
        saveEducation();
        saveExperience();
        saveSkills();
        saveCertifications();
        saveLanguages();
        saveInterests();

        // localStorage
        localStorage.setItem("cvData", JSON.stringify(cvData));
        console.log("CV Data saved:", cvData);
        alert("All CV data saved successfully!");
    }

    const savedData = JSON.parse(localStorage.getItem("cvData"));
    console.log(savedData);


    saveeducation.addEventListener("click", function() {
        const schoolName = document.getElementById("schoolName").value;
        const schoolLocation = document.getElementById("schoolLocation").value;
        const startdate = document.getElementById("startdate").value;
        const endDate = document.getElementById("endDate").value;
        const degree = document.getElementById("degree").value;
        const graduationYear = document.getElementById("graduationYear").value;

        if (!schoolName || !schoolLocation || !startdate || !endDate || !degree || !graduationYear)
            return alert("hhhhhhhhhh");

        const educationInfo = document.createElement("div");
        educationInfo.classList.add('bg-gray-50', 'p-4', 'rounded-lg', 'shadow-md', 'mb-4');

        educationInfo.innerHTML = `
        <h1>Education information </h1>
        <p style ="font-size :15px"> School Name : <span style ="color :red"> ${schoolName}</span></p>
        <p style ="font-size :15px"> Location : <span style ="color :red"> ${schoolLocation}</span></p>
        <p style ="font-size :15px"> Start Date : <span style ="color :red"> ${startdate}</span></p>
        <p style ="font-size :15px"> End Date  : <span style ="color :red"> ${endDate}</span></p>
        <p style ="font-size :15px"> Degree  : <span style ="color :red"> ${degree}</span></p>
        <p style ="font-size :15px"> Graduation year: <span style ="color :red"> ${graduationYear}</span></p>
        <!-- Add Delete Button -->
        <button class="delete-btn bg-red-600 text-white px-4 py-2 rounded-full mt-4">Delete</button>
        `
        dispal_education.appendChild(educationInfo);

        document.getElementById('schoolName').value = '';
        document.getElementById('schoolLocation').value = '';
        document.getElementById('startdate').value = '';
        document.getElementById('endDate').value = '';
        document.getElementById('degree').value = '';
        document.getElementById('graduationYear').value = '';

        const deleteBtn = educationInfo.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
            dispal_education.removeChild(educationInfo);
        })

    });

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
        const progresspercent = ((currentStep + 1) / steps.length) * 100;
        progress.style.width = progresspercent + "%";
    }
    //Regex
    const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const regexPhone = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
    const regexPostal = /^\d{1,8}$/;
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
            if (!validatstep1())
                return;
            savePersonalInfo();
        }
        if (currentStep === 1) {
            if (!validatstep2()) return;
        }
        //next btn
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep();
        } else {
            saveAllData();
            alert("Form submited");
        }
    });
    // saveAllData();
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