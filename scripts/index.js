const initialCards = [
  {
    name: "Yosemite Valley",
    link: "./images/Valle de Yosemite.png",
  },
  {
    name: "Lake Louise",
    link: "./images/Lago Louise.png",
  },
  {
    name: "Bald Mountains",
    link: "./images/Montañas Calvas.png",
  },
  {
    name: "Latemar",
    link: "./images/Latemar.png",
  },
  {
    name: "Vanoise National Park",
    link: "./images/Vanois National....png",
  },
  {
    name: "Lago di Braies",
    link: "./images/Lago di Braies.png",
  },
];

const profileName = document.querySelector(".profile__info_name");
const profileAbout = document.querySelector(".profile__info_ocupation");
const editButton = document.querySelector(".profile__info_edit");
const popup = document.querySelector(".popup_type_profile");
const popupForm = popup.querySelector(".popup__form");
const closeButton = popup.querySelector(".popup__close");
const nameInput = popup.querySelector(".popup__input_name");
const aboutInput = popup.querySelector(".popup__input_ocupation");
const elementsList = document.querySelector(".elements");
const cardTemplate = document.querySelector("#placetemplate").content;

function openEditPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
}

function closeEditPopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeEditPopup();
}

function createCardElement(name, link) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__white_title");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  return cardElement;
}

initialCards.forEach((card) => {
  elementsList.append(createCardElement(card.name, card.link));
});

editButton.addEventListener("click", openEditPopup);
closeButton.addEventListener("click", closeEditPopup);
popupForm.addEventListener("submit", handleProfileFormSubmit);
