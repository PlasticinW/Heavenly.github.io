import React from 'react'

export default function MobileSkillsSection() {
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
    }
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

            <div class="container">
                <button type="button" class="trigger">Show/Hide content</button>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis
                    quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur
                    ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore
                    dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus
                    
                </div>
            </div>

            <div class="container">
                <button type="button" class="trigger">Show/Hide content</button>
                <div class="content">                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis
                    quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur
                    ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore
                    dolores perspiciatis necessitatibus obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus
                    obcaecati tempora saepe natus quas omnis esse voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae reiciendis quia, quidem aspernatur ut suscipit enim quo tempore dolores perspiciatis necessitatibus obcaecati tempora saepe
                    natus quas omnis esse voluptas?
                </div>
            </div>
        </section>
  )
}
