// console.log(res);
// const createList = (listLi, typeList = 'ul') => {
//   const ul = document.createElement(typeList);
//   listLi.map((el) => {
//     const li = document.createElement('li');
//     li.innerText = el;
//     ul.appendChild(li);
//   });
//   return ul;
// };

// const getHtmlElement = (id) => {
//   const el = document.querySelector(`#${id}`);
// };

// const getArrayLi = (separator, content) => {
//   let work = content.split(new RegExp(separator, 'g')).filter((el) => el != '');
//   return work;
// };

// lastWork = `- Создание документации, - описание проектов, - создание тест-кейсов, - тестирование, описание багов, - создание автотестов на cypress + js; - сборка, деплой, релиз, - анализ логов в seq`;

// lastWorkList = createList(getArrayLi('- |, - ', lastWork));
// lastWorkDiv = document.querySelector('#lastWork .content');
// lastWorkDiv.appendChild(lastWorkList);

// НОВАЯ ВЕРСИЯ
const workExperienceText = jobs.workExperience;
const workExperienceDiv = document.querySelector('#workExperience');
const createHtmlElement = (div, elementСlass = '', innerContent = '') => {
  const el = document.createElement(div);
  if (elementСlass) {
    el.classList = elementСlass;
  }
  if (innerContent) {
    el.innerHTML = innerContent;
  }
  return el;
};
//Создание левой части
const getLeftPartWorkExperience = (job) => {
  const workPeriodDiv = createHtmlElement('div');
  const p = createHtmlElement('p', '', job.workPeriod);

  workPeriodDiv.appendChild(p);
  return workPeriodDiv;
};

//Создание правой части
const getRightPartWorkExperience = (job) => {
  const div = createHtmlElement('div');
  const companyDiv = createHtmlElement('div');
  const nameCompanyP = createHtmlElement('p', 'allocator', job.companyName);
  const companyUrl = createHtmlElement('p', '', job.companyUrl);

  companyDiv.appendChild(nameCompanyP);
  companyDiv.appendChild(companyUrl);

  const mainInfoDiv = createHtmlElement('div');
  const positionP = createHtmlElement('p', '', job.position);

  const workPerformedP = createHtmlElement('p', '', job.workPerformed);

  mainInfoDiv.appendChild(positionP);
  mainInfoDiv.appendChild(workPerformedP);
  div.appendChild(companyDiv);
  div.appendChild(mainInfoDiv);
  return div;
};

workExperienceText.forEach((job, index) => {
  const mainDiv = createHtmlElement('div', 'blockExperience');

  mainDiv.appendChild(getLeftPartWorkExperience(job));
  mainDiv.appendChild(getRightPartWorkExperience(job));

  workExperienceDiv.appendChild(mainDiv);
});

const keySkills = (element, skillCollection) => {
  const container = document.querySelector('#keySkills');
  const wrapDiv = createHtmlElement(element, 'wrapKeySkills');
  skillCollection.forEach((textContent) => {
    let div = createHtmlElement(element, 'blockKey');
    let span = createHtmlElement('span', '', textContent);
    div.appendChild(span);
    wrapDiv.appendChild(div);
  });
  container.appendChild(wrapDiv);
};
keySkills('div', jobs.keySkills);
const aboutMe = (element, content) => {
  const container = document.querySelector('#aboutMe');
  const textElement = createHtmlElement(element, '', content);
  container.appendChild(textElement);
};
aboutMe('p', jobs.aboutMe);
