'use strict';

console.log('Starting up');

$(document).ready(init);
$('.new-contact').click(onSubmit)



function init() {
    console.log('Starting!');
    renderProjs();
    renderModal();
}


function renderProjs() {
    let projCounter = 0;
    let projs = createProjs();
    let strHTML = projs.map((proj) => {
        projCounter++;
        return `<div id="${proj.id}" class="card">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${projCounter}">
            <img class="card-img-top" src=${proj.img}>
            </a>
        <div class="card-body">
            <h5 class="card-title">${proj.title}</h5>
            <p class="card-text">${proj.desc}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated ${getTsMinutes(proj.publishedAt)} mins ago</small>
        </div>
    </div>`
    })
    $('.card-group').html(strHTML.join(''));
    // $('.card').on('click', onCardClick);
}

function renderModal() {
    let projCounter = 0;
    let projs = createProjs();
    let strHTML = projs.map((proj) => {
        projCounter++;
        return `<div class="portfolio-modal modal fade" id="portfolioModal${projCounter}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <h2>${proj.title}</h2>
                                <p class="item-intro text-muted">Coding Academy project</p>
                                <img class="img-fluid d-block mx-auto" src=${proj.img}>
                                <p>${proj.desc}</p>
                                <ul class="list-inline">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul>
                                <a href=${proj.url} target="_blank"><button class="btn btn-primary" type="button"><i class="fa fa-star"></i>To My Project</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    })
    $('.modals-container').html(strHTML.join(''));
}

function onSubmit(ev) {
    ev.preventDefault();
    let userSubject = $('#subject-input').val();
    let userText = $('#body-input').val();
    console.log(userSubject)
    console.log(userText)
    if (!userSubject || !userText) return;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=amit.akoka98@gmail.com&su=${userSubject}&body=${userText}`);
    openCanvas(); //close canvas.
}

function getTsMinutes(timeStemp) {
    return Math.floor(((Date.now() - timeStemp) / 1000) / 60)
}