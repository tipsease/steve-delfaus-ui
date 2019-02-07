// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro

const people = [
     {   name:   'Olivia' , githubName:   'olivia-osborn'   , job: 'React Frontend'},
     {   name:   'Gill'   , githubName:   'gabada'          , job: 'Landing Page'},
     {   name:   'Wonjae' , githubName:   'verydecent'      , job: 'Scrum Master'},
     {   name:   'Scott'  , githubName:   'sk-vojik'        , job: 'React Frontend'},
     {   name:   'Jonas'  , githubName:   'unknownmonk'     , job: 'Landing Page' },
     {   name:   'Steve'  , githubName:   'heyjuststart'    , job: 'Landing Page' },
     {   name:   'Kai'    , githubName:   'tryingtokeepup'  , job: 'Backend'},
     {   name:   'Angel'  , githubName:   'angelbuenrostro' , job: 'iOS App'},
     {   name:   'Ray'    , githubName:   'raylomeli'       , job: 'Project Manager'}
];

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function htmlToElements(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

class Person {
  constructor(attrs) {
    this.element = htmlToElements('<div class="feature"><a href="https://www.github.com/' +
      `${attrs.githubName}"><img src="https://www.github.com/${attrs.githubName}.png"` +
      `class="employee" alt="${attrs.name}'s github profile picture">` +
      `</a><h3>${attrs.name}</h3><p>${attrs.job}</p></div>`)[0];
  }
}

// Each .middle-row holds 2 people
// So go through people and group them in 2's
const rows = [];
people.reduce((accu, cur) => {
  let thisRow = accu;
  if( thisRow.length === 2) {
    rows.push(thisRow);
    thisRow = [];
  }

  thisRow.push(new Person(cur));
  return thisRow;
}, []);

// Map each row to a string and join it all into one big chunk of html elements
const elements = rows.map(r => {
  const rowElement = htmlToElement('<div class="middle-row"></div>');
  r.forEach(p => rowElement.append(p.element));
  return rowElement;
});


// append them to the middle-content div
const middleContent = document.querySelector('.middle-content');
elements.forEach(e => middleContent.append(e));
