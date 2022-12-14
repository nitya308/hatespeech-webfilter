export default function About() {
  return (
    <div className="about">
      <h1>Web Filter</h1>
      <div className="subtitle">
        Web-filter is a web app and chrome extension that hides hate speech and filters out trigger words from the web. It works by blurring out sentences and words that are problematic.
        You can choose to reveal these words by specificaly clicking on the blurred text.
        <br />
        You can also add certain trigger words to your custom list and our app will blur them out for you.
      </div>
      <button className="button">Download Chrome Extension</button>
    </div>
  );
}