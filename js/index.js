const animalsArr = [
    {
        name: 'Собаки',
        image: './images/dogs.png',
        link: '#'
    },
    {
        name: 'Кошки',
        image: './images/cats.png',
        link: '#'
    },
    {
        name: 'Грызуны',
        image: './images/mice.png',
        link: '#'
    },
    {
        name: 'Птицы',
        image: './images/birds.png',
        link: '#'
    },
    {
        name: 'Рыбки',
        image: './images/fish.png',
        link: '#'
    },
]

const animal_list = document.querySelector('.main_animals_list')
for(let i of animalsArr) {
        const a = document.createElement('a')
        a.classList.add('main_animal')
        a.href = i.link
        a.innerHTML = `<div class="main_animal_img"><img src="${i.image}" alt="${i.image}"></div><p>${i.name}</p>`
        animal_list.append(a)
    }
