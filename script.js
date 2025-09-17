document.getElementById('workout-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const exercise = document.getElementById('exercise').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;

  const logItem = document.createElement('li');
  logItem.textContent = `${exercise}: ${sets} sets of ${reps} reps`;

  document.getElementById('log').appendChild(logItem);

  // Clear form
  document.getElementById('sets').value = '';
  document.getElementById('reps').value = '';
});
