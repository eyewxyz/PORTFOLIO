/*탭 응용*/
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents= document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
} )




/*다크모드*/
let porfolio = document.querySelector('#portfolio');
let mode = document.querySelector('.mode');
let splash = document.querySelector('.splash')

let darkMode = false;

mode.addEventListener('click', () => {
    darkMode = !darkMode;

    if(darkMode){
        document.documentElement.style.setProperty('--main-color', '#161616');
        document.documentElement.style.setProperty('--secondary-color', '#ded9d9');
        document.documentElement.style.setProperty('--third-color', '#9c9c9c');
        document.documentElement.style.setProperty('--title-color', '#FFFFFF');

        document.documentElement.style.setProperty('--top-shadow-color', '#ffffff0d');
        document.documentElement.style.setProperty('--bottom-shadow-color', '#00000080');
        document.documentElement.style.setProperty('--box-color', '#161616');

        document.documentElement.style.setProperty('--second-top-shadow-color', '#ffffff0d');
        document.documentElement.style.setProperty('--second-bottom-shadow-color', '#00000080');
        
        document.documentElement.style.setProperty('--second-hover-top-shadow-color', '#ffffff0d');
        document.documentElement.style.setProperty('--second-hover-bottom-shadow-color', '#00000080');

        document.documentElement.style.setProperty('--bar-color', '#a19991');
    }else{
        document.documentElement.style.setProperty('--main-color', '#F0F0F0');
        document.documentElement.style.setProperty('--secondary-color', '#ded9d9');
        document.documentElement.style.setProperty('--third-color', '#9c9c9c');
        document.documentElement.style.setProperty('--title-color', '#161616');

        document.documentElement.style.setProperty('--top-shadow-color', '#ffffff99');
        document.documentElement.style.setProperty('--bottom-shadow-color', '#5e687949');
        document.documentElement.style.setProperty('--box-color', '#eeeeee');

        document.documentElement.style.setProperty('--second-top-shadow-color', '#ffffffcc');
        document.documentElement.style.setProperty('--second-bottom-shadow-color', '#00000033');

        document.documentElement.style.setProperty('--second-hover-top-shadow-color', '#ffffffcc');
        document.documentElement.style.setProperty('--second-hover-bottom-shadow-color', '#00000033');
        
        document.documentElement.style.setProperty('--bar-color', '#DBCFC5');
    }
})



/*스플래쉬 응용*/


function loadPage(){
    let html = '';
    let splashTitle = document.querySelector('.splash-title');
    let splashTitleArray = splashTitle.innerText.split('');
    splashTitleArray.forEach(letter => {
        html += `<span>${letter}</span>`
    })
    splashTitle.innerHTML = html;

    [...splashTitle.querySelectorAll('span')].forEach((span, idx) => {
        setTimeout(() => {
            span.style.transform = 'translateY(0px)'
        }, (idx + 1) * 50);
    })

    setTimeout(() => {
        splash.classList.add('active');

        setTimeout(() => {
            splash.style.top = '-100vh';
        }, 50)
    }, 3000)
}



loadPage()


