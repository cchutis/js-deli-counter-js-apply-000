//one argument, return changed to reflect number 
let customerNumber = 0;

function takeANumber(line){
  line.push(++customerNumber);
  return `Welcome. You are ticket number ${customerNumber}.`;
}

/* function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
} */


function nowServing(line) {
  if (!line.length) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.';
  }
  let lineSummary = [];
  
  for (let i = 0; i < line.length; i++) {
    lineSummary.push(i + 1 + '. ' + line[i])
  }
  return `The line is currently: ${lineSummary.join(', ')}`;
}