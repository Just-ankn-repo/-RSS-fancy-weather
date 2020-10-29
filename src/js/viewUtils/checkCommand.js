import speechCommands from '../constants/speechCommands';
import commandsFunctions from '../constants/commandsFunctions';
import htmlElements from '../constants/htmlElements';


export default (transcript) => {
  const commands = Object.getOwnPropertyNames(speechCommands);
  const findCommand = commands.find((property) => {
    const command = speechCommands[property].find((value) => transcript.includes(value));
    return command;
  });

  if (findCommand) commandsFunctions[findCommand](htmlElements);

  return !!findCommand;
};
