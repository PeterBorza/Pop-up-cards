const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from("div > p", { y: -100, stagger: 0.2, opacity: 0 }).from(
	"footer",
	{ x: 100, opacity: 0 },
	"-=.8"
);

function Tag(element, className, width, height) {
	this.className = className;
	this.element = element;
	this.width = width;
	this.height = height;
	this.createTag = function () {
		const newElement = document.createElement(element);
		newElement.classList.add(className);
		newElement.style.width = width;
		newElement.style.height = height;
		return newElement;
	};
}
// *******************************************

// first buttons components

const container = new Tag('div','container', '100%', '70vh').createTag();
const cardBox = new Tag('div', 'card-box', '70%', '85%').createTag();
const main = document.querySelector('main');

const h2 = new Tag('h2', 'cont-text').createTag();
h2.innerText = 'Image Toggler';

const image = new Tag('img', 'cont-text', '70%', '70%').createTag();
image.setAttribute('src', '/Documentation/ls11.jpg');

const captionText = new Tag('p').createTag();
captionText.innerText = 'This picture has birds in it';

cardBox.append(image, captionText);

container.append(h2);
container.append(cardBox);
main.prepend(container);

// ***********************************
// second buttons components

const sliders = [
    '/Documentation/ls11.jpg',
    '/Documentation/ls12.jpg',
    '/Documentation/ls13.jpg',
    '/Documentation/ls14.jpg',
    '/Documentation/ls15.jpg'
];
// sliders.push['url("/Documentation/ls1.jpg")'];

const imageFront = new Tag('div','img-front', '95%', '90%').createTag();
const imgHolder = new Tag('div', 'img-box', '100%', '100%').createTag();

const imageBoxes = sliders.map(function(item) {
    imgHolder.style.backgroundImage = `url('${item}')`;
    imgHolder.style.backgroundSize = 'cover';
    imageFront.append(imgHolder);

    return imgHolder;
});


const xButton = new Tag('button', 'x-close-button', '30px', '30px').createTag();
xButton.innerText = 'X';
imageFront.append(xButton);

main.append(imageFront);

// **************************************
// eventListeners

const firstButton = document.querySelector('#first-button');
const secondButton = document.querySelector('#second-button');

firstButton.addEventListener('click', () => {
    cardBox.classList.toggle('open');
});
secondButton.addEventListener('click', () => {
    imageFront.classList.add('transform');
});
xButton.addEventListener('click', () => {
    imageFront.classList.remove('transform');
});
