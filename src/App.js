import './styles/main.css'

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="header-top">
          <span className="logo">Heavenly</span>
          <nav className="navigation">
            <ul className="menu">
              <li className="menu-element">
                <a className="menu-element__link" href="">Home</a>
              </li>
              <li className="menu-element">
                <a className="menu-element__link" href="">About</a>
              </li>
              <li className="menu-element">
                <a className="menu-element__link" href="">Skills</a>
              </li>
              <li className="menu-element">
                <a className="menu-element__link" href="">Interests</a>
              </li>
              <li className="menu-element">
                <a className="menu-element__link" href="">Contact me</a>
              </li>
            </ul>
          </nav>
          <div className="switcher">Ru/Eng</div>
        </div>
        <div className="header-center">
          <h1 className="name">Мальцев Владислав</h1>
          <p className="description">Привет! Меня зовут Владислав. Я интерсуюсь программированием, давайте знакомиться!</p>
        </div>
      </header>

      <section className="about-me">
        <div className="left">
          <img src="" alt="Avatar" />
        </div>
        <div className="right">
          <p className="about-me__title">Мальцев Владислав Викторович</p>
          <p className="about-me__description gray">123123123123123</p>
          <p className="about-me__description">
            Я начинающий веб-разработчик. Ранее изучал C++, C#, Python. В данный момент изучаю html, css, js, php, sql, react и redux.
            Хочу и дальше двигаться в этом направлении.
          </p>
          <p className="about-me__description">
            Недавно я окончил Сибирский Федеральный Университет, институт математики и фундаментальной информатики, кафедра вычислительных
            и информационных технологий. Сейчас хочу найти работу, чтобы жить программированием и развиваться в этом дальше.
          </p>
          <p className="about-me__description">
            В свободное время играю в компьютерные игры, смотрю YouTube и слушаю музыку.
          </p>
          <ul className="about-me__extra">
            <li className="about-me__extra-element">
              <span className="bold">Дата рождения:</span> 
              <span>12.12.2002</span>
              </li>
            <li className="about-me__extra-element">
              <span className="bold">Адрес:</span> 
              <span>Россия, г.Красноярск</span>
              </li>
            <li className="about-me__extra-element">
              <span className="bold">Образование:</span>
              <span>СФУ, институт математики и фундаментальной информатики, кафердра вычислительных
              и информационных технологий</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2 className="second-title">Навыки</h2>
        
        <p className="section-description">Все оценки субъективны и показывают уровень, который как
         по мне, необходим для работы.</p>

        <ul className="skills-filters">
          <li className="skill-filter">Все</li>
          <li className="skill-filter">Html/css</li>
          <li className="skill-filter">Php</li>
          <li className="skill-filter">Js</li>
          <li className="skill-filter">Database</li>
          <li className="skill-filter">Other</li>
        </ul>

        <div className="skills-wrapper">
          <ul className="skills-list left">
            <li className="skills-list__element">Php</li>
          </ul>

          <div className="skill-card right">
            <div className="skill-card__title">
                <img src="" alt="" className="skill-card__image" />
                <span className="skill-card__name">Php</span>
            </div>

            <div className="skill-card__progress">
              <span className="skill-card__progress-percent">65%</span>
              <div className="skill-card__progress-bar"></div>
            </div>

            <p className="skill-card__description">Я достаточно недавно начал изучать php.
             Необходимость в этом появилась, когда я решил заниматься веб-программированием.
             Так уж вышло, что этот язык очень востребован. Надеюсь я подружусь с ним.</p>
          </div>
        </div>
      </section>

      <section className="interests">
        <h2 className="second-title">Интересы</h2>

        <div className="interest-wrapper">
          <img src="" alt="" className="interest-image"/>
          <p className="interest-title">Программирование</p>
          <p className="interest-text">Мне очень нравиться заниматься программированием.
           Интересоваться программированием я начал в 12 лет, первыми языками которые я стал изучать были C++ и Java.
           Я обожаю это ощущение, когда пишешь код и наблюдаешь за своим результатом, наблюдаешь
           за тем, как потихоньку создаётся что-то большое, чем ты можешь хвастаться и гордиться.</p>
        </div>
        <div className="interest-wrapper">
          <img src="" alt="" className="interest-image"/>
          <p className="interest-title">Компьютерные игры</p>
          <p className="interest-text">Компьютер появился у меня в 6 лет, и очень много времени я
           проводил за ним. Моей первой игрой была Warcraft III.</p>
        </div>
        <div className="interest-wrapper">
          <img src="" alt="" className="interest-image"/>
          <p className="interest-title">YouTube</p>
          <p className="interest-text">Не, ну тут ваще база. Жизнь без ютуба не сладка.
           Трудно пить чаёк или засыпать без видосика на ютубе.</p>
        </div>
        <div className="interest-wrapper">
          <img src="" alt="" className="interest-image"/>
          <p className="interest-title">Стримы</p>
          <p className="interest-text">Иногда игры надоедают, но почему-то бывает интересно
           понаблюдать за тем, как играют другие. В это время я люблю зайти на Twitch, чтобы 
           посмотреть кого-нибудь.</p>
        </div>
        <div className="interest-wrapper">
          <img src="" alt="" className="interest-image"/>
          <p className="interest-title">Музыка</p>
          <p className="interest-text">Я очень сильно люблю музыкальное искусство. Мои любимые исполнители
          это Placebo, Cigarettes after sex, Серёга пират, Пошлая Молли и Билборды.</p>
        </div>
      </section>

      <section className="contact-me">
        <h2 className="second-title">Обратная связь</h2>

        <form action="" className="contact-me__form">
          <div className="input-wrapper">
            <label className="label" htmlFor="name">Имя</label>
            <input className="input" type="text" id="name" required />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="email">E-mail</label>
            <input className="input" type="email" id="email" required />
          </div>

          <div className="textarea-wrapper">
            <label className="label" htmlFor="">Сообщение</label>
            <textarea className="textarea" name="message" id="message" cols="30" rows="10" required></textarea>
          </div>

          <button type="submit" className="submit">Отправить</button>
        </form>
      </section>

      <footer className="footer">
        <ul className="socials">
          <li className="social-element">
            <a href="https://vk.com/plasticinw" target="_blank" className="social-element__link">VK</a>
          </li>
          <li className="social-element">
            <a href="https://t.me/PlasticinW" target="_blank" className="social-element__link">TG</a>
          </li>
        </ul>
        <p className="footer-about">
          &copy;&nbsp;Мальцев&nbsp;Владислав 2002&nbsp;-&nbsp;2024
        </p>
      </footer>
    </div>
  );
}

export default App;
