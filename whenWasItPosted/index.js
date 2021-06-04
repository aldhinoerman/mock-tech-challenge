const whenWasItPosted = date => {
  // do code here
  if (typeof date !== 'object') {
    date = new Date(date);
  }

  let seconds = Math.floor((new Date() - date) / 1000);
  let intervalType;

  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    interval -= 1;
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 604800);
      if (interval >= 1) {
        intervalType = 'week';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        }
      }
    }
  }

    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }
    let lastType = "ago";
    return interval + ' ' + intervalType + ' ' + lastType;
  };


  // // do not change this code below
  const changeToString = __ => {
    const _ = new Date(__)
    const month = _.toLocaleString('default', { month: 'long' });
    const date = _.getDate()
    const year = _.getFullYear()
    return `${date} ${month} ${year}`
  }
  const test = (testCase, result) => console.log(testCase === result);

  const date = new Date();
  const date1 = new Date();
  const date2 = new Date();
  const date3 = new Date();
  const date4 = new Date();

  test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '11 months ago')
  test(whenWasItPosted(changeToString(date1.setDate(date.getDate() - 14))), '2 weeks ago')
  test(whenWasItPosted(changeToString(date2.setDate(date.getDate() - 3))), '3 days ago')
  test(whenWasItPosted(changeToString(date3.setFullYear(date.getFullYear() - 1))), '1 year ago')
  test(whenWasItPosted(changeToString(date4.setFullYear(date.getFullYear() - 20))), '20 years ago')