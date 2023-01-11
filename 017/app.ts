
enum StatusCode {
  SUCCESS = 5,
  PENDING = -2,
  REJECTED = 'asd',
};


const res17 = {
  msg: 'Success',
  statusCode: StatusCode.PENDING,
};

console.log(res17);

function action(status: StatusCode) {
  console.log(status)
}


action(StatusCode.REJECTED);
action(-2);
action(3);
action(4);
// action('asd');


