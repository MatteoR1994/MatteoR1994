function myFunction() {
    let prop = document.getElementById('nav-menu-div').style.display;
    if (prop === 'none') {
        document.getElementById('nav-menu-div').style.display = 'block';
    } else {
        document.getElementById('nav-menu-div').style.display = 'none';
    }
}

function refactorAnagraphHtml(x) {
    const container = document.getElementById('content-flex');

    if (x.matches) { // If media query matches

        const anagraphDatas = [{
                text: '349 6245067',
                icon: './icons/best-icons/phone-alt-solid.svg'
                },
                {
                text: 'matteo.rinaldi1893@gmail.com',
                icon: './icons/best-icons/envelope-solid.svg'
                },
                {
                text: 'Via Mansueto 12B/21, 16159, Genova, GE',
                icon: './icons/best-icons/map-marker-alt-solid.svg'
                },
                {
                text: '04/03/1994',
                icon: './icons/best-icons/calendar-alt-regular.svg'
                },
                {
                text: 'Maschio',
                icon: './icons/best-icons/venus-mars-solid.svg'
                },
                {
                text: 'Italiana',
                icon: './icons/best-icons/globe-europe-solid.svg'
                }];

        container.innerHTML = '';

        for (const data of anagraphDatas) {
            const itemDiv = document.createElement('div');
        itemDiv.className += 'data-item ';

        const iconDiv = document.createElement('div');
        iconDiv.className += 'icon-div ';

        const dataDiv = document.createElement('div');
        dataDiv.className += 'data-div ';

        const imgIcon = document.createElement('img');
        imgIcon.className += 'icon-img ';

        const dataText = document.createElement('span');
        dataText.className += 'data-text ';

            imgIcon.src = data.icon;
            iconDiv.appendChild(imgIcon);

            dataText.appendChild(document.createTextNode(data.text));
            dataDiv.appendChild(dataText);

            itemDiv.appendChild(iconDiv);
            itemDiv.appendChild(dataDiv);

            container.appendChild(itemDiv);
            container.appendChild(document.createElement('br'));
        }
    } else {
        container.appendChild(document.createTextNode('problemi'));
    }
}