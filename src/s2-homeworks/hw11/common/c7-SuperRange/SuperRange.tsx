import React from 'react'
// import {Slider, SliderProps} from '@mui/material'
import Slider, {type SliderProps} from '@mui/material/Slider';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                // color: "#00CC22"
               '& .MuiSlider-rail': { // Линия
                  backgroundColor: '#8B8B8B', // Серый цвет линии (когда не заполнено)
               },
               '& .MuiSlider-track': { // Заполненная часть
                  backgroundColor: '#00CC22', // Зелёная заполненная часть
               },
               '& .MuiSlider-thumb': { // Кружочек
                  width: 18,
                  height: 18,
                  backgroundColor: 'white', // Внешний круг белый
                  border: '6px solid #00CC22', // Внутренний кружочек зелёный
                  '&:hover, &:focus-visible': {
                     boxShadow: '0px 0px 0px 8px rgba(0, 204, 34, 0.16)', // Лёгкое свечение при наведении
                  },
               },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
