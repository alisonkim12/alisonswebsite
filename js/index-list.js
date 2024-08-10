const indexData = [
  { year: 2024, project: 'Nature Cam', description: "for the times you want to open up a website and what some critters are up to", tools: 'node.js, Google Geocoding API, maptiler, spaCy, Youtube Data API'},
  { year: 2024, project: 'Trail of Prayers', description: 'computer + my need to make something beautiful = ', tools: 'Flask, UMAP, NumPy, GloVe, scikit-learn' },
  { year: 2024, project: 'Angel of history', description: 'an interactive metaphor for that one famous Walter Benjamin quote', tools: 'matter.js, ml5.js, news API'},
  { year: 2023, project: 'play (with) music', description: 'my first experimentation with d3.js', tools: 'Spotify API, d3.js, NLTK, scikit-learn, jQuery' },
  { year: 2023, project: 'Requiem for a Friend', description: 'an ode to two things I miss from my school', tools: 'javascript' },
  { year: 2023, project: 'Restructuring pedagogical norms in STEM: Towards a socially and ethically conscious approach to Computer Science education', description: 'my undergraduate thesis' },
  { year: 2022, project: 'Swarthmore Marketplace', description: "a full-stack project emulating 'Facebook Marketplace'", tools : 'Flask, Firebase, CSS, HTML'},
  { year: 2021, project: 'CS16: Critical Theory of Technology', description: 'a student led course I co-taught in my CS department about historial, decolonial, queer, feminist, race, and disability centered inquiries into technology' },
  { year: 2021, project: 'resource guides for undocumented students', description: 'a series of community-based efforts to increase education access to undocumented students and organizing for immigrant rights', tools: 'Canva' },
  { year: 2020, project: 'CS Computer Lab energy project', description: "an energy management system for Swarthmore College's computer labs", tools: 'Python, Scapy, subprocess, ssh, Grafana, Z Wave' },
];

function createIndexGrid(){
  const indexMedia = document.getElementById('index-media');
  indexData.forEach((item, index) => {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    const projectTitle = document.createElement('div');
    projectTitle.className = 'project-title';
    const projectLink = document.createElement('a'); 
    projectLink.className = 'project-links'
    projectLink.href = `projects/project-${index+1}.html`; // disable for testing 
    projectLink.innerHTML = item['project'];
    projectTitle.appendChild(projectLink);


    const projectMedia = document.createElement('div');
    projectMedia.className = 'project-media';

    const projectTagContainer = document.createElement('div');
    projectTagContainer.className = 'project-tag-container';

    if (item['tools']) {
      const toolList = item['tools'].split(", ");
      toolList.forEach((tool)=>{
        const toolButton = document.createElement('span');
        toolButton.className = 'project-tags';
        toolButton.innerHTML = tool;
        projectTagContainer.appendChild(toolButton);
      });
    }
    
    const projectDescription = document.createElement('div');
    projectDescription.className = 'project-description';
    projectDescription.innerHTML = item['description'];

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectMedia);
    projectContainer.appendChild(projectTagContainer);
    projectContainer.appendChild(projectDescription);

    indexMedia.appendChild(projectContainer);
  });
}

function createIndexList() {
  const indexList = document.getElementById('index-list'); 
  const indexTable = document.createElement('table');
  indexTable.className = 'index-table';
  indexList.appendChild(indexTable);

  const tbody = document.createElement('tbody');
  tbody.className = 'index-body';
  indexTable.appendChild(tbody);

  indexData.forEach((item, index)=> {
    const row = document.createElement('tr');
    row.setAttribute = ('id', 'index-item-'+index);
    row.className = 'index-item-row';
  
    const td = document.createElement('td');
    td.className = 'project-info-cell';
    const projectName = document.createElement('div'); 
    projectName.className  = 'project-name';
    const projectLink = document.createElement('a'); 
    projectLink.className = 'project-links'
    projectLink.href = `projects/project-${index+1}.html`; // disable for testing 
    projectLink.innerHTML = item['project'];
    projectName.appendChild(projectLink);

    const projectDescription = document.createElement('div'); 
    projectDescription.className  = 'project-description';
    projectDescription.innerHTML = item['description'];
    td.appendChild(projectName);
    td.appendChild(projectDescription);
    if (item['tools']) {
      const toolList = item['tools'].split(", ");
      toolList.forEach((tool)=>{
        const toolButton = document.createElement('span');
        toolButton.className = 'tool-button';
        toolButton.innerHTML = tool;
        td.appendChild(toolButton);
      });
    }
    row.appendChild(td);
    tbody.appendChild(row);
  });
}

createIndexList();
createIndexGrid();

// Filter implementation

const allIndexMedia = document.querySelectorAll('#index-media .project-container');
const allFilterButtons = document.querySelectorAll('.project-filter');
const categoryInfo = {
  'Full-Stack': [0, 1, 3, 6],
  'ML' : [1, 3],
  'Tech-justice': [5,7],
  'For-fun' : [2,4],
  'Immigrant-Rights': [8]
}

function filterMedia(category) {
  const filterButton = document.getElementById(category);
  if (filterButton.classList.contains('selected')) { 
    allIndexMedia.forEach((item, i) => {
      item.classList.remove('hidden');
      // if (categoryInfo[category].includes(i)) {
      //   item.classList.remove('hidden');
      // }
    });
    filterButton.classList.remove('selected');
  } else {
    allFilterButtons.forEach((button)=>{
      button.classList.remove('selected');
    })
    filterButton.classList.add('selected');
    allIndexMedia.forEach((item, i) => {
      if (categoryInfo[category].includes(i)) {
        item.classList.remove('hidden');
      } 
      else {
        item.classList.add('hidden');
      }
    });
  }
}



