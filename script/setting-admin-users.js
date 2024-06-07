
function toggleDropdown(id) {
    var dropdownOptions = document.getElementById(id);
    var allDropdowns = document.querySelectorAll('.dropdown-options');

    allDropdowns.forEach(function (dropdown) {
        if (dropdown.id !== id) {
            dropdown.style.display = 'none';
        }
    });

    if (dropdownOptions.style.display === 'none') {
        dropdownOptions.style.display = 'block';
    } else {
        dropdownOptions.style.display = 'none';
    }

    // Toggle active class on button
    var dropdownButton = document.getElementById(id.replace('dropdownOptions-', 'dropdownButton-'));
    var allDropdownButtons = document.querySelectorAll('.dropdown-toggle');

    allDropdownButtons.forEach(function (button) {
        if (button.id !== dropdownButton.id) {
            button.classList.remove('dropdown-button-active');
        }
    });

    dropdownButton.classList.toggle('dropdown-button-active');
}

function setActive(elementId) {
    // Remove active class from all dropdown items
    var dropdownItems = document.getElementsByClassName('dropdown-item');
    for (var i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].classList.remove('dropdown-item-active');
    }

    // Add active class to the clicked dropdown item
    var clickedItem = document.getElementById(elementId);
    clickedItem.classList.add('dropdown-item-active');
}
// Data for the table (example)
const tableData = [
    { nickname: "Vicky", role: "Administrator", spaceUsage: "1.1MB/Unlimited", group: "Group" },
    { nickname: "Administrator", role: "Administrator", spaceUsage: "1.1KB/2GB", group: "Group" },
    { nickname: "Vighnesh", role: "User", spaceUsage: "1.1KB/4GB", group: "Developer" }
];

// Function to populate the table with data
function populateTable(data) {
    const tableBody = document.getElementById('searchableTableBody');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach(row => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">${row.nickname}</td>
                <td class="py-4 whitespace-no-wrap border-b border-gray-300">${row.role}</td>
                <td class="py-4 whitespace-no-wrap border-b border-gray-300">
                    <input type="range" class="w-full" min="0" max="100" value="${row.spaceUsage}">
                    <span class="block text-sm">${row.spaceUsage}</span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">${row.group}</td>
            `;
        tableBody.appendChild(newRow);
    });
}

// Initial population of the table
populateTable(tableData);

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = tableData.filter(row =>
        row.nickname.toLowerCase().includes(searchTerm) ||
        row.role.toLowerCase().includes(searchTerm) ||
        row.group.toLowerCase().includes(searchTerm)
    );
    populateTable(filteredData);
});

// Function to toggle the popup
function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.toggle('hidden');
    } else {
        console.error('Popup with id ' + popupId + ' not found.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
const customSelectButton = document.getElementById('customSelectButton');
const customSelect = document.getElementById('customSelect');
const selectedOption = document.getElementById('selectedOption');
const selectedColor = document.getElementById('selectedColor');

customSelectButton.addEventListener('click', function () {
    customSelect.style.display = customSelect.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.custom-select-option').forEach(option => {
    option.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        const color = this.getAttribute('data-color');
        const text = this.innerText.trim();

        selectedOption.innerText = text;
        selectedOption.prepend(selectedColor);
        selectedColor.className = `w-4 h-4 rounded-full mr-3 ${color}`;
        customSelectButton.setAttribute('data-value', value);
        customSelect.style.display = 'none';
    });
});

document.addEventListener('click', function (event) {
    if (!customSelectButton.contains(event.target) && !customSelect.contains(event.target)) {
        customSelect.style.display = 'none';
    }
});
});


