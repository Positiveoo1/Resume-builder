document.querySelectorAll('nav ul li a').forEach(i => {
    i.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('submit').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surName').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const zipCode = document.getElementById('zipCode').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="sex"]:checked').value;
    const languages = document.getElementById('language').value;
    const objective = document.getElementById('objectiveAbout').value;

    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const startDateEdu = document.getElementById('startDate').value;
    const endDateEdu = document.getElementById('endDate').value;

    const projectName = document.getElementById('projectName').value;
    const projectStartDate = document.getElementById('projectStartDate').value;
    const projectEndDate = document.getElementById('projectEndDate').value;
    const projectDescription = document.getElementById('description').value;

    const companyName = document.getElementById('companyName').value;
    const experienceStartDate = document.getElementById('experienceStartDate').value;
    const experienceEndDate = document.getElementById('experienceEndDate').value;
    const experienceDescription = document.getElementById('experienceDescription').value;

    document.getElementById('yourName').textContent = `${name} ${surname}`;
    document.getElementById('mail').textContent = email;
    document.getElementById('contactAddress').textContent = `${address}, ${country}, ${zipCode}`;
    document.getElementById('gender').textContent = gender;
    document.getElementById('language1').textContent = languages;
    document.getElementById('aboutYou').textContent = objective;
    document.getElementById('degreeName').textContent = degree;
    document.getElementById('universityName').textContent = school;
    document.getElementById('startDateEdu').textContent = `Start Date: ${startDateEdu}`;
    document.getElementById('endDateEdu').textContent = `End Date: ${endDateEdu}`;
    document.getElementById('projName').textContent = projectName;
    document.getElementById('projectdesc').textContent = projectDescription;
    document.getElementById('startDateProj').textContent = `Start Date: ${projectStartDate}`;
    document.getElementById('endDateProj').textContent = `End Date: ${projectEndDate}`;
    document.getElementById('compName').textContent = companyName;
    document.getElementById('position').textContent = experienceDescription;
    document.getElementById('startDateExperience').textContent = `Start Date: ${experienceStartDate}`;
    document.getElementById('endDateExperience').textContent = `End Date: ${experienceEndDate}`;
});
