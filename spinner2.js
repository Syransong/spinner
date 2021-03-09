let spinning = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];

let time = 0; 

for (const line of spinning) {
  setTimeout(() => {
    process.stdout.write(line);
  }, time)
  time += 200;
};