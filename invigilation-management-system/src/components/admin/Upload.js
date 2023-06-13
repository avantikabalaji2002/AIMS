import React, { useState, useEffect } from "react";
import { storage } from '../../Firebase';
import './Upload.css';
import { ref, getDownloadURL, uploadBytesResumable, listAll, deleteObject } from "firebase/storage";

function Upload() {
  const [imgUrl, setImgUrl] = useState([]);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    listFiles();
  }, []);

  const listFiles = () => {
    const storageRef = ref(storage, "files/");
    listAll(storageRef)
      .then((res) => {
        const filePromises = res.items.map((item) => getDownloadURL(item).then((url) => ({ url, name: item.name }))
        );
        Promise.all(filePromises)
          .then((files) => {
            setImgUrl(files);
          })
          .catch((error) => {
            console.log("Error retrieving files:", error);
          });
      })
      .catch((error) => {
        console.log("Error listing files:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file)
      return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl((prevUrls) => [...prevUrls, { url: downloadURL, name: file.name }]);
        });
      }
    );
  };

  const handleDelete = (fileName) => {
    const storageRef = ref(storage, `files/${fileName}`);
    deleteObject(storageRef)
      .then(() => {
        setImgUrl((prevUrls) => prevUrls.filter((url) => url.name !== fileName));
        alert(`File "${fileName}" has been deleted successfully.`);
      })
      .catch((error) => {
        alert(`Error deleting file: ${error.message}`);
      });
  };

  const handleDownload = (url) => {
    // Create an invisible anchor element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    link.click();
  };

  return (
    <div className="upload-admin-container">
           <header className="header-upload-admin">
        <h2 className="logo-upload-admin">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-admin-upload">
        <a href="/">Home</a>
          <a href="AdminDashboard">Admin Dashboard</a>
          {/* <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a> */}
        </nav>
      </header>
      <div className="upload-bckg">
      <form onSubmit={handleSubmit} className="form-upload">
  <input
  type="file"
  style={{
    fontSize: '14px',
    padding: '0.45rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#243556',
    color: 'white',
    cursor: 'pointer'
  }}
/>

  <button type="submit" className="upload-button">Upload</button>
</form>

{progressPercent > 0 && (
  <div className="progress-bar">
    <div className="progress" style={{ width: `${progressPercent}%` }}>
      {progressPercent}%
    </div>
  </div>
)}

<h2>Uploading done {progressPercent}%</h2>

<hr />
<h3>Files Uploaded</h3>
{imgUrl.map((file, index) => (
  <div key={index} className="file-container">
    <h4>{index + 1}. {file.name}</h4>
    <div>
      <button className="file-button" onClick={() => handleDelete(file.name)}>
        Delete
      </button>
      <button className="file-button" onClick={() => handleDownload(file.url)}>
        Download
      </button>
    </div>
  </div>
))}

    </div>
    <footer className="footer-upload-admin">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer></div>
  );
}
export default Upload;
