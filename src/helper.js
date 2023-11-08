import { Notify } from 'notiflix';

const showError = message => {
  Notify.failure(`${message}`, {
    timeout: 1500,
    position: 'center-top',
    distance: '100px',
  });
};

export default showError;
