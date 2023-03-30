import React, { forwardRef, useEffect, useState } from "react";
import {
  useAddBucketLinksMutation,
  useUpdateBucketLinksMutation,
} from "../features/api/apiSlice";
import "./form.css";

const Form = forwardRef(({ modalHandler, isEdit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const [errors, setErrors] = useState({});

  const [addLinks] = useAddBucketLinksMutation();
  const [editLinks] = useUpdateBucketLinksMutation();

  const addLinksHandler = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!videoLink) {
      newErrors.videoLink = "Please enter a YouTube video link";
    } else if (
      !/^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{11}$/i.test(videoLink)
    ) {
      newErrors.videoLink = "Please enter a valid YouTube video link";
    }

    if (!name) {
      newErrors.name = "Please enter a name";
    }

    if (!category) {
      newErrors.category = "Please select a category";
    }

    if (Object.keys(newErrors).length === 0) {
      const embedLink = videoLink.replace("watch?v=", "embed/");
      if (isEdit) {
        editLinks({
          id: isEdit?.id,
          name: name,
          category: category,
          link: embedLink,
        });
      } else addLinks({ name: name, category: category, link: embedLink });
      modalHandler();
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    if (isEdit?.id) {
      setName(isEdit.name);
      setCategory(isEdit.category);
      setVideoLink(isEdit.link);
    }
  }, []);

  return (
    <form onSubmit={addLinksHandler} className="form__container">
      <div>
        <label>Name :</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Categories:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select</option>
          <option value="Trending">Trending</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="News">News</option>
        </select>
        {errors.category && <span className="error">{errors.category}</span>}
      </div>
      <div>
        <label>Link:</label>
        <input
          placeholder="Enter a valid youtube link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        {errors.videoLink && <span className="error">{errors.videoLink}</span>}
      </div>
      <div className="submit_btn">
        <button>Submit</button>
      </div>
    </form>
  );
});

export default Form;
