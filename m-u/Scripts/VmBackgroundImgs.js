function VmBackgroundImgs() {
    var self = this;

    var thumbUrlBase = window.location.href + '/Content/bg/thumbs/';
    var fullUrlBase = window.location.href + '/Content/bg/';

    this.ddData = ko.observableArray();
    this.ddData.push(
        {
            value: 1,
            imageSrc: thumbUrlBase + 'bg01.jpg',
            description: 'Anacortes, WA. May 2013.'
        },
        {
            value: 2,
            imageSrc: thumbUrlBase + 'bg02.jpg',
            description: 'The Morton Arboretum, Lisle, IL. December 2013.'
        },
        {
            value: 3,
            imageSrc: thumbUrlBase + 'bg03.jpg',
            description: 'Aremberg, Germany. July 2010.'
        },
        {
            value: 4,
            imageSrc: thumbUrlBase + 'bg04.jpg',
            description: 'Vancouver, BC. June 2013.'
        },
        {
            value: 5,
            imageSrc: thumbUrlBase + 'bg05.jpg',
            description: 'Second Beach, La Push, WA. May 2013.'
        },
        {
            value: 6,
            imageSrc: thumbUrlBase + 'bg06.jpg',
            description: 'Second Beach, La Push, WA. May 2013.'
        },
        {
            value: 7,
            imageSrc: thumbUrlBase + 'bg07.jpg',
            description: 'Vancouver, BC. June 2013.'
        },
        {
            value: 8,
            imageSrc: thumbUrlBase + 'bg08.jpg',
            description: 'Somewhere near Vancouver, BC. June 2013.'
        },
        {
            value: 9,
            imageSrc: thumbUrlBase + 'bg09.jpg',
            description: 'Lake Union, Seattle, WA. July 2013.'
        },
        {
            value: 10,
            imageSrc: thumbUrlBase + 'bg10.jpg',
            description: 'Orcas Island, WA. July 2013.'
        },
        {
            value: 11,
            imageSrc: thumbUrlBase + 'bg11.jpg',
            description: 'Orcas Island, WA. July 2013.'
        },
        {
            value: 12,
            imageSrc: thumbUrlBase + 'bg12.jpg',
            description: 'Olympic National Park, WA. August 2013.'
        },
        {
            value: 13,
            imageSrc: thumbUrlBase + 'bg13.jpg',
            description: 'Lake Crescent, WA. November 2013.'
        },
        {
            value: 14,
            imageSrc: thumbUrlBase + 'bg14.jpg',
            description: 'Guemes Island, WA. March 2013.'
        },
        {
            value: 15,
            imageSrc: thumbUrlBase + 'bg15.jpg',
            description: 'Munnar, India. September 2012.'
        },
        {
            value: 16,
            imageSrc: thumbUrlBase + 'bg16.jpg',
            description: 'Kerala, India. September 2012.'
        },
        {
            value: 17,
            imageSrc: thumbUrlBase + 'bg17.jpg',
            description: 'Lake Crescent, WA. May 2013.'
        },
        {
            value: 18,
            imageSrc: thumbUrlBase + 'bg18.jpg',
            description: 'The Morton Arboretum, Lisle, IL. December 2013.'
        },
        {
            value: 19,
            imageSrc: thumbUrlBase + 'bg19.jpg',
            description: 'The Great Barrier Reef near Cairns, Australia. June 2012.'
        }
    );


}