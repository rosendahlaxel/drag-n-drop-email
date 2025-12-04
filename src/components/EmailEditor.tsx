import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import { getGrapesConfig, registerEmailBlocks } from '../config/grapesConfig';

const EmailEditor = () => {
  const editorRef = useRef<grapesjs.Editor | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current || !containerRef.current) return;

    const editor = grapesjs.init(getGrapesConfig(containerRef.current));
    registerEmailBlocks(editor);

    editor.on('load', () => {
      editor.setDevice('Desktop');
    });

    editorRef.current = editor;

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  const handleLogHtml = () => {
    if (!editorRef.current) return;

    const html = editorRef.current.getHtml();
    const css = editorRef.current.getCss();

    // Future: expose this to an external agent for programmatic use.
    // eslint-disable-next-line no-console
    console.log('Email HTML output', { html, css });
  };

  return (
    <section className="editor-shell">
      <div className="toolbar">
        <button className="cta" type="button" onClick={handleLogHtml}>
          Log Email HTML
        </button>
      </div>
      <div className="editor-canvas" ref={containerRef} />
    </section>
  );
};

export default EmailEditor;
