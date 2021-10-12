export const decreaseValue = (event) => {
  if (event.target.nextElementSibling.classList.contains('count_adults')) {
    if (personsValues.adults.value > personsValues.adults.min) {
      personsValues.adults.value -= 1;
    }
  } else if (event.target.nextElementSibling.classList.contains('count_children')) {
    if (personsValues.children.value > personsValues.children.min) {
      personsValues.children.value -= 1;
      childDecrease();
    }
  } else if (event.target.nextElementSibling.classList.contains('count_rooms')) {
    if (personsValues.rooms.value > personsValues.rooms.min) {
      personsValues.rooms.value -= 1;
    }
  }
  assignmentFunc();
};
