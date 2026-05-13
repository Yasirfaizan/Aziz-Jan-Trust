import { useEffect } from "react";

const ensureMetaTag = (name, value) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
};

const ensureOgTag = (property, value) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
};

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Aziz Jan Trust`;
      ensureOgTag("og:title", `${title} | Aziz Jan Trust`);
    }
    if (description) {
      ensureMetaTag("description", description);
      ensureOgTag("og:description", description);
    }
  }, [title, description]);
}
