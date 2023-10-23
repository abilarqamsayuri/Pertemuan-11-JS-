 // Fungsi event handler untuk event mouse
 function handleMouseEvent(event) {
    document.getElementById('output').innerHTML = 'Mouse Event : ' + event.type;
  }

  // Fungsi event handler untuk event keyboard
  function handleKeyboardEvent(event) {
    document.getElementById('output').innerHTML = 'Keyboard Event : ' + event.type;
  }

  // Fungsi event handler untuk event change pada select option
  function handleChangeEvent(event) {
    document.getElementById('output').innerHTML = 'Change Event : ' + event.type;
  }

  // Mengambil elemen select
  var select = document.getElementById('selectOption');

  // Menambahkan event listeners untuk masing-masing event
  select.addEventListener('change', handleChangeEvent);

  // Event listener mouse hanya aktif jika mouse dipilih
  select.addEventListener('change', function () {
    var selectedOption = select.value;
    if (selectedOption === 'mouse') {
      select.addEventListener('mouseover', handleMouseEvent);
      select.addEventListener('mouseout', handleMouseEvent);
    } else {
      select.removeEventListener('mouseover', handleMouseEvent);
      select.removeEventListener('mouseout', handleMouseEvent);
    }
  });

  // Event listener keyboard hanya aktif jika keyboard dipilih
  select.addEventListener('change', function () {
    var selectedOption = select.value;
    if (selectedOption === 'keyboard') {
      window.addEventListener('keydown', handleKeyboardEvent);
      window.addEventListener('keyup', handleKeyboardEvent);
    } else {
      window.removeEventListener('keydown', handleKeyboardEvent);
      window.removeEventListener('keyup', handleKeyboardEvent);
    }
  });