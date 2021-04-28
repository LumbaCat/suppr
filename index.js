function validateForm() {
  const name = document.forms["data"]["name"].value;
  if (name == "Tom") {
    alert("The name \"Tom\" is already taken!");
    return false;
  }
}
