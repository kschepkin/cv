const lang = {
    'ru': 'data_ru.json',
    'en': 'data_en.json'
};

let jsonData;

function loadResumeData(language) {
    fetch(lang[language])
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            renderResume();
        });
}

function renderResume() {
    document.getElementById('photo-img').src = jsonData.photo;
    document.getElementById('fullname').innerText = jsonData.fullname;

    document.getElementById('about-me').innerText = jsonData.aboutMe;
    document.getElementById('education').innerHTML = jsonData.education.map(e => `<p>${e}</p>`).join('');
    document.getElementById('work-experience').innerHTML = jsonData.workExperience.map(e => `<p>${e}</p>`).join('');
    document.getElementById('technologies').innerText = jsonData.technologies;
    document.getElementById('skills').innerText = jsonData.skills;

    document.getElementById('navigation').innerHTML = Object.keys(jsonData).map(key => `<li><a href="#${key}">${key}</a></li>`).join('');
}

document.getElementById('language-selector').addEventListener('change', function() {
    loadResumeData(this.value);
});

loadResumeData('ru');
