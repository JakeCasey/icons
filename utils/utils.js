import html2canvas from 'html2canvas';

var download = require('js-file-download');
import toCanvas from 'html2canvas';

let generateImage = (ref) => {
  console.log(ref);
  toCanvas(ref, {
    useCORS: true,
    width: 512,
    height: 512,
    scrollY: 0,
  }).then(function (canvas) {
    downloadURI(canvas.toDataURL(), 'icon.png');
  });
};

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export { generateImage };
