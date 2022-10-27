import React from "react";

const Canvas = ({ content = <div>This is content</div> }) => {
  return (
    <section className="scroll-indicator-none flex flex-col h-screen pt-20 overflow-y-auto">
      {content}
    </section>
  );
};

export default Canvas;
