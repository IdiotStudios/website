export function showErrToast(message, duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const errToast = document.createElement('div');
  errToast.className = 'toast-err';
  errToast.textContent = message;
  container.appendChild(errToast);

  setTimeout(() => errToast.classList.add('show'), 100);
  setTimeout(() => {
    errToast.classList.remove('show');
    setTimeout(() => errToast.remove(), 400);
  }, duration);
};

export function showInfToast(message, duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  
  const infToast = document.createElement('div');
  infToast.className = 'toast-inf';
  infToast.textContent = message;
  container.appendChild(infToast);

  setTimeout(() => infToast.classList.add('show'), 100);

  setTimeout(() => {
    infToast.classList.remove('show');
    setTimeout(() => infToast.remove(), 400);
  }, duration);
};