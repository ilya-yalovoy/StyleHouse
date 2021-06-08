var hours = document.querySelector('#hours'),
    minute = document.querySelector('#minute'),
    seconds = document.querySelector('#seconds');


function timer() {
    setInterval(function() {
        var date = new Date(),
            h = 24-(date.getHours()),
            m = 60-(date.getMinutes()),
            s = 60-(date.getSeconds());
        hours.textContent = h;
        minute.textContent =m;
        seconds.textContent =s;
    }, 500);
}

timer();

var item1 = document.querySelector('#item-tit1'),
    item2 = document.querySelector('#item-tit2'),
    item3 = document.querySelector('#item-tit3'),
    item4 = document.querySelector('#item-tit4'),
    item5 = document.querySelector('#item-tit5'),
    item6 = document.querySelector('#item-tit6'),
    galleryBut = document.querySelector('#gallery-but');

item1.addEventListener('click', function() {
    item1.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    item4.classList.remove('active');
    item5.classList.remove('active');
    item6.classList.remove('active');
    galleryBut.textContent = item1.textContent;
});
item2.addEventListener('click', function() {
    item2.classList.add('active');
    item1.classList.remove('active');
    item3.classList.remove('active');
    item4.classList.remove('active');
    item5.classList.remove('active');
    item6.classList.remove('active');
    galleryBut.textContent = item2.textContent;
});
item3.addEventListener('click', function() {
    item3.classList.add('active');
    item2.classList.remove('active');
    item1.classList.remove('active');
    item4.classList.remove('active');
    item5.classList.remove('active');
    item6.classList.remove('active');
    galleryBut.textContent = item3.textContent;
});
item4.addEventListener('click', function() {
    item4.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    item1.classList.remove('active');
    item5.classList.remove('active');
    item6.classList.remove('active');
    galleryBut.textContent = item4.textContent;
});
item5.addEventListener('click', function() {
    item5.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    item4.classList.remove('active');
    item1.classList.remove('active');
    item6.classList.remove('active');
    galleryBut.textContent = item5.textContent;
});
item6.addEventListener('click', function() {
    item6.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    item4.classList.remove('active');
    item5.classList.remove('active');
    item1.classList.remove('active');
    galleryBut.textContent = item6.textContent;
});




var viewGallery    = document.querySelector('#gallery-nav-view'),
    purposeGallery = document.querySelector('#gallery-nav-purpose'),
    styleGallery   = document.querySelector('#gallery-nav-style');

viewGallery.addEventListener('click', function() {
    setTimeout(function() {
        item1.innerHTML = '<img src="img/vibor/view/1.jpg" alt=""><h2 >Прямые</h2>';
    }, 900);
    setTimeout(function() {
        item2.innerHTML = '<img src="img/vibor/view/2.jpg" alt=""><h2 >На люверсах</h2>'
    }, 900);
    setTimeout(function() {
        item3.innerHTML = '<img src="img/vibor/view/3.jpg" alt=""><h2 >На петлях</h2>'
    }, 900);
    setTimeout(function() {
        item4.innerHTML = '<img src="img/vibor/view/4.jpg" alt=""><h2 >С ламбрекеном</h2>'
    }, 900);
    setTimeout(function() {
        item5.innerHTML = '<img src="img/vibor/view/5.jpg" alt=""><h2 >Римские </h2>'
    }, 900);
    setTimeout(function() {
        item6.innerHTML = '<img src="img/vibor/view/6.jpg" alt=""><h2 >Французкие</h2>'
    }, 900);
});
purposeGallery.addEventListener('click', function() {
    setTimeout(function() {
        item1.innerHTML = '<img src="img/vibor/purpose/1.jpg" alt=""><h2 >Для гостинной</h2>';
    }, 1200);
    setTimeout(function() {
        item2.innerHTML = '<img src="img/vibor/purpose/2.jpg" alt=""><h2 >Для спальни</h2>';
    }, 1200);
    setTimeout(function() {
        item3.innerHTML = '<img src="img/vibor/purpose/3.jpg" alt=""><h2 >Для кухни</h2>';
    }, 1200);
    setTimeout(function() {
        item4.innerHTML = '<img src="img/vibor/purpose/4.jpg" alt=""><h2 >Для детской</h2>';
    }, 1200);
    setTimeout(function() {
        item5.innerHTML = '<img src="img/vibor/purpose/5.jpg" alt=""><h2 >Для кабинета</h2>';
    }, 1200);
    setTimeout(function() {
        item6.innerHTML = '<img src="img/vibor/purpose/6.jpg" alt=""><h2 >Для организаций</h2>';
    }, 1200);
});
styleGallery.addEventListener('click', function() {
    setTimeout(function() {
        item1.innerHTML = '<img src="img/vibor/style/1.jpg" alt=""><h2 >Современные</h2>';
    }, 900);
    setTimeout(function() {
        item2.innerHTML = '<img src="img/vibor/style/2.jpg" alt=""><h2 >Классические</h2>'
    }, 900);
    setTimeout(function() {
        item3.innerHTML = '<img src="img/vibor/style/3.jpg" alt=""><h2 >Арт-деко</h2>'
    }, 900);
    setTimeout(function() {
        item4.innerHTML = '<img src="img/vibor/style/4.jpg" alt=""><h2 >Лофт</h2>'
    }, 900);
    setTimeout(function() {
        item5.innerHTML = '<img src="img/vibor/style/5.jpg" alt=""><h2 >Хай-тек</h2>'
    }, 900);
    setTimeout(function() {
        item6.innerHTML = '<img src="img/vibor/style/6.jpg" alt=""><h2 >Этнические</h2>'
    }, 900);
});

