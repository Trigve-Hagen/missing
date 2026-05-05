const deleteModal = document.getElementById('deleteModal')
if (deleteModal) {
  deleteModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const identifier = button.getAttribute('data-bs-item')
    const itemId = button.getAttribute('data-bs-item-id')
    const itemType = button.getAttribute('data-bs-item-type')
    // Update the hidden inputs
    const hiddenId = deleteModal.querySelector('#delete-id')
    const hiddenType = deleteModal.querySelector('#delete-type')
    hiddenId.value = itemId
    hiddenType.value = itemType
    // Update the modal's content.
    const modalTitle = deleteModal.querySelector('.modal-title')
    const modalBodyItem = deleteModal.querySelector('.modal-body p#delete-item')
    const modalBodyItemType = deleteModal.querySelector('.modal-body p#delete-item-type')
    const modalBodyItemId = deleteModal.querySelector('.modal-body p#delete-item-id')
    modalTitle.textContent = `Are you sure you want to delete this item?`
    modalBodyItem.innerHTML = identifier
    modalBodyItemType.innerHTML = "Type: " + itemType
    modalBodyItemId.innerHTML = "Id: " + itemId
  })
}

/* const editCategoryModal = document.getElementById('editCategoryModal')
const editPersonModal = document.getElementById('editPersonModal')
const editAliasModal = document.getElementById('editAliasModal')
const editAddressModal = document.getElementById('editAddressModal')
const editEmailModal = document.getElementById('editEmailModal')
const editPhoneModal = document.getElementById('editPhoneModal')
if (editCategoryModal) {
  editCategoryModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const categoryId = button.getAttribute('data-bs-id')

    // Update the modal's content.
    const modalTitle = editCategoryModal.querySelector('.modal-title')
    const modalFormId = editCategoryModal.querySelector('.modal-body #category-id')

    if (categoryId == undefined) {
      modalTitle.textContent = `Add Category`
      modalFormId.value = ""
    } else {
      fetch(`/api/category/${categoryId}`)
        .then(response => response.json())
        .then(data => {
          // Populate Form Fields
          document.getElementById('category-id').value = data.id;
          document.getElementById('category-type').value = data.type;
          document.getElementById('category-name').value = data.name;
        });
      modalTitle.textContent = `Edit Category`
      modalFormId.value = categoryId
    }
  })
}
if (editPersonModal) {
  editPersonModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const personId = button.getAttribute('data-bs-id')

    // Update the modal's content.
    const modalTitle = editPersonModal.querySelector('.modal-title')
    const modalFormId = editPersonModal.querySelector('.modal-body #person-id')

    if (personId == undefined) {
      modalTitle.textContent = `Add Person`
      modalFormId.value = ""
    } else {
      fetch(`/api/person/${personId}`)
        .then(response => response.json())
        .then(data => {
          // Populate Form Fields
          document.getElementById('person-id').value = data.id;
          document.getElementById('person-firstName').value = data.firstName;
          document.getElementById('person-middleName').value = data.middleName;
          document.getElementById('person-lastName').value = data.lastName;
          document.getElementById('person-sirName').value = data.sirName;
          document.getElementById('person-suffix').value = data.suffix;
          document.getElementById('person-contactType').value = data.contactType;
          document.getElementById('person-height').value = data.height;
          document.getElementById('person-weight').value = data.weight;
          document.getElementById('person-hairColor').value = data.hairColor;
          document.getElementById('person-eyeColor').value = data.eyeColor;
          document.getElementById('person-ssn').value = data.ssn;
          document.getElementById('person-gender').value = data.gender;
          const dateObj = new Date(data.dob); // dbDateString from SQLAlchemy
          const formattedDate = dateObj.toISOString().split('T')[0];
          document.getElementById('person-dob').value = formattedDate;
        });
      modalTitle.textContent = `Edit Person`
      modalFormId.value = personId
    }
  })
}
if (editAliasModal) {
  editAliasModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const aliasId = button.getAttribute('data-bs-id')

    // Update the modal's content.
    const modalTitle = editAliasModal.querySelector('.modal-title')
    const modalFormId = editAliasModal.querySelector('.modal-body #alias-id')

    if (aliasId == undefined) {
      modalTitle.textContent = `Add Alias`
      modalFormId.value = ""
    } else {
      fetch(`/api/alias/${aliasId}`)
        .then(response => response.json())
        .then(data => {
          // Populate Form Fields
          document.getElementById('alias-id').value = data.id;
          document.getElementById('alias-firstName').value = data.firstName;
          document.getElementById('alias-middleName').value = data.middleName;
          document.getElementById('alias-lastName').value = data.lastName;
          document.getElementById('alias-sirName').value = data.sirName;
          document.getElementById('alias-suffix').value = data.suffix;
          document.getElementById('alias-owner').value = data.owner;
        });
      modalTitle.textContent = `Edit Alias`
      modalFormId.value = aliasId
    }
  })
}
if (editAddressModal) {
  editAddressModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const addressId = button.getAttribute('data-bs-id')

    // Update the modal's content.
    const modalTitle = editAddressModal.querySelector('.modal-title')
    const modalFormId = editAddressModal.querySelector('.modal-body #address-id')

    if (addressId == undefined) {
      modalTitle.textContent = `Add Address`
      modalFormId.value = ""
    } else {
      fetch(`/api/address/${addressId}`)
        .then(response => response.json())
        .then(data => {
          // Populate Form Fields
          document.getElementById('address-id').value = data.id;
          document.getElementById('address-type').value = data.type;
          document.getElementById('address-name').value = data.name;
          document.getElementById('address-address1').value = data.address1;
          document.getElementById('address-address2').value = data.address2;
          document.getElementById('address-city').value = data.city;
          document.getElementById('address-state').value = data.state;
          document.getElementById('address-zip5').value = data.zip5;
          document.getElementById('address-zip4').value = data.zip4;
          document.getElementById('address-owner').value = data.owner;
        });
      modalTitle.textContent = `Edit Address`
      modalFormId.value = addressId
    }
  })
}
if (editEmailModal) {
  editEmailModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const emailId = button.getAttribute('data-bs-id')

    // Update the modal's content.
    const modalTitle = editEmailModal.querySelector('.modal-title')
    const modalFormId = editEmailModal.querySelector('.modal-body #email-id')

    if (emailId == undefined) {
      modalTitle.textContent = `Add Email`
      modalFormId.value = ""
    } else {
      fetch(`/api/email/${emailId}`)
        .then(response => response.json())
        .then(data => {
          // Populate Form Fields
          document.getElementById('email-id').value = data.id;
          document.getElementById('email-type').value = data.type;
          document.getElementById('email-email').value = data.email;
          document.getElementById('email-owner').value = data.owner;
        });
      modalTitle.textContent = `Edit Email`
      modalFormId.value = emailId
    }
  })
}
if (editPhoneModal) {
  editPhoneModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const phoneId = button.getAttribute('data-bs-id')

    // Update the modal's content.
    const modalTitle = editPhoneModal.querySelector('.modal-title')
    const modalFormId = editPhoneModal.querySelector('.modal-body #phone-id')

    if (phoneId == undefined) {
      modalTitle.textContent = `Add Phone`
      modalFormId.value = ""
    } else {
      fetch(`/api/phone/${phoneId}`)
        .then(response => response.json())
        .then(data => {
          // Populate Form Fields
          document.getElementById('phone-id').value = data.id;
          document.getElementById('phone-type').value = data.type;
          document.getElementById('phone-phone').value = data.phone;
          document.getElementById('phone-owner').value = data.owner;
        });
      modalTitle.textContent = `Edit Phone`
      modalFormId.value = phoneId
    }
  })
} */
