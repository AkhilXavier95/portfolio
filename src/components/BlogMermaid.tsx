"use client";

import { useEffect, useRef } from "react";

type BlogMermaidProps = {
  html: string;
};

const BlogMermaid = ({ html }: BlogMermaidProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const renderDiagrams = async () => {
      const root = containerRef.current;
      if (!root) return;

      const blocks = root.querySelectorAll("pre code.language-mermaid");
      if (blocks.length === 0) return;

      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "loose",
        fontFamily: "inherit",
      });

      for (const [index, code] of Array.from(blocks).entries()) {
        if (cancelled) return;

        const pre = code.closest("pre");
        if (!pre || pre.dataset.mermaidRendered === "true") continue;

        const source = code.textContent?.trim() ?? "";
        if (!source) continue;

        const id = `mermaid-${index}-${Math.random().toString(36).slice(2, 9)}`;

        try {
          const { svg } = await mermaid.render(id, source);
          if (cancelled) return;

          const wrapper = document.createElement("div");
          wrapper.className = "mermaid-diagram";
          wrapper.innerHTML = svg;
          pre.dataset.mermaidRendered = "true";
          pre.replaceWith(wrapper);
        } catch (error) {
          console.error("Failed to render Mermaid diagram", error);
        }
      }
    };

    void renderDiagrams();

    return () => {
      cancelled = true;
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className="markdown-content max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogMermaid;
