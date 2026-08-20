import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

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
const cardsContainerSelector = ".elements";

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popupProfileForm = document.querySelector(
  ".popup_type_profile .popup__form"
);
const popupNewCardForm = document.querySelector(
  ".popup_type_new-card .popup__form"
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__occupation",
});

const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function createCard(data) {
  const card = new Card(data, cardTemplateSelector, handleCardClick);
  return card.getView();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardSection.addItem(createCard(data));
    },
  },
  cardsContainerSelector
);

cardSection.renderItems();

const popupEditProfile = new PopupWithForm(
  ".popup_type_profile",
  (formData) => {
    userInfo.setUserInfo({ name: formData.name, job: formData.about });
    popupEditProfile.close();
  }
);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(".popup_type_new-card", (formData) => {
  const newCardData = { name: formData.name, link: formData.link };
  cardSection.addItem(createCard(newCardData));
  popupAddCard.close();
});
popupAddCard.setEventListeners();

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

function handleEditProfileClick() {
  const currentUserInfo = userInfo.getUserInfo();
  popupProfileForm.elements.name.value = currentUserInfo.name;
  popupProfileForm.elements.about.value = currentUserInfo.job;
  profileFormValidator.resetValidation();
  popupEditProfile.open();
}

function handleAddCardClick() {
  newCardFormValidator.resetValidation();
  popupAddCard.open();
}

editButton.addEventListener("click", handleEditProfileClick);
addButton.addEventListener("click", handleAddCardClick);
