import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  sendFile() {
    console.log();
  }

  onChange = (e) => {
    const { files } = e.target;
    console.log(e.target.files[0]);
    this.setState({ files: [...this.state.files, ...files] });
  }

  handlSubmit = () => {
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open("POST", '/f', true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('OK');
      }
    };
    this.state.files.forEach((x, i) => fd.append('file-' + i, x));
    //fd.append('myFile', this.state.file);
    // Initiate a multipart/form-data upload
    xhr.send(fd);
  }

  render() {
    const { files } = this.state;
    console.log(files);
    return (
      <div className="app">
        {/*<input name="myfile" type="file" onChange={this.onChange} />*/}
        <button onClick={this.handlSubmit}>upload</button>
        <label className="upload-file" htmlFor="addFile">
          <input id="addFile" name="addFile" type="file" onChange={this.onChange} />
        </label>
        <ul className="uploading-files">
          {
            files.map((x, i) =>
              <li
                key={x.name}
              >
                {x.name}
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  s => { return {}; }
)(App);

class UploadingFileItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={x.name}>{x.name}</li>
    );
  }
}