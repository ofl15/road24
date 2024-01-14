import { useState } from "react";
import axios from "axios";
import { CAR } from "../urls";

export default function AddImage() {
  const [files, setFiles] = useState();

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('files', files[0])
    axios.post("http://localhost:1337/api/upload", formData)
        .then((res) => {
            const imageId = res.data[0]
            axios.post("http://localhost:1337/api/cars", {
                data: { image: imageId }
            }).then((res) => {
                console.log(res.data.data, "---------------------------")
            })
        })
}

  return (
    <form onSubmit={uploadImage}>
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <button type="submit">Submit</button>
    </form>
  );
}
