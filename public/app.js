const devices = JSON.parse(localStorage.getItem('devices')) || [];

devices.forEach(function(device) {
    $('#students tbody').append(`
      <tr>
        <td>${device.FirstName}</td>
        <td>${device.LastName}</td>
        <td>${device.DOB}</td>
        <td>${device.Gender}</td>
        <td>${device.PhoneNumber}</td>
        <td>${device.EMail}</td>
        <td>${device.Subject}</td>
        <td>${device.Password}</td>
      </tr>`
    );
  });

  $('#add-student').on('click', function() {
    const FirstName = $('#FirstName').val();
    const LastName = $('#LastName').val();
    const DOB = $('#DOB').val();
    const Gender = $('#Gender').val();
    const PhoneNumber = $('#PhoneNumber').val();
    const EMail = $('#email').val();
    const Subject = $('#Subject').val();
    const Password = $('#Password').val();
    devices.push({ FirstName, LastName, DOB, PhoneNumber, EMail, Gender, Subject, Password});
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = 'student_list.html';
  });