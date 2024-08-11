import React, { useState, Component } from 'react'

export class MobileSkillsSection extends Component  {
    /*
    var containers;
    function initDrawers() {
        // Get the containing elements
        containers = document.querySelectorAll(".container");
        setHeights();
        wireUpTriggers();
        window.addEventListener("resize", setHeights);
    }

    window.addEventListener("load", initDrawers);

    function setHeights() {
        containers.forEach(container => {
            // Get content
            let content = container.querySelector(".content");
            // Needed if this is being fired after a resize
            content.removeAttribute("aria-hidden");
            // Height of content to show/hide
            let heightOfContent = content.getBoundingClientRect().height;
            // Set a CSS custom property with the height of content
            container.style.setProperty("--containerHeight", `${heightOfContent}px`);
            // Once height is read and set
            setTimeout(e => {
                container.classList.add("height-is-set");
                content.setAttribute("aria-hidden", "true");
            }, 0);
        });
    }

    function wireUpTriggers() {
        containers.forEach(container => {
            // Get each trigger element
            let btn = container.querySelector(".trigger");
            // Get content
            let content = container.querySelector(".content");
            btn.addEventListener("click", () => {
                container.setAttribute(
                    "data-drawer-showing",
                    container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
                );
                content.setAttribute(
                    "aria-hidden",
                    content.getAttribute("aria-hidden") === "true" ? "false" : "true"
                );
            });
        });
    }*/

/*                    <div className="skills-wrapper">
                        <div className="skills-list left">
                            <div className="skills-list__row">
                                <div className="skills-list__element" id="sle1" role="button" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z" fill="#e44d26"/><path d="M25.337 26.964l2.197-24.608H16v27.197z" fill="#f16529"/><path d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z" fill="#ebebeb"/><path d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z" fill="#fff"/></svg>
                                    <span className="skills-list__title">Html</span>
                                </div>
                            </div>
                        </div>
                    </div> */
    componentDidMount() {
        var dropbtns = document.querySelectorAll(".dropbtn");
        var skillsListLis = document.querySelector(".skills-list__li");
    }
        /*
        dropbtns.forEach(dropbtn => {
            classList.toggle('lookingAt');
            dropbtn.addEventListener("click", (event) => {
                const waslookingAt = dropbtn.classList.contains('lookingAt');
                var dpp = dropbtn.parentNode;
                var lookingElement = document.querySelector(".skills-list__li.lookingAt");
                var focusedElement = document.querySelector(".skills-list__dropdown-element.focusedElement");
                dropbtn.classList.toggle('lookingAt');
                
                if (lookingElement!=null) {
                    lookingElement.classList.remove('lookingAt');
                    focusedElement.classList.remove('focusedElement')
                } else if (dropbtn === lookingElement) {
                    dropbtn.classList.remove('lookingAt');
                    focusedElement.classList.remove('focusedElement');
                }
                if (waslookingAt) {
                    dpp.classList.remove('lookingAt');
                    focusedElement.classList.remove('focusedElement');
                    console.debug("сработал иф");
                }
                else {
                    dpp.classList.add('lookingAt');
                    console.debug(focusedElement);
                    dropbtn.nextSibling.classList.add('focusedElement');
                    console.debug("сработал елсе");
                }
                     .dropbtn:nth-of-type(1):focus ~ .skills-list__dropdown-element,
    .dropbtn:nth-of-type(2):focus ~ .skills-list__dropdown-element,
    .dropbtn:nth-of-type(3):focus ~ .skills-list__dropdown-element,
    .dropbtn:nth-of-type(4):focus ~ .skills-list__dropdown-element,
    .dropbtn:nth-of-type(5):focus ~ .skills-list__dropdown-element,
    .dropbtn:nth-of-type(6):focus ~ .skills-list__dropdown-element {
        display: inline-block;
        max-height: 350px;
        margin-bottom: 350px;
    }
            })
        });
    }*/
    render() {
        return (
            <section className="skills section-peach-pink  observer-section" id="skills">
                    <h2 className="second-title">Навыки</h2>
                    
                    <p className="section-description">Все оценки субъективны и показывают уровень, который как
                    по мне, необходим для работы.</p>

                    <input type="radio" name="skills-filter-radio" id="skills-all" defaultChecked/>
                    <div className="skills-filters block-center">
                        <label for="skills-all" role="button" className="skill-filter">Все</label>
                        <label for="skills-html" role="button" className="skill-filter">Html</label>
                        <label for="skills-php" role="button" className="skill-filter">Php</label>
                        <label for="skills-js" role="button" className="skill-filter">Js</label>
                        <label for="skills-database" role="button" className="skill-filter">Database</label>
                        <label for="skills-other" role="button" className="skill-filter">Other</label>
                    </div>

                    <div className="skills-list">
                        <ul className="skills-list__ul">
                            <li className="skills-list__li">

                                    <button className="dropbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z" fill="#e44d26"/><path d="M25.337 26.964l2.197-24.608H16v27.197z" fill="#f16529"/><path d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z" fill="#ebebeb"/><path d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z" fill="#fff"/></svg>
                                        <span className="skills-list__title">Html</span>
                                    </button>
                                    <div className="skills-list__dropdown-element" id="sle1" role="button" >
                                            <div className="skill-card__progress">
                                                <span className="skill-card__progress-percent">90%</span>
                                                <div className="skill-card__progress-bar">
                                                    <div className="skill-card__progress-bar-html"></div>
                                                </div>
                                            </div>

                                            <p className="skill-card__description">С html я знаком ещё со школы. Тогда я только начинал
                                            интеревосваться программированием и поэтому мне пришлось с ним познакомиться. Я много раз 
                                            работал с этим языком и уже достаточно хорошо его освоил.</p>
                                    </div>

                            </li>
                            <li className="skills-list__li">
                                <button className="dropbtn">
                                    <svg fill="none" height="64" width="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>
                                    <span className="skills-list__title">CSS</span>
                                </button>
                                <div className="skills-list__dropdown-element" id="sle1" role="button" >
                                    <div className="skill-card__progress">
                                    <span className="skill-card__progress-percent">80%</span>
                                    <div className="skill-card__progress-bar">
                                        <div className="skill-card__progress-bar-css"></div>
                                    </div>
                                    </div>

                                    <p className="skill-card__description">Css и html это две неразрывные технологии
                                    взаимодополняющие друг друга, поэтому css обычно изучают вместе с html, и соответственно
                                    этим инструментом я владею не хуже чем html.</p>
                                </div>
                            </li>
                            <li className="skills-list__li">
                                <button className="dropbtn">
                                    <svg width="64px" height="64px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                                    <span className="skills-list__title">Js</span>
                                </button>
                                <div className="skills-list__dropdown-element" id="sle1" role="button" >
                                    <div className="skill-card__progress">
                                    <span className="skill-card__progress-percent">70%</span>
                                    <div className="skill-card__progress-bar">
                                        <div className="skill-card__progress-bar-js"></div>
                                    </div>
                                    </div>

                                    <p className="skill-card__description">С javascript мне пришлось познакомиться намного позже
                                    чем с html и css, однако язык очень прост для понимания, а в интернете есть очень много
                                    полезной документации к которой я постоянно обращаюсь при решении разных задач.</p>
                                </div>
                            </li>
                            <li className="skills-list__li">
                                <button className="dropbtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
                                    <g fill="#61DAFB">
                                        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                                        <circle cx="420.9" cy="296.5" r="45.7"/>
                                        <path d="M520.5 78.1z"/>
                                    </g>
                                    </svg>
                                    <span className="skills-list__title">React</span>
                                </button>
                                <div className="skills-list__dropdown-element" id="sle1" role="button" >
                                    <div className="skill-card__progress">
                                    <span className="skill-card__progress-percent">70%</span>
                                    <div className="skill-card__progress-bar">
                                        <div className="skill-card__progress-bar-react"></div>
                                    </div>
                                    </div>

                                    <p className="skill-card__description">Данная веб-страница написана на реакте, это мой первый
                                    проект на реакте, т.к. я его только начал изучать. Это очень удобный фреймворк и я очень рад
                                    что пишу эту веб-страницу на нём.</p>
                                </div>
                            </li>
                            <li className="skills-list__li">
                                <button className="dropbtn">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="64px" height="64px" baseProfile="basic"><linearGradient id="Q_pn21O5LDDqwJlze0Upoa" x1="24" x2="24" y1="41" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#643499"/><stop offset=".011" stopColor="#68369f"/><stop offset=".135" stopColor="#773db6"/><stop offset=".193" stopColor="#8042c3"/><stop offset=".248" stopColor="#8343c8"/><stop offset=".388" stopColor="#8444c9"/><stop offset=".732" stopColor="#9751d2"/><stop offset=".997" stopColor="#9c55d4"/><stop offset=".998" stopColor="#9c55d4"/><stop offset="1" stopColor="#9c55d4"/></linearGradient><path fill="url(#Q_pn21O5LDDqwJlze0Upoa)" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"/><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"/></svg>
                                    <span className="skills-list__title">Bootstrap</span>
                                </button>
                                <div className="skills-list__dropdown-element" id="sle1" role="button" >
                                    <div className="skill-card__progress">
                                    <span className="skill-card__progress-percent">70%</span>
                                    <div className="skill-card__progress-bar">
                                        <div className="skill-card__progress-bar-bootstrap"></div>
                                    </div>
                                    </div>

                                    <p className="skill-card__description">Bootstrap это очень удобный фреймворк, с ним мне 
                                    не приходилось работать так часто как с css, однако основы использования данного фреймворка
                                    я знаю.</p>
                                </div>
                            </li>
                            <li className="skills-list__li">
                                <button className="dropbtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="php"><path fill="#6181B6" d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"></path></svg>
                                    <span className="skills-list__title">Php</span>
                                </button>
                                <div className="skills-list__dropdown-element" id="sle1" role="button" >
                                    <div className="skill-card__progress">
                                    <span className="skill-card__progress-percent">70%</span>
                                    <div className="skill-card__progress-bar">
                                        <div className="skill-card__progress-bar-php"></div>
                                    </div>
                                    </div>

                                    <p className="skill-card__description">Я достаточно недавно начал изучать php.
                                    Необходимость в этом появилась, когда я решил заниматься веб-программированием.
                                    Так уж вышло, что этот язык очень востребован. Надеюсь я подружусь с ним.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
        )
    }
}

export default MobileSkillsSection;
