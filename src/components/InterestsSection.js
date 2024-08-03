import React from 'react'
import programming from '../images/programming.webp'
import computerGames from '../images/computer-games.webp'
import youtube from '../images/youtube.webp'
import twitch from '../images/twitch.webp'
import music from '../images/placebo.webp'

export default function InterestsSection() {
  return (
    <section className="interests section-peach-pink  observer-section" id="interests">
        <h2 className="second-title">Интересы</h2>

        <div className="interests-list">
        <div className="interest-wrapper">
            <img src={ programming } alt="" className="interest-image"/>
            <p className="interest-title bold">Программирование</p>
            <p className="interest-text">Мне очень нравиться заниматься программированием.
            Интересоваться программированием я начал в 12 лет, первыми языками которые я стал изучать были C++ и Java.
            Я обожаю это ощущение, когда пишешь код и наблюдаешь за своим результатом, наблюдаешь
            за тем, как потихоньку создаётся что-то большое, чем ты можешь хвастаться и гордиться.</p>
        </div>
        <div className="interest-wrapper">
            <img src={ computerGames } alt="" className="interest-image"/>
            <p className="interest-title bold">Компьютерные игры</p>
            <p className="interest-text">Компьютер появился у меня в 6 лет, и очень много времени я
            проводил за ним. Моей первой игрой была Warcraft III. Очень долгое время играл в World of Warcraft, Aion
            и Lineage 2. Сейчас я люблю проводить время в Path of Exile.</p>
        </div>
        <div className="interest-wrapper">
            <img src={ youtube } alt="" className="interest-image"/>
            <p className="interest-title bold">YouTube</p>
            <p className="interest-text">Не, ну тут ваще база. Жизнь без ютуба не сладка.
            Трудно пить чаёк или засыпать без видосика на ютубе. В наше время ютуб заменят телевизор.</p>
        </div>
        <div className="interest-wrapper">
            <img src={ twitch } alt="" className="interest-image"/>
            <p className="interest-title bold">Стримы</p>
            <p className="interest-text">Иногда игры надоедают, но почему-то бывает интересно
            понаблюдать за тем, как играют другие. В это время я люблю зайти на Twitch, чтобы 
            посмотреть кого-нибудь.</p>
        </div>
        <div className="interest-wrapper">
            <img src={ music } alt="" className="interest-image"/>
            <p className="interest-title bold">Музыка</p>
            <p className="interest-text">Я очень сильно люблю музыкальное искусство. Мои любимые исполнители
            это Placebo, Cigarettes after sex, Серёга пират, Пошлая Молли и Билборды.</p>
        </div>
        </div>
    </section>
  )
}
