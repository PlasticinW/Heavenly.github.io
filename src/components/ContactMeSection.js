import React from 'react'

export default function ContactMeSection() {
  return (
    <section className="contact-me  observer-section" id="contact-me">
        <div className="contact-me__wrapper">
        <h2 className="second-title">Обратная связь</h2>

        <form action="" className="contact-me__form">
            <div className="input-wrapper left">
            <label className="label bold" htmlFor="name">Имя</label>
            <input className="input" type="text" id="name" placeholder="Введите ваше имя" required />
            </div>
            <div className="input-wrapper right">
            <label className="label bold" htmlFor="email">E-mail</label>
            <input className="input" type="email" id="email" placeholder="Введите ваш e-mail адрес" required />
            </div>

            <div className="cls"></div>

            <div className="textarea-wrapper">
            <label className="label bold" htmlFor="message">Сообщение</label>
            <textarea className="textarea" name="message" placeholder="Введите сообщение" id="message" cols="30" rows="10" required></textarea>
            </div>

            <button type="submit" className="submit">Отправить</button>
        </form>
        </div>
    </section>
  )
}
