function calculateGrade() {
  let s1 = parseFloat(document.getElementById("sub1").value) || 0;
  let s2 = parseFloat(document.getElementById("sub2").value) || 0;
  let s3 = parseFloat(document.getElementById("sub3").value) || 0;
  let s4 = parseFloat(document.getElementById("sub4").value) || 0;
  let s5 = parseFloat(document.getElementById("sub5").value) || 0;

  let total = s1 + s2 + s3 + s4 + s5;
  let average = total / 5;

  let grade = '';

  if (average >= 90) grade = 'A+';
  else if (average >= 80) grade = 'A';
  else if (average >= 70) grade = 'B+';
  else if (average >= 60) grade = 'B';
  else if (average >= 50) grade = 'C';
  else if (average >= 40) grade = 'D';
  else grade = 'F';

  document.getElementById("output").innerText = 
    `Total Marks: ${total}/500\nAverage: ${average.toFixed(2)}%\nGrade: ${grade}`;
}
