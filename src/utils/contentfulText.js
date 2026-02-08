import React from "react";

export const normalizeAltText = (alt, fallback) => {
  const cleaned = (alt || "").trim();
  if (cleaned.length < 3) {
    return fallback;
  }
  return cleaned;
};

export const extractText = (node) => {
  if (!node) {
    return "";
  }
  if (node.nodeType === "text") {
    return node.value || "";
  }
  if (Array.isArray(node.content)) {
    return node.content.map(extractText).join("");
  }
  return "";
};

export const createHeadingRenderer = (Tag) => (node, children) => {
  const headingText = extractText(node).trim();
  if (!headingText) {
    return null;
  }
  return React.createElement(Tag, null, children);
};
