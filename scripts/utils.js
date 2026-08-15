export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscKeydown);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscKeydown);
}

function handleEscKeydown(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

export function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}
