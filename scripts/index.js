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

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__occupation");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileForm = popupProfile.querySelector(".popup__form");
const nameInput = popupProfile.querySelector(".popup__input_name");
const aboutInput = popupProfile.querySelector(".popup__input_ocupation");

const popupNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardForm = popupNewCard.querySelector(".popup__form");
const cardNameInput = popupNewCard.querySelector(".popup__input_card-name");
const cardLinkInput = popupNewCard.querySelector(".popup__input_card-link");

const popupImage = document.querySelector(".popup_type_image");
const popupImageElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

const elementsList = document.querySelector(".elements");
const cardTemplate = document.querySelector("#placetemplate").content;

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openEditPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
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
  openPopup(popupNewCard);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardElement = createCardElement(
    cardNameInput.value,
    cardLinkInput.value
  );
  elementsList.prepend(newCardElement);

  closePopup(popupNewCard);
}

function openImagePopup(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImage);
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("element__white_button_active");
}

function handleDeleteButtonClick(evt) {
  const cardElement = evt.target.closest(".element");
  cardElement.remove();
}

function createCardElement(name, link) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__white_title");
  const likeButton = cardElement.querySelector(".element__white_button");
  const deleteButton = cardElement.querySelector(".element__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  likeButton.addEventListener("click", handleLikeButtonClick);
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  cardImage.addEventListener("click", () => openImagePopup(name, link));

  return cardElement;
}

function renderInitialCards(cards) {
  cards.forEach((card) => {
    elementsList.append(createCardElement(card.name, card.link));
  });
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
