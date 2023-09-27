import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // fileTransfer: FileTransferObject = this.transfer.create();

  constructor(
    //private transfer: FileTransfer,

    private file: File
  ) {}

  clickButton(): void {
    console.log('click');
  }

  // upload() {
  //   let options: FileUploadOptions = {
  //     fileKey: 'file',
  //     fileName: 'name.jpg', // 文件類型
  //     headers: {},
  //     params: {}, // 如果要傳參數，寫這裡
  //   };

  //   // URL
  //   let url = 'https://example.com/upload';

  //   // File path
  //   let filePath = 'path/to/your/file.jpg';

  //   this.fileTransfer.upload(filePath, url, options).then(
  //     (data) => {
  //       // Success! The file has been uploaded.
  //       console.log('File upload success:', data);
  //     },
  //     (err) => {
  //       // Handle error
  //       console.error('File upload error:', err);
  //     }
  //   );
  // }

  // download() {
  //   const url = 'http://www.example.com/file.pdf';
  //   this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then(
  //     (entry) => {
  //       console.log('download complete: ' + entry.toURL());
  //     },
  //     (error) => {
  //       // handle error
  //     }
  //   );
  // }
}
