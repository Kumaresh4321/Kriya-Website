window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Mr Sudhir Chandrasekar",
            role: "",
            mob:1234567890,
            desc: "This talk session will be about the types of materials and their functional properties in solar energy. The solar energy sector in India and it&#39;s upcoming transitions. The materials research and it&#39;s impact on the field of solar energy.",
            photo: "dummy.jpg"
        },
        {
            name: "Mr Divakar Kuppan ",
            role: "",
            mob:1234567890,
            desc: "Divakar Kuppan from Chennai, currently staying in Mumbai. He had post graduated in Master of Design in Animation & Film making from Industrial Design Centre,IIT Bombay. He had graduated from B.E. Computer Science Engineering in 2015.",
            photo: "./Divakar.jpg"
        }
    ];
    /* Function to populate the team members */

    function addTeam() {
        for (let i = 0; i < team.length; i++) {
            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                mob = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo
            /* Template for the Team Cards */
            var template = 
                `<div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name" style="font-size:18px">${name}</p>
                            <p class="name">${mob}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        
                        <div class="social">
                        <span class="pointer"></span>
                            </div>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();


    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (80 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});