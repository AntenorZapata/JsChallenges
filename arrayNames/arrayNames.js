function fullNames(names) {
  let result = [];
  names.forEach((element) => {
    result.push(`${element.firstname} ${element.lastname}`);
  });
  console.log(result);
}

Input: names = [
  { firstname: 'Bruce', lastname: 'Wayne' },
  { firstname: 'Clark', lastname: 'Kent' },
];

fullNames(names);
