import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup, handleOverlayClick } from "./utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "./images/yosemite-valley.png",
  },
  {
    name: "Lake Louise",
    link: "./images/lake-louise.png",
  },
  {
    name: "Bald Mountains",
    link: "./images/bald-mountains.png",
  },
  {
    name: "Latemar",
    link: "./images/Latemar.png",
  },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise-national-park.png",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago-di-braies.png",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const cardTemplateSelector = "#placetemplate";

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__occupation");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileForm = popupProfile.querySelector(".popup__form");
const nameInput = popupProfile.querySelector(".popup__input_name");
const aboutInput = popupProfile.querySelector(".popup__input_occupation");

const popupNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardForm = popupNewCard.querySelector(".popup__form");
const cardNameInput = popupNewCard.querySelector(".popup__input_card-name");
const cardLinkInput = popupNewCard.querySelector(".popup__input_card-link");

const popupImage = document.querySelector(".popup_type_image");
const popupImageElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

const elementsList = document.querySelector(".elements");

const profileFormValidator = new FormValidator(
  validationConfig,
  popupProfileForm
);
const newCardFormValidator = new FormValidator(
  validationConfig,
  popupNewCardForm
);

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

function handleCardClick(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImage);
}

function createCard(data) {
  const card = new Card(data, cardTemplateSelector, handleCardClick);
  return card.getView();
}

function renderInitialCards(cards) {
  cards.forEach((data) => {
    elementsList.append(createCard(data));
  });
}

function openEditPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  profileFormValidator.resetValidation();
  openPopup(popupProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup(popupProfile);
}

function openNewCardPopup() {
  popupNewCardForm.reset();
  newCardFormValidator.resetValidation();
  openPopup(popupNewCard);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  elementsList.prepend(createCard(newCardData));

  closePopup(popupNewCard);
}

renderInitialCards(initialCards);

editButton.addEventListener("click", openEditPopup);
addButton.addEventListener("click", openNewCardPopup);

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);
popupNewCardForm.addEventListener("submit", handleNewCardFormSubmit);

document.querySelectorAll(".popup__close").forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    closePopup(closeButton.closest(".popup"));
  });
});

document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlayClick);
});
