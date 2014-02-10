var navLinks = ko.observableArray();
var selectedBg = ko.observable();
var vmBackgroundImgs = new VmBackgroundImgs();

$(function () {
    ko.applyBindings();

    BuildNavBar();
    LoadPartial("Landing");
    BuildBackgroundImgs();
    GenerateRandomBackground();

    $(".navLink").click(function () {
        LoadPartial((this).id);
    });

    $('.titleText').on(
        {
            mouseover: function () {
                this.iid = setInterval(function () {
                    var svgns = "http://www.w3.org/2000/svg";
                    var windowWidth = $(window).width(); //retrieve current window width
                    var ColorArray = new Array("#ffffff", "#aaaaaa", "#454545");
                    var x = Math.floor(Math.random() * windowWidth / 25) * 25,
                    y = Math.floor(Math.random() * 10) * 25;

                    var rect = document.createElementNS(svgns, 'rect');
                    rect.setAttributeNS(null, 'x', x);
                    rect.setAttributeNS(null, 'y', y);
                    rect.setAttributeNS(null, 'height', '10');
                    rect.setAttributeNS(null, 'width', '10');
                    rect.setAttributeNS(null, 'fill', ColorArray[Math.floor(Math.random() * ColorArray.length)]);
                    document.getElementById('svgOne').appendChild(rect);
                }, 10);
            },
            mouseleave: function () {
                this.iid && clearInterval(this.iid);
            }
        }
    );

    $('.btnInfo').on(
        {
            mouseover: function () {
                $('.lblInfo')[0].innerText = 'Current Background: ' + selectedBg().description;
                $('.lblInfo').removeClass('hide');
            },
            mouseleave: function () {
                $('.lblInfo').addClass('hide');
            }
        }
    );

    $('.closeAll').on(
        {
            mouseover: function () {
                $('.lblInfo')[0].innerText = 'Show or hide everything on the page to view photos!';
                $('.lblInfo').removeClass('hide');
            },
            mouseleave: function () {
                $('.lblInfo').addClass('hide');
            },
            click: function() {
                ShowOrHide($('#content'));
                ShowOrHide($('#banner'));
                if($('#closeAllImg').hasClass('rotate')) {
                    $('#closeAllImg').removeClass('rotate')
                }
                else {
                    $('#closeAllImg').addClass('rotate');
                }
            }
        }
    );
})

function ShowOrHide(element) {
    if (element.hasClass('hidden')) {
        element.show(500);
        element.removeClass('hidden');
    }
    else {
        element.hide(500);
        element.addClass('hidden');
    }
}

function BuildBackgroundImgs() {
   
    $('#ddBgImages').ddslick({
        data: vmBackgroundImgs.ddData(),
        selectText: "Select background image",
        onSelected: function (data) {
            selectedBg(data.selectedData);
            SetBackground(data.selectedData.imageSrc);
        }
    });
}

function SetBackground(src) {
    var splitUrl = src.split('thumbs/');
    fullImgSrc = splitUrl[0] + splitUrl[1];
    $('html').css('background', 'url(' + fullImgSrc + ') no-repeat center center fixed');
    $('html').css('background-size', 'cover');
}

function GenerateRandomBackground() {
    var totalBgs = vmBackgroundImgs.ddData().length;
    var randomBg = vmBackgroundImgs.ddData()[Math.floor((Math.random() * totalBgs))];
    SetBackground(randomBg.imageSrc);
    selectedBg(randomBg);
}

function BuildNavBar() {
    navLinks.removeAll();
    navLinks.push(
        {
            displayText: "About",
            id: "navAbout",
            controller: "navAbout"
        },
        {
            displayText: "Video",
            id: "navVideo",
            controller: "navVideo"
        },
        //{
        //    displayText: "Bike",
        //    id: "navBike",
        //    controller: "navBike"
        //},
        {
            displayText: "Contact",
            id: "navContact",
            controller: "navContact"
        });
    var foo = navLinks();
}

function LoadPartial(navPath) {

    $('#content').hide();
    $('#content').load(window.location.pathname + '/Home/' + navPath, function () {
        $('#content').fadeIn(250);
    });
}