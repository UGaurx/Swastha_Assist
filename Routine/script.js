document.getElementById('analyze-btn').addEventListener('click', function() {
    const rows = document.querySelectorAll('table tbody tr');
    
    rows.forEach(row => {
      const fromInput = row.querySelector('input[name^="from"]');
      const toInput = row.querySelector('input[name^="to"]');
      const timeSpentCell = row.querySelector('td:nth-child(4)');
  
      const fromTime = fromInput.value ? new Date(`1970-01-01T${fromInput.value}:00`) : null;
      const toTime = toInput.value ? new Date(`1970-01-01T${toInput.value}:00`) : null;
  
      const timeDiff = toTime - fromTime;
  
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  
      const formattedTimeSpent = `${hours} hours ${minutes} minutes`;
  
      timeSpentCell.textContent = formattedTimeSpent;
    });
  });
  
  document.getElementById('submit-btn').addEventListener('click', function() {
    const printTable = document.createElement('table');
    const originalRows = document.querySelectorAll('table tbody tr');
    
    originalRows.forEach(row => {
      const printRow = printTable.insertRow();
      
      for (let i = 0; i < row.cells.length; i++) {
        const printCell = printRow.insertCell(i);
        const content = row.cells[i].querySelector('input') ? row.cells[i].querySelector('input').value : row.cells[i].textContent;
        printCell.textContent = content;
      }
    });
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Routine Table</title></head><body>');
    printWindow.document.write('<h2>Routine Table</h2>');
    printWindow.document.write(printTable.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  });
  