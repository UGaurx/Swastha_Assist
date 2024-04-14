document.addEventListener('DOMContentLoaded', function() {
  // Function to open time picker when clicking on "From" and "To" blocks
  document.querySelectorAll('.time-input').forEach(input => {
    input.addEventListener('click', function() {
      closeTimePickers();
      showTimePicker(this);
    });
  });

  // Function to close all time pickers
  function closeTimePickers() {
    document.querySelectorAll('.time-picker').forEach(picker => {
      picker.remove();
    });
  }

  // Function to calculate time difference when "Analyze Routine" button is clicked
  document.querySelector('.analyze-btn').addEventListener('click', function() {
    const rows = document.querySelectorAll('table tbody tr');
    
    rows.forEach(row => {
      const fromInput = row.querySelector('.from');
      const toInput = row.querySelector('.to');
      const timeTakenCell = row.querySelector('.time-taken');
  
      const fromTime = parseTime(fromInput.value);
      const toTime = parseTime(toInput.value);
  
      if (fromTime && toTime) {
        const timeDiff = toTime - fromTime;
  
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  
        const formattedTimeTaken = `${hours} hours ${minutes} minutes`;
  
        timeTakenCell.textContent = formattedTimeTaken;
      } else {
        timeTakenCell.textContent = 'Invalid time';
      }
    });
  });

  // Function to parse time from input value
  function parseTime(timeString) {
    if (!timeString) return null;
    
    const [hours, minutes] = timeString.split(':').map(num => parseInt(num));
    return new Date(1970, 0, 1, hours, minutes);
  }

  // Function to show time picker
  function showTimePicker(input) {
    const timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    timePicker.innerHTML = `
      <input type="time" class="time-select">
      <button class="confirm-btn">OK</button>
    `;
    const confirmBtn = timePicker.querySelector('.confirm-btn');
    const timeSelect = timePicker.querySelector('.time-select');
    confirmBtn.addEventListener('click', function() {
      input.value = timeSelect.value;
      timePicker.remove();
    });
    input.parentNode.appendChild(timePicker);
  }

  // Function to print the table with CSS styles
  document.querySelector('.submit-btn').addEventListener('click', function() {
    const tableContent = document.querySelector('table').outerHTML;
    const styleSheet = document.querySelector('link[href="style.css"]').outerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Printed Table</title>
        ${styleSheet}
        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </head>
      <body>
        ${tableContent}
      </body>
      </html>
    `);

    printWindow.document.close();
  });
});
