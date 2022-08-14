const users = {
  "John": 28,
  "Mark": 30,
  "David": 25,
  "Richard": 42,
  "Bob": 12,
  "Tom": 61,
};
let totalUserAge = 0;
for (prop in users) {
  totalUserAge += users[prop];
}
alert (`Total age of all users is: ${totalUserAge}`);
