function calculateFees() {
  // Get the selected values from the form
  let studentType = document.getElementById('studentType').value;
  let residency = document.getElementById('residency').value;
  let credits = document.getElementById('credits').value;

  if (credits === null || credits === "" || isNaN(credits) || parseInt(credits) <= 0) {
      alert("Valid number of credits is required.");
      return;
  }
  credits = parseInt(credits);

  let registrationFee = 0;
  let tuitionRate = 0;

  // Set registration fee and tuition rate based on the student type and residency
  if (studentType === 'b' && residency === 'i') {
      registrationFee = 200;
      tuitionRate = 350;
  } else if (studentType === 'b' && residency === 'o') {
      registrationFee = 600;
      tuitionRate = 700;
  } else if (studentType === 'm' && residency === 'i') {
      registrationFee = 300;
      tuitionRate = 450;
  } else if (studentType === 'm' && residency === 'o') {
      registrationFee = 900;
      tuitionRate = 900;
  }

  const tuitionFee = tuitionRate * credits;
  const totalFee = registrationFee + tuitionFee;

  // Display the calculated fees
  document.getElementById('registrationFee').innerText = registrationFee.toFixed(2);
  document.getElementById('tuitionRate').innerText = tuitionRate.toFixed(2);
  document.getElementById('tuitionFee').innerText = tuitionFee.toFixed(2);
  document.getElementById('totalFee').innerText = totalFee.toFixed(2);

  document.getElementById('output').style.display = 'block';
}
