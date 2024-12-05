import React, {type ReactNode, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        stop()
        const timerId: number = window.setInterval(() => {
            setDate(new Date())
        },1000)
        setTimerId(timerId)
    }

    const stop = () => {
        console.log('stop' ,timerId)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        if (timerId !== undefined) {
            clearInterval(timerId); // Останавливаем таймер
            setTimerId(undefined); // Сбрасываем id таймера
        }
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    // const getTwoDigitsString = (num: number) => num.toString().padStart(2, '0');
    const getTwoDigitsString = (num: number) => num < 10
        ? "0" + num
        : num

    // const stringTime = 'date->time' || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    // const stringTime = `${String(date.getHours()).padStart(2, '0')}:итд`
    const stringTime = `${getTwoDigitsString(date.getHours())}:${getTwoDigitsString(date.getMinutes())}:${getTwoDigitsString(date.getSeconds())}` || <br/>

    // const stringDate = 'date->date' || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    const stringDate = `
        ${getTwoDigitsString(date.getDate())}.${getTwoDigitsString(date.getMonth() + 1)}.${date.getFullYear()}
    ` || <br/>

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    // const stringDay = 'date->day' || <br/> // пишут студенты
    const stringDay = new Intl.DateTimeFormat("en", {weekday: "long"}).format(date) || <br/>

    // const stringMonth = 'date->month' || <br/> // пишут студенты
    const stringMonth = new Intl.DateTimeFormat("en", {month: "long"}).format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    // disabled={false} // пишут студенты // задизэйблить если таймер запущен
                    disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    // disabled={false} // пишут студенты // задизэйблить если таймер не запущен
                    disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock