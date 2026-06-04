function ContentBlock({ currentHtml, currentCss, sizeGuideHtml }) {
  return (
    <div className="content-block" id="content-block">
      <div className="content-block__inner">
        <div className="content-card neo-brutalist">
          <div id="output">
            <span
              style={currentCss ? { color: 'inherit' } : {}}
              dangerouslySetInnerHTML={{ __html: currentHtml }}
            />
            {/* Invisible size guide — keeps layout stable using the longest text */}
            <div
              className="size-guide"
              dangerouslySetInnerHTML={{ __html: sizeGuideHtml }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBlock;
