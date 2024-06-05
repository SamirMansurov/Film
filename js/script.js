/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



// №1
const remuve = document.querySelectorAll('.remuve_img')
remuve.forEach(function(remuves) {
    remuves.parentNode.removeChild(remuves)
})

// №2   
const genre = document.querySelector('.promo__genre')
genre.textContent = 'Драма'

// №3
const  poster = document.querySelector('.promo__bg')
poster.src ='./img/bg.jpg' 

// №4
movieDB.sort()

const films = document.querySelector('.promo__interactive-list')

movieDB.forEach(function(name) {
    const elem_film = document.createElement('li')
    elem_film.textContent = name
    films.appendChild(elem_film)
})

// №5
movieDB.sort()

const film= document.querySelector('.promo__interactive-list')
const counter = 1

movieDB.forEach(function(names) {
    const elem_counter = document.createElement('li')
        elem_counter.textContent = counter + '.' + names
        film.appendChild(elem_counter)
        counter++   
})


// удаление фильма
 const delete_button = document.querySelectorAll('.promo__interactive-item')

delete_button.forEach(function(button) {
    button.addEventListener('click', function () {
        button.parentNode.remove()
    })
})