window.addEventListener('load', function(){

    let infoInsti1 = document.querySelector('div.infoInsti1');
    let imgInsti1 = document.querySelector('div.imgInsti1');

    let infoInsti2 = document.querySelector('div.infoInsti2');
    let imgInsti2 = document.querySelector('div.imgInsti2');

    let infoInsti3 = document.querySelector('div.infoInsti3');
    let imgInsti3 = document.querySelector('div.imgInsti3');

    let infoInsti4 = document.querySelector('div.infoInsti4');
    let imgInsti4 = document.querySelector('div.imgInsti4');

    imgInsti1.onmouseover = function (e) { 
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti1.style.display = 'flex';
        }
    };

    imgInsti1.onmouseout = function (e) {
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti1.style.display = 'none';
        }
    };

    imgInsti2.onmouseover = function (e) { 
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti2.style.display = 'flex';
        }
    };

    imgInsti2.onmouseout = function (e) {
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti2.style.display = 'none';
        }
    };

    imgInsti3.onmouseover = function (e) { 
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti3.style.display = 'flex';
        }
    };

    imgInsti3.onmouseout = function (e) {
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti3.style.display = 'none';
        }
    };

    imgInsti4.onmouseover = function (e) { 
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti4.style.display = 'flex';
        }
    };

    imgInsti4.onmouseout = function (e) {
        e.preventDefault();
        if (window.innerWidth < 767) {
        infoInsti4.style.display = 'none';
        }
    };
});