import $ from "jquery"

/* jQuery */
/* 
$(".menu-element__link").click(function() {
    const thisElement = $(this);

    const linkHref = thisElement.attr("href");
    const hrefElement = $(linkHref);

    const paddingTop = parseInt(hrefElement.css("padding-top"));
    const menuHeight = $(".header-top").height();

    $([document.documentElement, document.body]).animate ({
        scrollTop: hrefElement.offset()?.top - paddingTop - menuHeight
    }, 1500);

    $(".menu-element__link.active").removeClass('active');
    thisElement.addClass('active');
})*/

/* JS */

const menuHeight = $(".header-top").height();

/* Прилипающая шапка меню */ /*
document.addEventListener("DOMContentLoaded", onDOMReady);

function onDOMReady() {
    window.addEventListener('scroll', onWindowScroll);

    var menu = document.querySelector(".header-top");
    //console.debug(menu);

    function onWindowScroll() {
        if(window.document.scrollingElement.scrollTop > 150){
            menu.classList.add("fixed");
        }
        else { 
            menu.classList.remove("fixed")
        }
    }
}*/

/* Active link after click */
const menuElementLinks = document.querySelectorAll(".menu-element__link");
menuElementLinks.forEach(element => {
    element.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            return;
        }

        const linkHref = this.getAttribute("href");
        document.getElementById(linkHref.replace("#", "")).scrollIntoView({
            behavior: 'smooth'
        });

        changeActiveMenuElement(this);
    });
});

/* Visibility+active card after click in skill section */
const skillsListElement = document.querySelectorAll(".skills-list__element");
skillsListElement.forEach(element => {
    element.addEventListener('click', function() {
        changeActiveSkillsListElement(this);
        let sleNum = this.getAttribute("id");
        console.debug(sleNum);
        switch (sleNum) {
            case 'sle1':
                var scle = document.getElementById("scle1");
                document.querySelector(".skill-card__list-element.visibility").classList.remove('visibility');
                scle.classList.add('visibility');
                break;
            case 'sle2':
                var scle = document.getElementById("scle2");
                document.querySelector(".skill-card__list-element.visibility").classList.remove('visibility');
                scle.classList.add('visibility');
                break;
            case 'sle3':
                var scle = document.getElementById("scle3");
                document.querySelector(".skill-card__list-element.visibility").classList.remove('visibility');
                scle.classList.add('visibility');
                break;
            case 'sle4':
                var scle = document.getElementById("scle4");
                document.querySelector(".skill-card__list-element.visibility").classList.remove('visibility');
                scle.classList.add('visibility');
                break;
            case 'sle5':
                var scle = document.getElementById("scle5");
                document.querySelector(".skill-card__list-element.visibility").classList.remove('visibility');
                scle.classList.add('visibility');
                break;
            case 'sle6':
                var scle = document.getElementById("scle6");
                document.querySelector(".skill-card__list-element.visibility").classList.remove('visibility');
                scle.classList.add('visibility');
                break;
        }

    });
});

/* Active link on scroll to section */
const options = {
    threshold: 0.45
};
const callback = function (entries) {
    entries.forEach(entry => {
        const sectionMenuLink = document.querySelector(`.menu-element__link[href='#${entry.target.id}']`);
        if (entry.isIntersecting && !sectionMenuLink.classList.contains('active')) {
            changeActiveMenuElement(sectionMenuLink);
        }
    });
};
const observer = new IntersectionObserver(callback, options);

document.querySelectorAll(".observer-section").forEach(element => {
    observer.observe(element);
})

// Общие функции

/* Меняет активный элемент в пунктах меню */
function changeActiveMenuElement(element) {
    document.querySelector(".menu-element__link.active").classList.remove('active');
    element.classList.add('active');
}

/* функция для активных карточек в секции навыки */
function changeActiveSkillsListElement(element) {
    document.querySelector(".skills-list__element.SLEactive").classList.remove('SLEactive');
    element.classList.add('SLEactive');
}



















