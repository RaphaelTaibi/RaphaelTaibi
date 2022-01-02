import FileSaver from 'file-saver';

const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/resources/cv.pdf",
      "CV.pdf"
    );
};
    export default saveFile;