

/* never type */


function generateError (message: string): never {
  throw new Error(message);
}


// const a29: never = 1;
const b29 = generateError('try');


type paymentAction = 'refund' | 'checkout';
function processPayment(action: paymentAction) {
  switch (action) {
    case 'refund':
      /** */
      break;
    case 'checkout':
      /** */
      break;
    default:
      const _: never = action; /* never as checking method*/
      throw new Error('no such action available');
      break;
  }
}


function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if(typeof x === 'number') {
    return false;
  }

  generateError('no such type');

}