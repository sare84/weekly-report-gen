import { writeSubHeader } from './mdHelper';
import { initData } from '../setup/init';

const writeFileHeader = () => {  
  writeSubHeader(`KW ${initData.kwNumber} | ${initData.fromDateFormat} - ${initData.toDateFormat}`, 1);
};

const writeDays = () => {
  writeSubHeader('Tage', 2);
  
  for (var i = 1; i < 6; i++) {
    const day = initData.fromDate.day(i).format('dddd');
    writeSubHeader(day, 3);
  }
};

const writeNotes = () => {
  writeSubHeader('Notizen', 2);
};

const writeTodo = () => {
  writeSubHeader('Todo', 2);
};

const writeDone = () => {
  writeSubHeader('Done', 2);
};

const writeAdditional = () => {
  writeSubHeader('Sonstiges', 2);
};

const writeProtocol = async () => {
  writeFileHeader();
  writeDays();
  writeNotes();
  writeTodo();
  writeDone();
  writeAdditional(); 
};

export {
  writeProtocol
};
