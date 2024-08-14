// project-1.html
const mediaContainer = document.getElementById('media-container');

async function createImages() {
    document.addEventListener("DOMContentLoaded", async function() {
        document.getElementById('webpage-img-file').addEventListener('mouseenter', function(event) {
            document.getElementById('webpage-img-file').style.opacity = "0.3";
            document.getElementById('webpage-overlay').style.visibility = "visible";
        });
        
        document.getElementById('webpage-img-file').addEventListener('mouseleave', function(event) {
            document.getElementById('webpage-img-file').style.opacity = "0.8";
            document.getElementById('webpage-overlay').style.visibility = "hidden";
        });
        document.getElementById('webpage-overlay').addEventListener('mouseenter', function(event) {
            document.getElementById('webpage-img-file').style.opacity = "0.3";
            document.getElementById('webpage-overlay').style.visibility = "visible";
        });
        document.getElementById('webpage-overlay').addEventListener('mouseleave', function(event) {
            document.getElementById('webpage-img-file').style.opacity = "0.8";
        });

        const directoryPath = '/media/cs16/media-container';
        const files = [
            'cyborg_pres.png',
            'cyborg_question.png',
            'dorothyroberts.png',
            'heavenlybodies.png',
            'heidegger.png',
            'hooks.png',
            'light.png',
            'nelson_presentation.png',
            'postcolonial-comp.png',
            'question.png',
            'scranton.png',
            'tech_humans_presentation.png'
        ];
        files.forEach(file => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            imageContainer.id = `container-${file}`
            const img = document.createElement('img');
            img.classList.add('media-img');
            img.src = directoryPath + '/' + file;
            img.alt = file;
            img.id = file;
            const tape = document.createElement('img');
            tape.classList.add('tape');
            tape.src = '/media/cs16/—Pngtree—tape paper tape paper beige_8285190.png'
            imageContainer.appendChild(img);
            imageContainer.appendChild(tape);
            mediaContainer.appendChild(imageContainer);
        });
        await positionImages();
        let draggableImage = document.querySelectorAll('.image-container');
        draggableImage.forEach(enableDrag);
        // draggableImage.forEach((each_img)=>{
        //     enableDrag(each_img);
        // });
    });
}

async function positionImages() {
    document.getElementById('container-cyborg_pres.png').style.left = '7px';
    document.getElementById('container-cyborg_pres.png').style.top = '202px';
    document.getElementById('cyborg_pres.png').style.width = '330px';

    document.getElementById('container-cyborg_question.png').style.left = '324px';
    document.getElementById('container-cyborg_question.png').style.top = '288px';
    document.getElementById('cyborg_question.png').style.width = '310px';

    document.getElementById('container-dorothyroberts.png').style.left = '258px';
    document.getElementById('container-dorothyroberts.png').style.top = '153px';
    document.getElementById('dorothyroberts.png').style.width = '250px';

    document.getElementById('container-heavenlybodies.png').style.left = '4px';
    document.getElementById('container-heavenlybodies.png').style.top = '10px';
    document.getElementById('heavenlybodies.png').style.width = '290px';

    document.getElementById('container-heidegger.png').style.left = '326px';
    document.getElementById('container-heidegger.png').style.top = '-58px';
    document.getElementById('heidegger.png').style.width = '280px';

    document.getElementById('container-hooks.png').style.left = '59px';
    document.getElementById('container-hooks.png').style.top = '99px';
    document.getElementById('hooks.png').style.width = '240px';

    document.getElementById('container-light.png').style.left = '662px';
    document.getElementById('container-light.png').style.top = '310px';
    document.getElementById('light.png').style.width = '290px';
    document.getElementById('light.png').style.zIndex = '11';

    document.getElementById('container-nelson_presentation.png').style.left = '619px';
    document.getElementById('container-nelson_presentation.png').style.top = '17px';
    document.getElementById('nelson_presentation.png').style.width = '400px';

    document.getElementById('container-postcolonial-comp.png').style.left = '563px';
    document.getElementById('container-postcolonial-comp.png').style.top = '213px';
    document.getElementById('postcolonial-comp.png').style.width = '270px';

    document.getElementById('container-question.png').style.left = '924px';
    document.getElementById('container-question.png').style.top = '24px';
    document.getElementById('question.png').style.width = '280px';
    document.getElementById('question.png').style.zIndex = '12';


    document.getElementById('container-scranton.png').style.left = '1010px';
    document.getElementById('container-scranton.png').style.top = '70px';
    document.getElementById('scranton.png').style.width = '250px';

    document.getElementById('container-tech_humans_presentation.png').style.left = '875px';
    document.getElementById('container-tech_humans_presentation.png').style.top = '192px';
    document.getElementById('tech_humans_presentation.png').style.width = '320px';
}

function enableDrag(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.opacity = '0.5';
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
        element.style.zIndex = element.style.zIndex + 1;
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      element.style.opacity = '0.9';
    }
}

async function createMediaContainer(){
    await createImages();
    // const draggableImage = document.querySelectorAll('.media-img');
    // console.log(draggableImage);
    // draggableImage.forEach((each_img)=>{
    //     enableDrag(each_img);
    // });
}

createMediaContainer();
